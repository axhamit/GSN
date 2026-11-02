import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'), { ssr: false })
const DynamicLearningPaths = dynamic(() => import('../components/home/learning-paths'))
const DynamicStudentStories = dynamic(() => import('../components/home/student-stories'))
const DynamicAboutGSN = dynamic(() => import('../components/home/aboutGsn/aboutGsn'), { ssr: false })
const DynamicGapAnalysis = dynamic(() => import('../components/GapAnalysis/GapAnalysis'), { ssr: false })
const DynamicWhyPartner = dynamic(() => import('../components/WhyPartner/WhyPartner'), { ssr: false })
const DynamicTrainingMethodology = dynamic(() => import('../components/TrainingMethodology/TrainingMethodology'), { ssr: false })
const DynamicCareerLaunchProgram = dynamic(() => import('../components/CareerLaunchProgram/CareerLaunchProgram'), { ssr: false })
const DynamicCommunicationExcellence = dynamic(() => import('../components/CommunicationExcellence/CommunicationExcellence'), { ssr: false })
const DynamicEmployabilityChallenge = dynamic(() => import('../components/EmployabilityChallenge/EmployabilityChallenge'), { ssr: false })
const DynamicGenerativeAIProgram = dynamic(() => import('../components/GenerativeAIProgram/GenerativeAIProgram'), { ssr: false })
const DynamicPartnershipModels = dynamic(() => import('../components/PartnershipModels/PartnershipModels'), { ssr: false })
const DynamicAvishkarCareer = dynamic(()=> import ('../components/AvishkarCareer/AvishkarCareer'), { ssr: false } )
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>GSN Foundation - Premier EdTech Platform for AI, Career Launch & Competitive Exams</title>
        <meta name="description" content="GSN Foundation offers comprehensive courses in AI, Machine Learning, Career Launch Academy, NEET, JEE, and competitive exam preparation. Transform your future with quality education." />
        <meta name="keywords" content="GSN Foundation, EdTech, AI courses, Machine Learning, Career Launch Academy, NEET, JEE, Competitive Exams, Online Learning, PCMB" />
        <link rel="canonical" href="https://www.gsnfoundation.com" />

        {/* Open Graph */}
        <meta property="og:title" content="GSN Foundation - Premier EdTech Platform for AI, Career Launch & Competitive Exams" />
        <meta property="og:description" content="Transform your future with comprehensive courses in AI, Machine Learning, Career Launch Academy, and competitive exam preparation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gsnfoundation.com" />
        <meta property="og:image" content="https://www.gsnfoundation.com/images/hero.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GSN Foundation - Premier EdTech Platform" />
        <meta name="twitter:description" content="Transform your future with comprehensive courses in AI, Machine Learning, Career Launch Academy, and competitive exam preparation." />
        <meta name="twitter:image" content="https://www.gsnfoundation.com/images/hero.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'GSN Foundation',
              url: 'https://www.gsnfoundation.com',
              description: 'Premier EdTech platform offering comprehensive courses in AI, Machine Learning, Career Launch Academy, and competitive exam preparation.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.gsnfoundation.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </Head>
      <DynamicHomeHero />
      <DynamicLearningPaths />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicAvishkarCareer/>
      <DynamicAboutGSN />
      <DynamicStudentStories />
      <DynamicGapAnalysis />
      <DynamicWhyPartner />
      <DynamicTrainingMethodology />
      <DynamicCareerLaunchProgram />
      <DynamicCommunicationExcellence />
      <DynamicEmployabilityChallenge />
      <DynamicGenerativeAIProgram />
      <DynamicPartnershipModels />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
