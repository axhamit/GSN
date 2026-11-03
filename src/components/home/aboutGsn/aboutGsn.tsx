import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SchoolIcon from '@mui/icons-material/School'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import {
  homepageSectionDescriptionSx,
  homepageSectionEyebrowSx,
  homepageSectionTitleSx,
} from '@/config/theme/sectionTypography'

const AboutGSN: FC = () => {
  const features = [
    {
      icon: <SchoolIcon />,
      title: 'Who We Are',
      description:
        'We empower individuals and professionals with future-ready skills, industry-focused training, and practical learning to unlock career opportunities and succeed in a rapidly evolving world.',
    },
    {
      icon: <RocketLaunchIcon />,
      title: 'What We Do',
      description:
        'We design, develop, and deliver premium corporate training programs tailored for final year degree students, ensuring they are placement-ready.',
    },
    {
      icon: <LightbulbIcon />,
      title: 'Our Approach',
      description:
        'Guided by our core values of practical learning, innovation, and integrity, we replace outdated methodologies with modern & industry-relevant skill building.',
    },
  ]

  const stats = [
    { value: '10K+', label: 'Students Trained', icon: <Diversity3Icon /> },
    { value: '500+', label: 'Corporate Partners', icon: <WorkspacePremiumIcon /> },
    { value: '95%', label: 'Placement Rate', icon: <TrendingUpIcon /> },
  ]

  return (
    <Box
      id="about"
      component="section"
      sx={{ py: { xs: 7, md: 9 }, backgroundColor: '#fff' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
          <Typography component="p" sx={homepageSectionEyebrowSx}>
            About GSN Foundation
          </Typography>
          <Typography component="h2" sx={homepageSectionTitleSx}>
            Building Futures, One Student at a Time
          </Typography>
          <Typography sx={homepageSectionDescriptionSx}>
            Empowering the next generation of professionals through innovative education and industry-aligned training programs.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 2.5 }} alignItems="stretch" sx={{ mb: { xs: 3, md: 4 } }}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
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
                  borderRadius: 4,
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
                    mb: 2,
                    placeItems: 'center',
                    borderRadius: 2,
                    color: 'primary.main',
                    backgroundColor: '#eef5fa',
                    '& svg': { fontSize: 22 },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography component="h3" sx={{ mb: 1, color: '#172b3c', fontSize: '1.05rem', fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            p: { xs: 1.5, md: 2 },
            border: '1px solid #e3e9ee',
            borderRadius: 4,
            backgroundColor: '#f6f8fa',
          }}
        >
          <Grid container spacing={1} alignItems="stretch">
            {stats.map((stat) => (
              <Grid item xs={12} sm={4} key={stat.label}>
                <Box
                  sx={{
                    display: 'flex',
                    height: '100%',
                    minHeight: 112,
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', sm: 'center' },
                    gap: 1.5,
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: '#fff',
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      width: 42,
                      height: 42,
                      flexShrink: 0,
                      placeItems: 'center',
                      borderRadius: '50%',
                      color: 'primary.main',
                      backgroundColor: '#eef5fa',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 800, lineHeight: 1.1 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: '0.85rem', fontWeight: 600 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutGSN
