import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useTheme, alpha } from '@mui/material/styles'
import SchoolIcon from '@mui/icons-material/School'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import StarIcon from '@mui/icons-material/Star'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import LanguageIcon from '@mui/icons-material/Language'

interface AICourseOverviewProps {
  duration?: string
  students?: number
  rating?: number
  ratingCount?: number
  language?: string
  skillLevel?: string
  certificate?: string
  highlights?: string[]
}

const AICourseOverview: FC<AICourseOverviewProps> = ({
  duration = '4 Months',
  students = 0,
  rating = 5,
  ratingCount = 0,
  language = 'English',
  skillLevel = 'Intermediate',
  certificate = 'Yes',
  highlights = [],
}) => {
  const theme = useTheme()

  const overviewItems = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 24 }} />,
      label: 'Duration',
      value: duration,
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 24 }} />,
      label: 'Students',
      value: students > 0 ? `${students}+ Enrolled` : 'Growing Community',
    },
    {
      icon: <StarIcon sx={{ fontSize: 24 }} />,
      label: 'Rating',
      value: `${rating}/5 (${ratingCount} reviews)`,
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 24 }} />,
      label: 'Language',
      value: language,
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 24 }} />,
      label: 'Skill Level',
      value: skillLevel,
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 24 }} />,
      label: 'Certificate',
      value: certificate,
    },
  ]

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Course Overview
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 6,
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          Everything you need to know about this comprehensive AI course
        </Typography>

        <Grid container spacing={3}>
          {overviewItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${alpha('#38bdf8', 0.02)})`,
                  border: `1px solid ${alpha('#38bdf8', 0.08)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px ${alpha('#38bdf8', 0.15)}`,
                    borderColor: alpha('#38bdf8', 0.2),
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 2,
                      color: '#38bdf8',
                    }}
                  >
                    {item.icon}
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {highlights.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                textAlign: 'center',
              }}
            >
              What You'll Get
            </Typography>
            <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      p: 2,
                      borderRadius: 2,
                      background: alpha('#38bdf8', 0.03),
                      border: `1px solid ${alpha('#38bdf8', 0.08)}`,
                    }}
                  >
                    <SchoolIcon sx={{ color: '#38bdf8', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {highlight}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default AICourseOverview
