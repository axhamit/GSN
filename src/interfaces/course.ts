export interface Course {
  id: number | string
  slug?: string
  title: string
  cover: string
  rating: number
  ratingCount: number
  price: number
  category: string
  tags?: string[]
  duration?: string
  instructor?: string
  featured?: boolean
  badge?: string
  students?: number
  description?: string
  highlights?: string[]
}
