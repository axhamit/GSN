import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const CoursesIndexPage: NextPageWithLayout = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [router])

  return null
}

CoursesIndexPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default CoursesIndexPage
