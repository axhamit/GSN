import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import CoursePageTemplate from '@/components/pages/course-page-template'
import { data } from '@/components/home/popular-course.data'

const CareerLaunchAcademyPage: NextPageWithLayout = () => {
  const course = data.find((item) => item.slug === 'career-launch-academy')

  if (!course) {
    return null
  }

  return <CoursePageTemplate course={course} />
}

CareerLaunchAcademyPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CareerLaunchAcademyPage
