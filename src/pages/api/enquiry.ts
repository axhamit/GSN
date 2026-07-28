import type { NextApiRequest, NextApiResponse } from 'next'
import { EnquiryPayload } from '@/interfaces/enquiry'

interface EnquiryResponse {
  success: boolean
  message: string
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

    const { name, email, phone, message, courseName, coursePrice, source } = body

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !courseName?.trim()) {
      return res.status(400).json({ success: false, message: 'Name, email, phone and course are required' })
    }

    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' })
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL is not configured; enquiry was not stored')
      return res.status(500).json({ success: false, message: 'Enquiry storage is not configured' })
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
    source,
  }),
});

const responseText = await webhookResponse.text();

console.log("Status:", webhookResponse.status);
console.log("Response:", responseText);

    if (!webhookResponse.ok) {
      throw new Error(`Google Sheets webhook responded with ${webhookResponse.status}`)
    }

    return res.status(200).json({ success: true, message: 'Enquiry recorded' })
  } catch (error) {
    console.error('Failed to store enquiry in Google Sheets:', error)
    return res.status(502).json({ success: false, message: 'Could not store your enquiry, please try again' })
  }
}

export default handler
