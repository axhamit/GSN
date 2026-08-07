import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled, alpha, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import ScienceIcon from '@mui/icons-material/Science'
import CalculateIcon from '@mui/icons-material/Calculate'
import BiotechIcon from '@mui/icons-material/Biotech'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SchoolIcon from '@mui/icons-material/School'
import QuizIcon from '@mui/icons-material/Quiz'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import StarIcon from '@mui/icons-material/Star'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 8,
  borderRadius: 8,
  background: alpha(theme.palette.background.paper, 0.1),
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: alpha(theme.palette.common.white, 0.08),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    ...(order === 1 && {
      background: `linear-gradient(90deg, #f303ff, #ff6bff)`,
    }),
    ...(order === 2 && {
      background: `linear-gradient(90deg, #26e8bd, #6fffd9)`,
    }),
    ...(order === 3 && {
      background: `linear-gradient(90deg, #0063ff, #66a3ff)`,
    }),
      ...(order === 4 && {
        background: `linear-gradient(90deg, ${theme.palette.info.main}, ${theme.palette.info.light})`,
      }),
  },
}))

const data = [
  {
    title: 'Expert Faculty',
    description: 'Learn from IIT/NIT & Medical college graduates with 10+ years teaching experience',
    icon: <SchoolIcon />,
    color: 'primary',
  },
  {
    title: 'Doubt Solving',
    description: '24/7 doubt resolution with dedicated mentors and subject matter experts',
    icon: <QuizIcon />,
    color: 'secondary',
  },
  {
    title: 'Study Materials',
    description: 'Comprehensive notes, practice papers, and reference books provided',
    icon: <MenuBookIcon />,
    color: 'error',
  },
  {
    title: 'Mock Tests',
    description: 'Regular full-length mock tests with detailed performance analysis',
    icon: <BiotechIcon />,
    color: 'warning',
  },
]

const HomeFeature: FC = () => {
  const theme = useTheme()

  const getPaletteColor = (color: string) => {
    const paletteColor = (theme.palette as Record<string, any>)[color] ?? theme.palette.primary
    return paletteColor as { main: string; light: string; dark: string }
  }

  return (
    <Box
      id="feature"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(160deg, 
          ${alpha(theme.palette.background.default, 0.95)} 0%, 
          ${alpha(theme.palette.primary.dark, 0.08)} 40%, 
          ${alpha(theme.palette.secondary.dark, 0.05)} 70%, 
          ${alpha(theme.palette.common.black, 0.2)} 100%
        )`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '40%',
          height: '40%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Image Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              {/* Main Image Container */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '100%', md: '100%' },
                  height: { xs: 400, md: 550 },
                  borderRadius: 5,
                  overflow: 'hidden',
                  boxShadow: `0 30px 80px ${alpha(theme.palette.common.black, 0.5)}`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, transparent 50%, ${alpha(theme.palette.secondary.main, 0.05)})`,
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src="/images/home-feature-1.png"
                  alt="Students studying"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  quality={97}
                  priority
                />
                
                {/* Bottom Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.8)}, transparent)`,
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Floating Card - Success Rate */}
             <Box
  sx={{
    position: 'absolute',
    top: { xs: 20, md: 40 },
    right: { xs: 10, md: -30 },
    boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.5)}`,
    borderRadius: 3,
    px: 2,
    py: 2,
    zIndex: 2,
    background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.9)})`,
    backdropFilter: 'blur(20px)',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    minWidth: 170,
    maxWidth: 190,
    animation: 'float 3s ease-in-out infinite',
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-8px)' },
    },
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.5 }}>
    <EmojiEventsIcon sx={{ color: theme.palette.warning.main, fontSize: 18 }} />
    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.85rem' }}>
      Success Rate
    </Typography>
  </Box>
  
  <Box sx={{ mb: 1.5 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.25 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
        NEET Qualified
      </Typography>
      <Typography variant="caption" sx={{ color: '#f303ff', fontWeight: 600, fontSize: '0.7rem' }}>
        78%
      </Typography>
    </Box>
    <BorderLinearProgress variant="determinate" value={78} order={1} sx={{ height: 5 }} />
  </Box>
  
  <Box sx={{ mb: 1.5 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.25 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
        JEE Advanced
      </Typography>
      <Typography variant="caption" sx={{ color: '#26e8bd', fontWeight: 600, fontSize: '0.7rem' }}>
        65%
      </Typography>
    </Box>
    <BorderLinearProgress variant="determinate" value={65} order={2} sx={{ height: 5 }} />
  </Box>
  
  <Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.25 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
        Board Exams 90%+
      </Typography>
      <Typography variant="caption" sx={{ color: '#0063ff', fontWeight: 600, fontSize: '0.7rem' }}>
        85%
      </Typography>
    </Box>
    <BorderLinearProgress variant="determinate" value={85} order={3} sx={{ height: 5 }} />
  </Box>
  
  <Box sx={{ mt: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.25 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
        Career Launch
         Program
      </Typography>
      <Typography variant="caption" sx={{ color: theme.palette.info.main, fontWeight: 600, fontSize: '0.7rem' }}>
        80%
      </Typography>
    </Box>
    <BorderLinearProgress variant="determinate" value={100} order={4} sx={{ height: 5 }} />
  </Box>
</Box>

              {/* Floating Card - Student Satisfaction - FIXED */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 10, md: 30 },
                  left: { xs: 10, md: -20 },
                  boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.5)}`,
                  borderRadius: 4,
                  px: 2.5,
                  py: 2.5,
                  zIndex: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  textAlign: 'center',
                  minWidth: 160,
                  maxWidth: 180,
                  animation: 'float 3.5s ease-in-out infinite 0.5s',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 0.5 }}>
                  <StarIcon sx={{ color: theme.palette.warning.main, fontSize: 16 }} />
                  <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.85rem' }}>
                    Student Satisfaction
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5, fontSize: '0.65rem' }}>
                  Based on Reviews
                </Typography>
                
                {/* Circular Progress - Properly Contained */}
                <Box
                  sx={{
                    position: 'relative',
                    width: 70,
                    height: 70,
                    mx: 'auto',
                  }}
                >
                  <CircularProgress
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      color: alpha(theme.palette.divider, 0.1),
                    }}
                    thickness={4}
                    variant="determinate"
                    value={100}
                    size={70}
                  />
                  <CircularProgress
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      color: '#32dc88',
                      filter: `drop-shadow(0 0 15px ${alpha('#32dc88', 0.3)})`,
                    }}
                    thickness={4}
                    variant="determinate"
                    value={94}
                    size={70}
                  />
                  <Typography 
                    sx={{ 
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#32dc88',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      textShadow: `0 0 20px ${alpha('#32dc88', 0.2)}`,
                      lineHeight: 1,
                    }}
                  >
                    94%
                  </Typography>
                </Box>
              </Box>

              {/* Decorative Gradient Blobs */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '20%',
                  left: '-10%',
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)}, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={7}>
            <Box sx={{ ml: { xs: 0, md: 2 } }}>
              {/* Section Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 1,
                  borderRadius: 50,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.light, 0.05)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  mb: 3,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <TrendingUpIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Why Choose Us
                </Typography>
              </Box>

              {/* Heading */}
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem' },
                  lineHeight: 1.2,
                  fontWeight: 800,
                  mb: 3,
                  letterSpacing: '-0.02em',
                  textShadow: `0 2px 20px ${alpha(theme.palette.common.black, 0.2)}`,
                }}
              >
                Make Your{' '}
                <Typography
                  component="span"
                  sx={{
                    position: 'relative',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  Exam Preparation
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.2)})`,
                      borderRadius: 2,
                      filter: 'blur(2px)',
                    }}
                  />
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    color: 'text.primary',
                    display: 'block',
                  }}
                >
                  Effective
                </Typography>
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: alpha(theme.palette.text.secondary, 0.9),
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  textShadow: `0 1px 10px ${alpha(theme.palette.common.black, 0.1)}`,
                }}
              >
                Our proven teaching methodology and comprehensive study materials help students excel in NEET, JEE, KCET,
                and Board exams. Get personalized attention and structured learning paths for guaranteed success.
              </Typography>

              {/* Feature Cards Grid */}
              <Grid container spacing={2.5}>
                {data.map(({ title, description, icon, color }, index) => (
                  <Grid key={String(index)} item xs={12} md={6}>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        background: `linear-gradient(135deg, ${alpha(getPaletteColor(color).main, 0.08)}, ${alpha(getPaletteColor(color).main, 0.02)})`,
                        border: `1px solid ${alpha(getPaletteColor(color).main, 0.12)}`,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)',
                        height: '100%',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          borderColor: getPaletteColor(color).main,
                          boxShadow: `0 20px 40px ${alpha(getPaletteColor(color).main, 0.15)}`,
                          background: `linear-gradient(135deg, ${alpha(getPaletteColor(color).main, 0.12)}, ${alpha(getPaletteColor(color).main, 0.04)})`,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            minWidth: 44,
                            height: 44,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${getPaletteColor(color).main}, ${getPaletteColor(color).dark})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: `0 8px 25px ${alpha(getPaletteColor(color).main, 0.3)}`,
                            '& svg': {
                              fontSize: 22,
                            },
                          }}
                        >
                          {icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              mb: 0.5,
                              color: 'text.primary',
                            }}
                          >
                            {title}
                          </Typography>
                          <Typography
                            sx={{
                              lineHeight: 1.5,
                              color: alpha(theme.palette.text.secondary, 0.8),
                              fontSize: '0.9rem',
                            }}
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature