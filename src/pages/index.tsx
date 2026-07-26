import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'), { ssr: false })
const DynamicAboutGSN = dynamic(() => import('../components/home/aboutgsn/aboutGsn'), { ssr: false })
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'), { ssr: false })
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'), { ssr: false })

const DynamicGapAnalysis = dynamic(() => import('../components/GapAnalysis/GapAnalysis'), { ssr: false })
const DynamicWhyPartner = dynamic(() => import('../components/WhyPartner/WhyPartner'), { ssr: false })
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'), { ssr: false })
const DynamicTrainingMethodology = dynamic(() => import('../components/TrainingMethodology/TrainingMethodology'), { ssr: false }) 
const DynamicCareerLaunchProgram = dynamic(() => import('../components/CareerLaunchProgram/CareerLaunchProgram'), { ssr: false })
const DynamicCommunicationExcellence = dynamic(() => import('../components/CommunicationExcellence/CommunicationExcellence'), { ssr: false })
const DynamicAdvancedExcel = dynamic(() => import('../components/AdvancedExcel/AdvancedExcel'), { ssr: false }) 
const DynamicEmployabilityChallenge = dynamic(() => import('../components/EmployabilityChallenge/EmployabilityChallenge'), { ssr: false })
const DynamicGenerativeAIProgram = dynamic(() => import('../components/GenerativeAIProgram/GenerativeAIProgram'), { ssr: false })
const DynamicPartnershipModels = dynamic(() => import('../components/PartnershipModels/PartnershipModels'), { ssr: false })
const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicAboutGSN />
      <DynamicGapAnalysis />
      <DynamicWhyPartner />
      <DynamicTrainingMethodology />
      <DynamicCareerLaunchProgram />
      <DynamicCommunicationExcellence />
      <DynamicAdvancedExcel />
      <DynamicEmployabilityChallenge />
      <DynamicGenerativeAIProgram />
      <DynamicPartnershipModels />
      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
