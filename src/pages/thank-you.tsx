import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/interfaces/layout'
import { findBrochureCourse, GENERAL_BROCHURE_SLUG } from '@/utils/course-brochure'

const ThankYouPage: NextPageWithLayout = () => {
  const router = useRouter()
  const requestedSlug = typeof router.query.course === 'string' ? router.query.course : undefined
  const course = findBrochureCourse(requestedSlug)
  const brochureSlug = course?.slug || GENERAL_BROCHURE_SLUG
  const brochureName = course?.title || 'GSN Foundation Learning Programmes'

  return (
    <>
      <Head>
        <title>Thank you | GSN Foundation</title>
        <meta name="description" content="Thank you for contacting GSN Foundation. Download your course brochure." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Box
        component="section"
        sx={{
          display: 'flex',
          minHeight: { xs: '65vh', md: '72vh' },
          alignItems: 'center',
          py: { xs: 6, md: 9 },
          backgroundColor: '#f6f8fa',
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              border: '1px solid #e3e9ee',
              borderRadius: 3,
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                width: 64,
                height: 64,
                mx: 'auto',
                mb: 2.5,
                placeItems: 'center',
                borderRadius: '50%',
                color: '#237547',
                backgroundColor: '#eaf5ee',
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 36 }} />
            </Box>
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
              Enquiry received
            </Typography>
            <Typography
              component="h1"
              sx={{
                mb: 1.5,
                color: '#172b3c',
                fontSize: { xs: '1.8rem', sm: '2.2rem' },
                fontWeight: 750,
                letterSpacing: '-0.035em',
                lineHeight: 1.2,
              }}
            >
              Thank you for reaching out
            </Typography>
            <Typography sx={{ mb: 3.5, color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75 }}>
              Our team will be in touch soon about <strong>{brochureName}</strong>. You can download the course brochure below.
            </Typography>

            <Button
              component="a"
              href={`/api/brochure?course=${encodeURIComponent(brochureSlug)}`}
              download={`${brochureSlug}-brochure.pdf`}
              variant="contained"
              size="large"
              startIcon={<DownloadOutlinedIcon />}
              fullWidth
              sx={{ mb: 1.5, py: 1.4 }}
            >
              Download course brochure
            </Button>
            <Button
              component={Link}
              href="/"
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: 'text.secondary' }}
            >
              Back to GSN Foundation
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

ThankYouPage.getLayout = (page) => <MainLayout showCareerPopup={false}>{page}</MainLayout>

export default ThankYouPage
