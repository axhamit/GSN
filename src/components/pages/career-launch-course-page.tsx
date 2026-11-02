import React, { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import type { Course } from '@/interfaces/course'
import EnrollmentForm from '@/components/form/EnrollmentForm'

const DynamicGapAnalysis = dynamic(() => import('@/components/GapAnalysis/GapAnalysis'), { ssr: false })
const DynamicWhyPartner = dynamic(() => import('@/components/WhyPartner/WhyPartner'), { ssr: false })
const DynamicTrainingMethodology = dynamic(() => import('@/components/TrainingMethodology/TrainingMethodology'), { ssr: false })
const DynamicCareerLaunchProgram = dynamic(() => import('@/components/CareerLaunchProgram/CareerLaunchProgram'), { ssr: false })
const DynamicCommunicationExcellence = dynamic(() => import('@/components/CommunicationExcellence/CommunicationExcellence'), { ssr: false })
const DynamicEmployabilityChallenge = dynamic(() => import('@/components/EmployabilityChallenge/EmployabilityChallenge'), { ssr: false })
const DynamicGenerativeAIProgram = dynamic(() => import('@/components/GenerativeAIProgram/GenerativeAIProgram'), { ssr: false })
const DynamicPartnershipModels = dynamic(() => import('@/components/PartnershipModels/PartnershipModels'), { ssr: false })

interface CareerLaunchCoursePageProps {
  course: Course
}

const skills = [
  {
    title: 'Professional communication',
    description: 'Practice clear workplace communication, interview etiquette, and confident self-presentation.',
    icon: <ForumOutlinedIcon />,
  },
  {
    title: 'Personal brand',
    description: 'Build a stronger resume, cover letter, and professional profile.',
    icon: <PersonOutlineIcon />,
  },
  {
    title: 'Modern workplace tools',
    description: 'Explore generative AI and practical productivity techniques.',
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    title: 'Career preparation',
    description: 'Prepare for mock interviews, placement activities, and workplace expectations.',
    icon: <WorkOutlineIcon />,
  },
]

const CareerLaunchCoursePage: FC<CareerLaunchCoursePageProps> = ({ course }) => {
  const [enrollOpen, setEnrollOpen] = useState(false)

  return (
    <Box component="main">
      <Box
        component="section"
        sx={{ py: { xs: 6, md: 9 }, backgroundColor: '#fff' }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 570 }}>
                <Chip
                  label="Career Launch Academy"
                  size="small"
                  sx={{
                    mb: 2,
                    color: '#155b8d',
                    backgroundColor: '#eef5fa',
                    fontWeight: 700,
                  }}
                />
                <Typography
                  component="h1"
                  sx={{
                    mb: 2,
                    color: '#172b3c',
                    fontSize: { xs: '2.35rem', sm: '2.8rem', md: '3.35rem' },
                    fontWeight: 750,
                    letterSpacing: '-0.045em',
                    lineHeight: 1.12,
                  }}
                >
                  Build skills for the career ahead.
                </Typography>
                <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Develop professional communication, strengthen your profile, explore workplace tools, and prepare for interviews with guided practice.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3.5 }}>
                  {['Communication', 'Personal branding', 'AI productivity', 'Interview practice'].map((label) => (
                    <Chip key={label} label={label} variant="outlined" size="small" />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setEnrollOpen(true)}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Enquire about the program
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#career-launch"
                  >
                    View curriculum
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1.58 / 1',
                  overflow: 'hidden',
                  border: '1px solid #e3e9ee',
                  borderRadius: 3,
                  backgroundColor: '#eef3f6',
                  boxShadow: '0 18px 48px rgb(23 43 60 / 12%)',
                }}
              >
                <Image
                  src={course.cover}
                  alt="Learner developing career-ready skills through the Career Launch Program"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f6f8fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 650, mb: 4 }}>
            <Typography
              component="p"
              sx={{
                mb: 1,
                color: 'primary.main',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Skills for your next step
            </Typography>
            <Typography
              component="h2"
              sx={{
                mb: 1.25,
                color: '#172b3c',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 750,
                letterSpacing: '-0.035em',
                lineHeight: 1.2,
              }}
            >
              Practical preparation, from profile to interview
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              Focus on the capabilities that help you present yourself and work with confidence.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3} key={skill.title}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    minHeight: 190,
                    p: 2.5,
                    border: '1px solid #e3e9ee',
                    borderRadius: 3,
                    backgroundColor: '#fff',
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      width: 42,
                      height: 42,
                      mb: 2,
                      placeItems: 'center',
                      borderRadius: 2,
                      color: '#1264a3',
                      backgroundColor: '#eef5fa',
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography component="h3" sx={{ mb: 0.75, color: '#172b3c', fontSize: '1rem', fontWeight: 700 }}>
                    {skill.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    {skill.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <DynamicGapAnalysis />
      <DynamicWhyPartner />
      <DynamicTrainingMethodology />
      <DynamicCareerLaunchProgram />
      <DynamicCommunicationExcellence />
      <DynamicEmployabilityChallenge />
      <DynamicGenerativeAIProgram />
      <DynamicPartnershipModels />

      <Box component="section" sx={{ py: { xs: 5, md: 7 }, backgroundColor: '#f6f8fa' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 3,
              p: { xs: 3, md: 4 },
              border: '1px solid #e3e9ee',
              borderRadius: 3,
              backgroundColor: '#fff',
            }}
          >
            <Box>
              <Typography component="h2" sx={{ mb: 0.75, color: '#172b3c', fontSize: '1.25rem', fontWeight: 700 }}>
                Ready to take your next step?
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Talk with our team to learn more about Career Launch Academy.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              onClick={() => setEnrollOpen(true)}
              endIcon={<ArrowForwardIcon />}
              sx={{ flexShrink: 0 }}
            >
              Enquire now
            </Button>
          </Box>
        </Container>
      </Box>

      <EnrollmentForm
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName="Career Launch Academy"
        coursePrice={course.price}
        source="career-launch-course-page"
      />
    </Box>
  )
}

export default CareerLaunchCoursePage
