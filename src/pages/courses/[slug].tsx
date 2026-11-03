import React from 'react'
import Head from 'next/head'
import type { GetServerSideProps, NextPage } from 'next'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { data } from '@/components/home/popular-course.data'
import CoursePageTemplate from '@/components/pages/course-page-template'
import type { Course } from '@/interfaces/course'

interface CourseDetailPageProps {
  course: Course
  slug: string
}

const SITE_URL = 'https://www.gsnfoundation.com'

const CourseDetailPage: NextPage<CourseDetailPageProps> & Pick<NextPageWithLayout, 'getLayout'> = ({
  course,
  slug,
}) => {
  const title = `${course.title} | GSN Foundation`
  const description =
    course.description ||
    `Explore the ${course.title} at GSN Foundation, including course topics, program duration, and enrollment information.`
  const canonicalUrl = `${SITE_URL}/courses/${slug}`
  const imageUrl = new URL(course.cover, SITE_URL).href

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <CoursePageTemplate course={course} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<CourseDetailPageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const course = data.find((item) => item.slug === slug)

  if (!course) {
    return { notFound: true }
  }

  return {
    props: { course, slug },
  }
}

CourseDetailPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CourseDetailPage
