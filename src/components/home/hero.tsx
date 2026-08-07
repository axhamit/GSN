import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SchoolIcon from '@mui/icons-material/School'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PeopleIcon from '@mui/icons-material/People'
import { alpha, useTheme } from '@mui/material/styles'

interface Exp {
  label: string
  value: string
  icon: React.ReactNode
}

interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students Trained',
    value: '10K+',
    icon: <PeopleIcon />,
  },
  {
    label: 'Courses Offered',
    value: '15+',
    icon: <SchoolIcon />,
  },
  {
    label: 'Expert Faculty',
    value: '50+',
    icon: <EmojiEventsIcon />,
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label, icon } = item
  const theme = useTheme()

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 4,
        borderRadius: 4,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 0%, ${alpha(theme.palette.primary.main, 0.1)}, transparent 70%)`,
          opacity: 0,
          transition: 'opacity 0.4s ease',
        },
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          borderColor: theme.palette.primary.main,
          boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.2)}`,
          '&::before': {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          p: 1.5,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          mb: 2,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'rotate(10deg) scale(1.1)',
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: 36, md: 44 },
          fontWeight: 800,
          mb: 1,
          fontFamily: 'monospace',
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: { xs: '1rem', md: '1.1rem' },
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const theme = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        pb: { xs: 10, md: 14 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.dark, 0.1)} 50%, ${alpha(theme.palette.secondary.dark, 0.05)} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '70%',
          height: '70%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Animated Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 50,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.light, 0.05)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  mb: 4,
                  width: 'fit-content',
                  mx: { xs: 'auto', md: 0 },
                  backdropFilter: 'blur(10px)',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      boxShadow: `0 0 0 0 ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    '70%': {
                      boxShadow: `0 0 0 10px ${alpha(theme.palette.primary.main, 0)}`,
                    },
                    '100%': {
                      boxShadow: `0 0 0 0 ${alpha(theme.palette.primary.main, 0)}`,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: theme.palette.success.main,
                    animation: 'blink 1.5s infinite',
                    '@keyframes blink': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.3 },
                    },
                  }}
                />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  🎯 Top Rated Coaching
                </Typography>
              </Box>

              {/* Main Heading */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem' },
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    mb: 3,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 5,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                        borderRadius: 2,
                      },
                    }}
                  >
                    Ace{' '}
                  </Typography>
                  Your{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      color: 'text.primary',
                      display: 'inline-block',
                      position: 'relative',
                    }}
                  >
                    Exams
                  </Typography>{' '}
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                      color: 'text.secondary',
                      fontWeight: 500,
                      mt: 1,
                    }}
                  >
                    with Expert Guidance
                  </Box>
                </Typography>
              </Box>

              {/* Description */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    maxWidth: '90%',
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  Comprehensive coaching for <strong style={{ color: theme.palette.warning.main }}>PCMB 11th & 12th</strong>,{' '}
                  <strong style={{ color: theme.palette.info.main }}>Career Launch Program</strong>, competitive exams like{' '}
                  <strong style={{ color: theme.palette.secondary.main }}>KCET, JEE, NEET</strong>, and{' '}
                  <strong style={{ color: theme.palette.warning.main }}>10th Standard Board</strong> preparation.
                  Choose between online and offline classes with personalized study plans.
                </Typography>
              </Box>

              {/* Course Tags */}
              <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ mb: 4 }}>
                {[
                  { label: 'PCMB 11th', color: 'warning' },
                  { label: 'PCMB 12th', color: 'warning' },
                  { label: 'KCET/JEE/NEET', color: 'error' },
                  { label: '10th Board', color: 'warning' },
                ].map((course) => {
                  const paletteColor = theme.palette[course.color as 'primary' | 'secondary' | 'error' | 'warning'] as typeof theme.palette.primary

                  return (
                    <Grid item xs={6} sm={3} key={course.label}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: { xs: 1, sm: 1.5 },
                          background: `linear-gradient(135deg, ${alpha(paletteColor.main, 0.15)}, ${alpha(paletteColor.main, 0.05)})`,
                          borderRadius: { xs: 2, sm: 3 },
                          border: `1px solid ${alpha(paletteColor.main, 0.2)}`,
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          backdropFilter: 'blur(5px)',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: `0 8px 25px ${alpha(paletteColor.main, 0.2)}`,
                            borderColor: paletteColor.main,
                          },
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: paletteColor.main,
                            fontWeight: 700,
                            fontSize: { xs: '0.62rem', sm: '0.8rem' },
                            letterSpacing: { xs: 0.2, sm: 0.5 },
                            lineHeight: 1.2,
                          }}
                        >
                          {course.label}
                        </Typography>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  '& button': {
                    width: { xs: '100%', sm: 'auto' },
                    py: 1.5,
                    px: 4,
                    fontWeight: 700,
                    borderRadius: 3,
                  },
                }}
              >
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="contained"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.5)}`,
                      },
                    }}
                  >
                    Explore Courses
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        background: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    Watch Demo
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              {/* Floating Stats Card - Top Left */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 30 },
                  left: { xs: 10, md: -30 },
                  zIndex: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.8)})`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: 2.5,
                  minWidth: { xs: 140, md: 180 },
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.3)}`,
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                    }}
                  >
                    <EmojiEventsIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      95%+
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Success Rate
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Floating Badge - Top Right */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 80, md: 100 },
                  right: { xs: 10, md: -20 },
                  zIndex: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.9)}, ${alpha(theme.palette.secondary.dark, 0.9)})`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: { xs: 3, md: 4 },
                  p: { xs: 1.25, md: 2 },
                  minWidth: { xs: 112, md: 160 },
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  boxShadow: `0 20px 60px ${alpha(theme.palette.secondary.main, 0.3)}`,
                  animation: 'float 3.5s ease-in-out infinite 0.5s',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      p: 0.5,
                      borderRadius: '50%',
                      background: alpha(theme.palette.common.white, 0.2),
                    }}
                  >
                    <PlayArrowIcon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.8rem', md: '0.95rem' } }}>
                      Online & Offline
                    </Typography>
                    <Typography variant="caption" sx={{ color: alpha(theme.palette.common.white, 0.8), fontSize: { xs: '0.65rem', md: '0.75rem' } }}>
                      Flexible Learning
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Main Image */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 5,
                  overflow: 'hidden',
                  boxShadow: `0 30px 80px ${alpha(theme.palette.common.black, 0.4)}`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, transparent 50%, ${alpha(theme.palette.secondary.main, 0.05)})`,
                    zIndex: 1,
                  },
                }}
              >
                {mounted ? (
                  <Image
                    src="/images/3Hero.png"
                    alt="Students learning"
                    width={1200}
                    height={900}
                    quality={100}
                    priority
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '4 / 3',
                      background: alpha(theme.palette.primary.main, 0.08),
                    }}
                  />
                )}

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.8)}, transparent)`,
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Bottom Stats Bar */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -20, md: -10 },
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90%',
                  zIndex: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: 2,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.2)}`,
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                {[
                  { label: 'Expert Faculty', value: '50+' },
                  { label: 'Happy Students', value: '10K+' },
                  { label: 'Courses', value: '15+' },
                ].map((stat, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        color: 'primary.main',
                        fontWeight: 800,
                        fontSize: { xs: '1.1rem', sm: '1.3rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Experience Stats Section */}
        <Box
          sx={{
            mt: 10,
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.secondary.main, 0.02)})`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Grid container spacing={3}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero