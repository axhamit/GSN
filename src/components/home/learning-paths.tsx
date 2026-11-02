import React, { FC } from 'react'
import Link from 'next/link'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import ScienceIcon from '@mui/icons-material/Science'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const paths = [
  {
    title: 'School & board preparation',
    description: 'Build strong foundations for Class 10, 11, and 12.',
    href: '/courses/10th-standard',
    icon: <MenuBookIcon />,
  },
  {
    title: 'Competitive exams',
    description: 'Prepare for NEET, JEE, and KCET with expert guidance.',
    href: '/courses/neet',
    icon: <ScienceIcon />,
  },
  {
    title: 'Career launch',
    description: 'Grow communication, employability, and workplace skills.',
    href: '/courses/career-launch-academy',
    icon: <RocketLaunchIcon />,
  },
  {
    title: 'Artificial intelligence',
    description: 'Explore generative AI, machine learning, and new tools.',
    href: '/courses/advanced-agentic-generative-ai',
    icon: <AutoAwesomeIcon />,
  },
]

const LearningPaths: FC = () => (
  <Box
    component="section"
    id="learning-paths"
    sx={{ py: { xs: 7, md: 9 }, backgroundColor: '#fff' }}
  >
    <Container maxWidth="lg">
      <Box sx={{ mb: 4, maxWidth: 620 }}>
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
          Explore learning paths
        </Typography>
        <Typography
          component="h2"
          sx={{
            mb: 1.25,
            color: '#172b3c',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 750,
            letterSpacing: '-0.035em',
            lineHeight: 1.2,
          }}
        >
          Start with what you want to achieve
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7 }}>
          From school success to future-ready skills, find the learning path that suits you.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {paths.map((path) => (
          <Grid item xs={12} sm={6} lg={3} key={path.title}>
            <Box
              component="article"
              sx={{
                display: 'flex',
                height: '100%',
                minHeight: 230,
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: { xs: 2.5, md: 3 },
                border: '1px solid #e3e9ee',
                borderRadius: 3,
                backgroundColor: '#fff',
                transition: 'border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  borderColor: '#c4d2dd',
                  boxShadow: '0 12px 30px rgb(23 43 60 / 8%)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  width: 44,
                  height: 44,
                  mb: 2.5,
                  placeItems: 'center',
                  borderRadius: 2,
                  color: '#1264a3',
                  backgroundColor: '#eef5fa',
                  '& svg': { fontSize: 22 },
                }}
              >
                {path.icon}
              </Box>
              <Typography component="h3" sx={{ mb: 1, color: '#172b3c', fontSize: '1.05rem', fontWeight: 700 }}>
                {path.title}
              </Typography>
              <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.65 }}>
                {path.description}
              </Typography>
              <Button
                component={Link}
                href={path.href}
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 'auto', ml: -1, px: 1, color: 'primary.main' }}
              >
                Explore path
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default LearningPaths
