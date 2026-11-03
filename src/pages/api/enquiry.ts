import type { NextApiRequest, NextApiResponse } from 'next'
import { EnquiryPayload } from '@/interfaces/enquiry'
import { resolveBrochureSlug } from '@/utils/course-brochure'

interface EnquiryResponse {
  success: boolean
  message: string
  brochureUrl?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<EnquiryResponse>
): Promise<void | NextApiResponse<EnquiryResponse>> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    // Guard against a missing or non-object body so that destructuring
    // never throws an unhandled TypeError (which would surface as a 500).
    const body = (req.body ?? {}) as Partial<EnquiryPayload>

    const { name, email, phone, message, courseName, coursePrice, source, courseSlug } = body

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !courseName?.trim()) {
      return res.status(400).json({ success: false, message: 'Name, email, phone and course are required' })
    }

    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' })
    }

    const brochureSlug = resolveBrochureSlug(courseSlug, courseName)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL is not configured; enquiry was not stored')
      return res.status(500).json({ success: false, message: 'Enquiry storage is not configured' })
    }

    const requestReferer = req.headers.referer
    let pageUrl = ''
    let pagePath = ''
    let referrerUrl = ''

    if (requestReferer) {
      try {
        const referer = new URL(requestReferer)
        if (referer.protocol === 'http:' || referer.protocol === 'https:') {
          pagePath = referer.pathname
          pageUrl = `${referer.origin}${referer.pathname}`
          referrerUrl = pageUrl
        }
      } catch {
        // Ignore invalid referrer headers; the form source still identifies the submission surface.
      }
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        phone,
        message,
        courseName,
        coursePrice,
        source: source || 'website',
        courseSlug: brochureSlug,
        pageUrl,
        pagePath,
        referrerUrl,
      }),
    })

    if (!webhookResponse.ok) {
      if (webhookResponse.status === 401 || webhookResponse.status === 403) {
        console.error(`Google Sheets webhook denied access with ${webhookResponse.status}`)
        return res.status(502).json({
          success: false,
          message: 'Google Sheets denied access. Redeploy the Apps Script web app with access set to Anyone, then try again.',
        })
      }

      throw new Error(`Google Sheets webhook responded with ${webhookResponse.status}`)
    }

    const webhookResult = await webhookResponse.json() as { success?: boolean }
    if (webhookResult.success !== true) {
      throw new Error('Google Sheets webhook did not confirm that the enquiry was stored')
    }

    const brochureUrl = `/api/brochure?course=${encodeURIComponent(brochureSlug)}`

    return res.status(200).json({
      success: true,
      message: 'Enquiry recorded',
      brochureUrl,
    })
  } catch (error) {
    console.error('Failed to store enquiry in Google Sheets:', error)
    return res.status(502).json({ success: false, message: 'Could not store your enquiry, please try again' })
  }
}

export default handler
