import React, { FC, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import { useTheme, alpha } from '@mui/material/styles'
import SchoolIcon from '@mui/icons-material/School'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import StarIcon from '@mui/icons-material/Star'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import EnrollmentForm from '@/components/form/EnrollmentForm'
import HomeTestimonial from '@/components/home/testimonial'
import HomeFeature from '@/components/home/feature'
import HomeOurMentors from '@/components/home/mentors'
import AboutGSN from '@/components/home/aboutGsn/aboutGsn'
import HomeNewsLetter from '@/components/home/newsletter'
import CareerLaunchHero from '@/courses/CareerLaunchHero/CareerLaunchHero'
import AdvancedExcel from '@/components/AdvancedExcel/AdvancedExcel'
import CareerLaunchProgram from '../CareerLaunchProgram/CareerLaunchProgram'
import GapAnalysis from '@/components/GapAnalysis/GapAnalysis'
import WhyPartner from '@/components/WhyPartner/WhyPartner'
import TrainingMethodology from '@/components/TrainingMethodology/TrainingMethodology'
import CommunicationExcellence from '@/components/CommunicationExcellence/CommunicationExcellence'
import EmployabilityChallenge from '@/components/EmployabilityChallenge/EmployabilityChallenge'
import GenerativeAIProgram from '@/components/GenerativeAIProgram/GenerativeAIProgram'
import PartnershipModels from '@/components/PartnershipModels/PartnershipModels'
import { Course } from '@/interfaces/course'

interface CoursePageTemplateProps {
  course: Course
}

const CoursePageTemplate: FC<CoursePageTemplateProps> = ({ course }) => {
  const theme = useTheme()
  const [enrollOpen, setEnrollOpen] = useState(false)

  const description =
    course.description ||
    `This ${course.category.toLowerCase()} course is designed to help students build strong fundamentals, improve exam readiness, and practise with confidence.`

  const highlights = course.highlights || [
    'Live concept-based classes',
    'Doubt-solving and revision sessions',
    'Practice tests and performance tracking',
    'Expert mentor guidance',
  ]

  const isFeatured = course.featured || course.category === 'Career Launch Academy'
  const showCustomHero = course.slug === 'career-launch-academy' || course.category === 'Career Launch Academy'

  return (
    <Box>
      {showCustomHero ? <CareerLaunchHero onEnrollClick={() => setEnrollOpen(true)} /> : null}
      <Box sx={{ py: { xs: 6, md: 10 }, background: alpha(theme.palette.primary.main, 0.03) }}>
      {/* <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: 5,
            overflow: 'hidden',
            boxShadow: 6,
            background: theme.palette.background.paper,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', minHeight: { xs: 320, md: 420 } }}>
                <Image src={course.cover} alt={course.title} fill style={{ objectFit: 'cover' }} />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%)',
                  }}
                />
                <Box sx={{ position: 'absolute', inset: 0, p: { xs: 3, md: 4 } }}>
                  {isFeatured && (
                    <Chip
                      icon={<RocketLaunchIcon sx={{ fontSize: 16 }} />}
                      label="Featured Course"
                      sx={{ mb: 2, background: theme.palette.success.main, color: 'white', fontWeight: 700 }}
                    />
                  )}
                  <Typography variant="overline" sx={{ color: 'white', letterSpacing: 1.5, fontWeight: 700 }}>
                    {course.category}
                  </Typography>
                  <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, mt: 1, mb: 2 }}>
                    {course.title}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'white' }}>
                      <StarIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body2">{course.rating}/5</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'white' }}>
                      <PeopleIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body2">{course.students || course.ratingCount} Learners</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'white' }}>
                      <AccessTimeIcon sx={{ fontSize: 18 }} />
                      <Typography variant="body2">{course.duration || 'Flexible'}</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: 3, md: 4.5 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1.5 }}>
                  Course Details
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  Learn with a focused, structured path to success
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  {description}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {(course.tags || []).map((tag) => (
                    <Chip key={tag} label={tag} size="small" sx={{ background: alpha(theme.palette.primary.main, 0.08), color: 'primary.main', fontWeight: 700 }} />
                  ))}
                </Stack>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    What you will get
                  </Typography>
                  <Stack spacing={1}>
                    {highlights.map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SchoolIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                    ₹{course.price.toLocaleString()}
                  </Typography>
                  <Rating value={course.rating} readOnly sx={{ color: '#ffb400' }} />
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button variant="contained" size="large" onClick={() => setEnrollOpen(true)}>
                    Enroll Now
                  </Button>
                  <Button variant="outlined" size="large" href="#testimonial">
                    See Student Reviews
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container> */}

      {showCustomHero ? (
        <>
          <GapAnalysis />
          <WhyPartner />
          <TrainingMethodology />
          <CareerLaunchProgram onEnrollClick={() => setEnrollOpen(true)} />
          <CommunicationExcellence />
          <AdvancedExcel />
          <EmployabilityChallenge />
          <GenerativeAIProgram />
          <PartnershipModels />
        </>
      ) : (
        <Box sx={{ mt: 6 }}>
          <AdvancedExcel />
        </Box>
      )}

      <Box sx={{ mt: 6 }}>
        <HomeFeature />
      </Box>

      {/* <Box sx={{ mt: 6 }}>
        <HomeOurMentors />
      </Box> */}

      <Box sx={{ mt: 6 }}>
        <AboutGSN />
      </Box>

      <Box sx={{ mt: 6 }}>
        <HomeTestimonial />
      </Box>

      {/* <Box sx={{ mt: 6 }}>
        <HomeNewsLetter />
      </Box> */}

      <EnrollmentForm
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName={course.title}
        coursePrice={course.price}
      />
    </Box>
  </Box>
  )
}

export default CoursePageTemplate
