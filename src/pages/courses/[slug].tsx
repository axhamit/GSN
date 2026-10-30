import React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { data } from '@/components/home/popular-course.data'
import CoursePageTemplate from '@/components/pages/course-page-template'
import dynamic from 'next/dynamic'

// Dynamically import AI course pages to avoid SSR issues
const DynamicAdvancedAgenticAI = dynamic(() => import('./advanced-agentic-generative-ai'), {
  ssr: false,
})
const DynamicAppliedAIMaster = dynamic(() => import('./applied-ai-master-certification'), {
  ssr: false,
})

const CourseDetailPage: NextPageWithLayout = () => {
  const router = useRouter()
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug

  if (!router.isReady) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5">Loading course details...</Typography>
      </Box>
    )
  }

  // Route to dedicated AI course pages
  if (slug === 'advanced-agentic-generative-ai') {
    return <DynamicAdvancedAgenticAI />
  }

  if (slug === 'applied-ai-master-certification') {
    return <DynamicAppliedAIMaster />
  }

  // Use existing template for other courses
  const course = data.find((item) => item.slug === slug || String(item.id) === slug)

  if (!course) {
    return (
      <Box sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Course not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          The course you are looking for does not exist or has been moved.
        </Typography>
        <Button variant="contained" onClick={() => router.push('/')}>
          Back to Home
        </Button>
      </Box>
    )
  }

  return <CoursePageTemplate course={course} />
}

CourseDetailPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CourseDetailPage
