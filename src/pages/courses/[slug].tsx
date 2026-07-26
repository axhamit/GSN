import React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { data } from '@/components/home/popular-course.data'
import CoursePageTemplate from '@/components/pages/course-page-template'

const CourseDetailPage: NextPageWithLayout = () => {
  const router = useRouter()
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug
  const course = data.find((item) => item.slug === slug || String(item.id) === slug)

  if (!router.isReady) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5">Loading course details...</Typography>
      </Box>
    )
  }

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
