import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import {
  sectionBadgeSx,
  sectionDescriptionSx,
  sectionEyebrowSx,
  sectionHeadlineSx,
} from '@/config/theme/sectionTypography'

interface CareerLaunchHeroProps {
  onEnrollClick?: () => void
}

const CareerLaunchHero: FC<CareerLaunchHeroProps> = ({ onEnrollClick }) => {
  const theme = useTheme()

  const highlights = [
    { icon: <SchoolIcon />, label: '60-Day Program' },
    { icon: <WorkIcon />, label: 'Placement Ready' },
    { icon: <TrendingUpIcon />, label: '95% Success Rate' },
  ]

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 14 },
        pb: { xs: 6, md: 10 },
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.15)} 20%, 
            ${alpha(theme.palette.secondary.dark, 0.08)} 40%, 
            ${alpha(theme.palette.primary.dark, 0.1)} 60%,
            ${alpha(theme.palette.common.black, 0.3)} 100%
          )
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-40%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'pulseGlow 10s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'pulseGlow 8s ease-in-out infinite reverse',
        },
        '@keyframes pulseGlow': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.2) translate(5%, 5%)' },
        },
      }}
    >
      {/* Decorative Top Border */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, transparent)`,
          backgroundSize: '300% 100%',
          animation: 'gradientMove 4s ease-in-out infinite',
          '@keyframes gradientMove': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        }}
      />

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          fontSize: { xs: 40, md: 80 },
          opacity: 0.05,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(10deg)' },
          },
        }}
      >
        🚀
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          fontSize: { xs: 30, md: 60 },
          opacity: 0.04,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      >
        ⭐
      </Box>

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
              {/* Premium Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 2.5,
                  py: 1,
                  borderRadius: 50,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.light, 0.05)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  mb: 3,
                  width: 'fit-content',
                  mx: { xs: 'auto', md: 0 },
                  backdropFilter: 'blur(20px)',
                  animation: 'glowPulse 3s ease-in-out infinite',
                  '@keyframes glowPulse': {
                    '0%, 100%': { boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}` },
                    '50%': { boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.2)}` },
                  },
                }}
              >
                <AutoAwesomeIcon sx={{ color: theme.palette.primary.main, fontSize: 16 }} />
                <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
                  Career Launch Program 2026
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h1"
                  sx={{
                    ...sectionHeadlineSx,
                    textShadow: `0 4px 40px ${alpha(theme.palette.common.black, 0.3)}`,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      ...sectionEyebrowSx,
                      color: alpha(theme.palette.text.primary, 0.5),
                      mb: 1,
                      fontFamily: 'monospace',
                    }}
                  >
                    GSN Foundation
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontSize: { xs: '1.375rem', sm: '1.625rem', md: '2rem' },
                      fontWeight: 700,
                      color: alpha(theme.palette.text.primary, 0.6),
                      mb: 1,
                    }}
                  >
                    Career Readiness & Employability Programs
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
                      fontWeight: 900,
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundSize: '200% 200%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'gradientShift 5s ease-in-out infinite',
                      '@keyframes gradientShift': {
                        '0%, 100%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                      },
                    }}
                  >
                    Empowering Students.
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
                      fontWeight: 900,
                      background: `linear-gradient(135deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                      backgroundSize: '200% 200%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'gradientShift 5s ease-in-out infinite 1s',
                    }}
                  >
                    Transforming Careers.
                  </Typography>
                </Typography>
              </Box>

              {/* Tagline with underline */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  mb: 4,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    ...sectionDescriptionSx,
                    fontWeight: 500,
                    color: alpha(theme.palette.text.secondary, 0.8),
                    letterSpacing: 0.5,
                    fontStyle: 'italic',
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Bridging the Gap Between Campus and Corporate
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    backgroundSize: '200% 100%',
                    borderRadius: 4,
                    filter: 'blur(2px)',
                    animation: 'underlineMove 3s ease-in-out infinite',
                    '@keyframes underlineMove': {
                      '0%, 100%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                    },
                  }}
                />
              </Box>

              {/* Highlights */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mb: 4,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {highlights.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: 50,
                      background: alpha(theme.palette.background.paper, 0.4),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        background: alpha(theme.palette.primary.main, 0.06),
                        borderColor: alpha(theme.palette.primary.main, 0.15),
                      },
                    }}
                  >
                    <Box sx={{ '& svg': { fontSize: 16, color: theme.palette.primary.main } }}>
                      {item.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: alpha(theme.palette.text.primary, 0.8),
                        fontSize: '0.85rem',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  '& button': {
                    width: { xs: '100%', sm: 'auto' },
                    py: 1.5,
                    px: 4,
                    fontWeight: 700,
                    borderRadius: 3,
                  },
                }}
              >
                <StyledButton
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={onEnrollClick}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    boxShadow: `0 8px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.02)',
                      boxShadow: `0 12px 50px ${alpha(theme.palette.primary.main, 0.6)}`,
                    },
                  }}
                >
                  <RocketLaunchIcon sx={{ mr: 1, fontSize: 20 }} />
                  Enroll Now
                </StyledButton>
                <ScrollLink to="career-launch" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="outlined"
                    sx={{
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      color: theme.palette.text.primary,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        background: alpha(theme.palette.primary.main, 0.05),
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    Learn More
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Hero Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              {/* Main Image Container */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 5,
                  overflow: 'hidden',
                  boxShadow: `
                    0 40px 100px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent 50%, ${alpha(theme.palette.secondary.main, 0.05)})`,
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src="/images/header.png"
                  alt="Career Launch Program"
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
              </Box>

              {/* Floating Card - Success Rate */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 30 },
                  right: { xs: 10, md: -20 },
                  zIndex: 2,
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(30px)',
                  borderRadius: 4,
                  p: 2.5,
                  minWidth: { xs: 140, md: 180 },
                  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  boxShadow: `
                    0 20px 60px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  animation: 'floatCard1 4s ease-in-out infinite',
                  '@keyframes floatCard1': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(2deg)' },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                      boxShadow: `0 8px 30px ${alpha(theme.palette.success.main, 0.3)}`,
                    }}
                  >
                    <CheckCircleIcon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      95%
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      Success Rate
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Floating Card - Duration */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 20, md: 40 },
                  left: { xs: 10, md: -20 },
                  zIndex: 2,
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(30px)',
                  borderRadius: 4,
                  p: 2.5,
                  minWidth: { xs: 140, md: 170 },
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  boxShadow: `
                    0 20px 60px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  animation: 'floatCard2 4.5s ease-in-out infinite 0.5s',
                  '@keyframes floatCard2': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-12px) rotate(-2deg)' },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                    }}
                  >
                    <SchoolIcon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      60 Days
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      Intensive Program
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CareerLaunchHero