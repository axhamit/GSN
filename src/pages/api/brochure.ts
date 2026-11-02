import type { NextApiRequest, NextApiResponse } from 'next'
import { createCourseBrochurePdf, findBrochureCourse } from '@/utils/course-brochure'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
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

  const pdf = createCourseBrochurePdf(course)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', `attachment; filename="${course.slug}-brochure.pdf"`)
  res.setHeader('Content-Length', pdf.length)
  res.status(200).send(pdf)
}

export default handler
