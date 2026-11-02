import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import CareerLaunchCoursePage from '@/components/pages/career-launch-course-page'
import { data } from '@/components/home/popular-course.data'
import Head from 'next/head'

const CareerLaunchAcademyPage: NextPageWithLayout = () => {
  const course = data.find((item) => item.slug === 'career-launch-academy')

  if (!course) {
    return null
  }

  return (
    <>
      <Head>
        <title>Career Launch Academy | GSN Foundation</title>
        <meta
          name="description"
          content="Build professional communication, personal branding, workplace skills, and interview readiness with GSN Foundation's Career Launch Academy."
        />
      </Head>
      <CareerLaunchCoursePage course={course} />
    </>
  )
}

CareerLaunchAcademyPage.getLayout = (page) => <MainLayout showCareerPopup={false}>{page}</MainLayout>

export default CareerLaunchAcademyPage
