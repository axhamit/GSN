import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createCourseBrochurePdf, findBrochureCourse } from '@/utils/course-brochure'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const slug = typeof req.query.course === 'string' ? req.query.course : undefined
  const course = findBrochureCourse(slug)

  if (!course || !course.slug) {
    res.status(404).json({ message: 'Course brochure not found' })
    return
  }

  const isAppliedAi = course.slug === 'applied-ai-master-certification'
  const filename = isAppliedAi
    ? 'GSN_Foundation_Applied_AI_Practitioner_Program.pdf'
    : `${course.slug}-brochure.pdf`

  let pdf: Buffer
  if (isAppliedAi) {
    try {
      pdf = await readFile(join(process.cwd(), 'public', 'pdf', filename))
    } catch (error) {
      console.error('Failed to read the Applied AI brochure PDF:', error)
      res.status(500).json({ message: 'Course brochure is temporarily unavailable' })
      return
    }
  } else {
    pdf = createCourseBrochurePdf(course)
  }

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.setHeader('Content-Length', pdf.length)
  res.status(200).send(pdf)
}

export default handler
