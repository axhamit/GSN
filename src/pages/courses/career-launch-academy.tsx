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
        <link rel="canonical" href="https://www.gsnfoundation.com/courses/career-launch-academy" />
        <meta property="og:title" content="Career Launch Academy | GSN Foundation" />
        <meta
          property="og:description"
          content="Build professional communication, personal branding, workplace skills, and interview readiness with GSN Foundation's Career Launch Academy."
        />
        <meta property="og:url" content="https://www.gsnfoundation.com/courses/career-launch-academy" />
        <meta
          property="og:image"
          content="https://www.gsnfoundation.com/images/courses/Career%20Launch%20Program_%20Future-Ready%20Learning.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Launch Academy | GSN Foundation" />
        <meta
          name="twitter:description"
          content="Build professional communication, personal branding, workplace skills, and interview readiness with GSN Foundation's Career Launch Academy."
        />
        <meta
          name="twitter:image"
          content="https://www.gsnfoundation.com/images/courses/Career%20Launch%20Program_%20Future-Ready%20Learning.png"
        />
      </Head>
      <CareerLaunchCoursePage course={course} />
    </>
  )
}

CareerLaunchAcademyPage.getLayout = (page) => <MainLayout showCareerPopup={false}>{page}</MainLayout>

export default CareerLaunchAcademyPage
