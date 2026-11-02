import type { Course } from '@/interfaces/course'
import { data } from '@/components/home/popular-course.data'

export const GENERAL_BROCHURE_SLUG = 'gsn-learning-programs'

const generalBrochure: Course = {
  id: 'gsn-learning-programs',
  slug: GENERAL_BROCHURE_SLUG,
  title: 'GSN Foundation Learning Programmes',
  cover: '',
  rating: 0,
  ratingCount: 0,
  price: 0,
  category: 'Learning programmes',
  tags: ['School and board preparation', 'Competitive exams', 'Career skills', 'Artificial intelligence'],
  description:
    'Explore structured learning programmes for school success, competitive exams, career readiness, and artificial intelligence.',
}

const normalizeCourseName = (value: string): string =>
  value
    .replace(/^🚀\s*/, '')
    .replace(/^Career Launch Academy - /i, '')
    .trim()
    .toLowerCase()

export const findBrochureCourse = (slug?: string, courseName?: string): Course | undefined => {
  if (slug === GENERAL_BROCHURE_SLUG) {
    return generalBrochure
  }

  const bySlug = data.find((course) => course.slug === slug)
  if (bySlug) {
    return bySlug
  }

  if (!courseName) {
    return undefined
  }

  const normalizedName = normalizeCourseName(courseName)
  const byName = data.find((course) => normalizeCourseName(course.title) === normalizedName)
  if (byName) {
    return byName
  }

  if (normalizedName.includes('career launch')) {
    return data.find((course) => course.slug === 'career-launch-academy')
  }

  return undefined
}

export const resolveBrochureSlug = (slug?: string, courseName?: string): string =>
  findBrochureCourse(slug, courseName)?.slug || GENERAL_BROCHURE_SLUG

const toPdfText = (value: string): string =>
  value
    .normalize('NFKD')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')

const wrapText = (value: string, maxLength: number): string[] => {
  const words = value.split(/\s+/)
  const lines: string[] = []
  let line = ''

  words.forEach((word) => {
    if (line && `${line} ${word}`.length > maxLength) {
      lines.push(line)
      line = word
    } else {
      line = line ? `${line} ${word}` : word
    }
  })

  if (line) {
    lines.push(line)
  }

  return lines
}

const pdfText = (value: string, x: number, y: number, size: number, color: string): string =>
  `BT /F1 ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${toPdfText(value)}) Tj ET\n`

export const createCourseBrochurePdf = (course: Course): Buffer => {
  const commands: string[] = [
    'q 0.075 0.18 0.28 rg 0 628 595 214 re f Q\n',
    'q 0.07 0.39 0.64 rg 48 612 52 4 re f Q\n',
    pdfText('GSN FOUNDATION  /  COURSE GUIDE', 48, 792, 10, '0.78 0.87 0.93'),
  ]

  let titleY = 752
  wrapText(course.title, 33).slice(0, 3).forEach((line) => {
    commands.push(pdfText(line, 48, titleY, 25, '1 1 1'))
    titleY -= 34
  })

  commands.push(pdfText(course.category, 48, 654, 11, '0.78 0.87 0.93'))
  commands.push(pdfText('A clearer path to your next goal.', 48, 574, 20, '0.075 0.18 0.28'))
  commands.push(pdfText('ABOUT THIS PROGRAMME', 48, 535, 9, '0.07 0.39 0.64'))

  const description =
    course.description ||
    'A structured learning programme with guided lessons, focused practice, and support to help you make steady progress.'
  let bodyY = 510
  wrapText(description, 78).slice(0, 4).forEach((line) => {
    commands.push(pdfText(line, 48, bodyY, 11, '0.25 0.32 0.38'))
    bodyY -= 17
  })

  commands.push('q 0.95 0.97 0.98 rg 48 340 499 76 re f Q\n')
  commands.push(pdfText('PROGRAMME DETAILS', 64, 392, 9, '0.07 0.39 0.64'))
  commands.push(pdfText(`Category: ${course.category}`, 64, 369, 11, '0.12 0.18 0.23'))
  commands.push(pdfText(`Duration: ${course.duration || 'Contact us for details'}`, 64, 349, 11, '0.12 0.18 0.23'))

  commands.push(pdfText('WHAT YOU CAN EXPECT', 48, 305, 9, '0.07 0.39 0.64'))
  const highlights = course.highlights?.length
    ? course.highlights
    : course.tags?.length
      ? course.tags.slice(0, 3)
      : ['Structured learning with clear milestones', 'Guided practice and expert support', 'A focused path toward your goals']

  let highlightY = 280
  highlights.slice(0, 4).forEach((highlight) => {
    commands.push(pdfText(`-  ${highlight}`, 52, highlightY, 11, '0.25 0.32 0.38'))
    highlightY -= 21
  })

  commands.push('q 0.075 0.18 0.28 rg 48 92 499 92 re f Q\n')
  commands.push(pdfText('Ready to take the next step?', 66, 151, 15, '1 1 1'))
  commands.push(pdfText('Our team can help you choose the right learning path.', 66, 128, 10, '0.85 0.9 0.94'))
  commands.push(pdfText('contact@gsnfoundation.com  |  www.gsnfoundation.com', 66, 108, 9, '0.85 0.9 0.94'))

  const content = commands.join('')
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${Buffer.byteLength(content, 'ascii')} >>\nstream\n${content}endstream`,
  ]

  let document = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(document, 'ascii'))
    document += `${index + 1} 0 obj\n${object}\nendobj\n`
  })

  const xrefOffset = Buffer.byteLength(document, 'ascii')
  document += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  offsets.slice(1).forEach((offset) => {
    document += `${String(offset).padStart(10, '0')} 00000 n \n`
  })
  document += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  return Buffer.from(document, 'ascii')
}
