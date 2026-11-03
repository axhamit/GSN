import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { GetServerSideProps, NextPage } from 'next'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import { findBrochureCourse, GENERAL_BROCHURE_SLUG } from '@/utils/course-brochure'

interface ThankYouPageProps {
  brochureSlug: string
}

const nextSteps = [
  {
    number: '01',
    title: 'Your enquiry is with us',
    description: 'Our course team has received your details and will review your enquiry.',
  },
  {
    number: '02',
    title: 'Look out for our call',
    description: 'A member of our team will contact you to answer questions and discuss next steps.',
  },
  {
    number: '03',
    title: 'Explore your course',
    description: 'Use your brochure to get familiar with the learning path, course topics, and details.',
  },
]

const ThankYouPage: NextPage<ThankYouPageProps> & Pick<NextPageWithLayout, 'getLayout'> = ({ brochureSlug }) => {
  const course = findBrochureCourse(brochureSlug)
  const brochureName = course?.title || 'GSN Foundation Learning Programmes'
  const brochureUrl = `/api/brochure?course=${encodeURIComponent(brochureSlug)}`

  return (
    <>
      <Head>
        <title>Thank you | GSN Foundation</title>
        <meta name="description" content="Your GSN Foundation enquiry has been received. Get your course brochure and learn what happens next." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Box>
        <Box
          component="section"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            py: { xs: 7, md: 10 },
            color: '#fff',
            background: 'linear-gradient(125deg, #102c43 0%, #164a70 58%, #1264a3 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -190,
              right: { xs: -170, md: '4%' },
              width: { xs: 340, md: 510 },
              height: { xs: 340, md: 510 },
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(125, 211, 252, 0.2), transparent 70%)',
              pointerEvents: 'none',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -240,
              left: '25%',
              width: 430,
              height: 430,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 70%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
              <Grid item xs={12} md={7}>
                <Chip
                  icon={<CheckCircleRoundedIcon />}
                  label="Enquiry received successfully"
                  sx={{
                    mb: 3,
                    color: '#e8f7ff',
                    bgcolor: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    '& .MuiChip-icon': { color: '#8de0b0' },
                    '& .MuiChip-label': { px: 1, fontWeight: 700 },
                  }}
                />
                <Typography
                  component="h1"
                  sx={{
                    maxWidth: 700,
                    mb: 2.5,
                    fontSize: { xs: '2.7rem', sm: '3.5rem', md: '4.4rem' },
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    lineHeight: 1.04,
                  }}
                >
                  Thanks for taking the next step.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 620,
                    mb: 4,
                    color: 'rgba(255,255,255,0.78)',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    lineHeight: 1.8,
                  }}
                >
                  We’ve received your enquiry about <Box component="strong" sx={{ color: '#fff' }}>{brochureName}</Box>.
                  Your learning journey starts here, and our team is ready to help you find the right path.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    component="a"
                    href={brochureUrl}
                    download={`${brochureSlug}-brochure.pdf`}
                    variant="contained"
                    size="large"
                    startIcon={<DownloadOutlinedIcon />}
                    sx={{
                      minHeight: 54,
                      px: 3,
                      color: '#12334d',
                      bgcolor: '#fff',
                      fontWeight: 800,
                      '&:hover': { bgcolor: '#eaf6ff' },
                    }}
                  >
                    Download your brochure
                  </Button>
                  <Button
                    component={Link}
                    href="/courses"
                    variant="outlined"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      minHeight: 54,
                      px: 3,
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.42)',
                      fontWeight: 700,
                      '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                    }}
                  >
                    Explore all courses
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2, color: 'rgba(255,255,255,0.7)' }}>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 18 }} />
                  <Typography variant="body2">Our team will be in touch within one business day.</Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    maxWidth: 440,
                    mx: { xs: 'auto', md: 'auto' },
                    p: { xs: 3, sm: 4 },
                    border: '1px solid rgba(255,255,255,0.55)',
                    borderRadius: 5,
                    color: '#172b3c',
                    bgcolor: 'rgba(255,255,255,0.97)',
                    boxShadow: '0 28px 80px rgba(4, 25, 42, 0.24)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      width: 64,
                      height: 64,
                      mb: 2.5,
                      placeItems: 'center',
                      borderRadius: 3,
                      color: '#1264a3',
                      bgcolor: '#eaf5fc',
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ fontSize: 34 }} />
                  </Box>
                  <Typography sx={{ mb: 0.75, color: '#5d7180', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Your selected course
                  </Typography>
                  <Typography component="h2" sx={{ mb: 2, fontSize: { xs: '1.4rem', sm: '1.65rem' }, fontWeight: 800, lineHeight: 1.25 }}>
                    {brochureName}
                  </Typography>
                  <Box sx={{ mb: 2.5, height: 1, bgcolor: '#e7edf1' }} />
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <AutoAwesomeIcon sx={{ mt: 0.25, color: '#1264a3', fontSize: 20 }} />
                    <Typography sx={{ color: '#637583', fontSize: '0.93rem', lineHeight: 1.7 }}>
                      The brochure includes course information to help you plan your next step with confidence.
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: '#f5f8fb' }}>
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 640, mb: { xs: 4, md: 5 } }}>
              <Typography sx={{ mb: 1, color: 'primary.main', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}>
                What happens next
              </Typography>
              <Typography component="h2" sx={{ mb: 1.5, color: '#172b3c', fontSize: { xs: '2rem', md: '2.7rem' }, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15 }}>
                We’ll guide you from here.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75 }}>
                A simple process to help you get the information and support you need.
              </Typography>
            </Box>

            <Grid container spacing={2.5}>
              {nextSteps.map((step) => (
                <Grid item xs={12} md={4} key={step.number}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: { xs: 2.5, md: 3.25 },
                      border: '1px solid #e4ebf0',
                      borderRadius: 4,
                      bgcolor: '#fff',
                    }}
                  >
                    <Typography sx={{ mb: 2.5, color: '#1264a3', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                      STEP {step.number}
                    </Typography>
                    <Typography component="h3" sx={{ mb: 1, color: '#172b3c', fontSize: '1.15rem', fontWeight: 750 }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.94rem', lineHeight: 1.75 }}>
                      {step.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: '#fff' }}>
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    p: { xs: 3, sm: 4, md: 5 },
                    borderRadius: 5,
                    color: '#fff',
                    background: 'linear-gradient(145deg, #eaf5fc 0%, #f5f9fc 100%)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      right: -60,
                      bottom: -100,
                      width: 240,
                      height: 240,
                      borderRadius: '50%',
                      bgcolor: 'rgba(18,100,163,0.07)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'grid',
                      minHeight: 270,
                      placeItems: 'center',
                      border: '1px solid rgba(18,100,163,0.12)',
                      borderRadius: 4,
                      bgcolor: 'rgba(255,255,255,0.72)',
                    }}
                  >
                    <Box sx={{ textAlign: 'center', color: '#1264a3' }}>
                      <MenuBookOutlinedIcon sx={{ mb: 1, fontSize: { xs: 64, md: 78 } }} />
                      <Typography sx={{ color: '#172b3c', fontSize: '1.15rem', fontWeight: 800 }}>
                        Your course guide
                      </Typography>
                      <Typography sx={{ mt: 0.5, color: '#637583', fontSize: '0.9rem' }}>
                        A helpful first look at what’s ahead
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 1, color: 'primary.main', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}>
                  Keep your plans moving
                </Typography>
                <Typography component="h2" sx={{ mb: 2, color: '#172b3c', fontSize: { xs: '2rem', md: '2.7rem' }, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15 }}>
                  Take a closer look at your course.
                </Typography>
                <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8 }}>
                  Keep the {brochureName} guide handy and explore the programme at your own pace. If the download didn’t start automatically, you can get it here.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    component="a"
                    href={brochureUrl}
                    download={`${brochureSlug}-brochure.pdf`}
                    variant="contained"
                    size="large"
                    startIcon={<DownloadOutlinedIcon />}
                    sx={{ minHeight: 50, px: 2.5, fontWeight: 750 }}
                  >
                    Download brochure
                  </Button>
                  <Button
                    component={Link}
                    href="/"
                    variant="outlined"
                    size="large"
                    sx={{ minHeight: 50, px: 2.5, fontWeight: 700 }}
                  >
                    Back to home
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 6, md: 7 }, bgcolor: '#f5f8fb' }}>
          <Container maxWidth="lg">
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                gap: 3,
                p: { xs: 3, md: 4 },
                border: '1px solid #e4ebf0',
                borderRadius: 4,
                bgcolor: '#fff',
              }}
            >
              <Box sx={{ maxWidth: 540 }}>
                <Typography component="h2" sx={{ mb: 1, color: '#172b3c', fontSize: { xs: '1.35rem', md: '1.65rem' }, fontWeight: 800 }}>
                  Need help before we call?
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Reach out to our team. We’re happy to help with course questions and your next steps.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: { xs: '100%', md: 'auto' } }}>
                <Button
                  component="a"
                  href="mailto:contact@gsnfoundation.com"
                  variant="outlined"
                  startIcon={<EmailOutlinedIcon />}
                  sx={{ minHeight: 48, px: 2, fontWeight: 700 }}
                >
                  Email our team
                </Button>
                <Button
                  component="a"
                  href="tel:+918217591455"
                  variant="outlined"
                  startIcon={<PhoneOutlinedIcon />}
                  sx={{ minHeight: 48, px: 2, fontWeight: 700 }}
                >
                  Call us
                </Button>
              </Stack>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ThankYouPageProps> = async ({ query }) => {
  const requestedSlug = typeof query.course === 'string' ? query.course : undefined
  const course = findBrochureCourse(requestedSlug)

  return {
    props: {
      brochureSlug: course?.slug || GENERAL_BROCHURE_SLUG,
    },
  }
}

ThankYouPage.getLayout = (page) => <MainLayout showCareerPopup={false}>{page}</MainLayout>

export default ThankYouPage
