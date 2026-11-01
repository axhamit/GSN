import React, { FC, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import EnrollmentForm from '@/components/form/EnrollmentForm'
import CareerLaunchHero from '@/courses/CareerLaunchHero/CareerLaunchHero'
import AdvancedExcel from '@/components/AdvancedExcel/AdvancedExcel'
import HomeFeature from '@/components/home/feature'
import AboutGSN from '@/components/home/aboutGsn/aboutGsn'
import GapAnalysis from '@/components/GapAnalysis/GapAnalysis'
import WhyPartner from '@/components/WhyPartner/WhyPartner'
import TrainingMethodology from '@/components/TrainingMethodology/TrainingMethodology'
import CommunicationExcellence from '@/components/CommunicationExcellence/CommunicationExcellence'
import EmployabilityChallenge from '@/components/EmployabilityChallenge/EmployabilityChallenge'
import GenerativeAIProgram from '@/components/GenerativeAIProgram/GenerativeAIProgram'
import PartnershipModels from '@/components/PartnershipModels/PartnershipModels'
import CourseRoadmap from '@/components/course/course-roadmap'
import { Course } from '@/interfaces/course'

interface CoursePageTemplateProps {
  course: Course
}

const CoursePageTemplate: FC<CoursePageTemplateProps> = ({ course }) => {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const isCareerLaunch = course.category === 'Career Launch Academy'
  const isFeatured = isCareerLaunch || course.category === 'Artificial Intelligence'

  return (
    <Box component="main">
      {isCareerLaunch ? (
        <CareerLaunchHero onEnrollClick={() => setEnrollOpen(true)} />
      ) : (
        <Box component="section" sx={{ py: { xs: 7, md: 11 }, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: { xs: 4, md: 7 }, alignItems: 'center' }}>
              <Box>
                <Chip label={isFeatured ? 'Featured course' : course.category} color={isFeatured ? 'primary' : 'default'} size="small" sx={{ mb: 2, fontWeight: 700 }} />
                <Typography component="h1" variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3.5rem' }, lineHeight: 1.12, mb: 2 }}>
                  {course.title.replace(/^[^\w]+/, '')}
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 620, lineHeight: 1.8, mb: 3 }}>
                  {course.description || 'TODO: Add a verified course overview.'}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  <Chip label={`Duration: ${course.duration || 'TODO: Confirm duration'}`} variant="outlined" />
                  {course.tags?.map((tag) => <Chip key={tag} label={tag} variant="outlined" />)}
                </Box>
                <Button variant="contained" size="large" href="#course-roadmap-title" sx={{ minHeight: 48, px: 3, borderRadius: 'var(--radius-button)', fontWeight: 700 }}>
                  Explore the roadmap
                </Button>
              </Box>
              <Box sx={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card-hover)' }}>
                <Image src={course.cover} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
              </Box>
            </Box>
          </Container>
        </Box>
      )}
      <CourseRoadmap course={course} />
      {isCareerLaunch ? (
        <>
          <GapAnalysis />
          <WhyPartner />
          <TrainingMethodology />
          <CommunicationExcellence />
          <AdvancedExcel />
          <EmployabilityChallenge />
          <GenerativeAIProgram />
          <PartnershipModels />
        </>
      ) : (
        <AdvancedExcel />
      )}
      <HomeFeature />
      <AboutGSN />
      <EnrollmentForm open={enrollOpen} onClose={() => setEnrollOpen(false)} courseName={course.title} coursePrice={course.price} />
    </Box>
  )
}

export default CoursePageTemplate
