import React, { FC, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import TimerIcon from '@mui/icons-material/Timer'
import CodeIcon from '@mui/icons-material/Code'
import DomainIcon from '@mui/icons-material/Domain'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'
import PeopleIcon from '@mui/icons-material/People'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionDescriptionSx,
  sectionEyebrowSx,
  sectionHeadlineSx,
  sectionSubtitleSx,
} from '@/config/theme/sectionTypography'

interface CareerLaunchProgramProps {
  onEnrollClick?: () => void
}

const CareerLaunchProgram: FC<CareerLaunchProgramProps> = ({ onEnrollClick }) => {
  const theme = useTheme()

  const getPaletteColor = (color: string) => {
    const paletteColor = (theme.palette as Record<string, any>)[color] ?? theme.palette.primary
    return paletteColor as { main: string; light: string; dark: string }
  }

  const timelineData = [
    {
      week: 'Week 1-2',
      title: 'Communication & Personal Branding',
      icon: <PersonIcon />,
      color: 'primary',
      items: [
        'Professional communication skills',
        'Personal branding & LinkedIn profile',
        'Resume building & cover letter writing',
        'Interview etiquette & body language'
      ],
    },
    {
      week: 'Week 3-4',
      title: 'Advanced Tech & Gen AI Productivity',
      icon: <CodeIcon />,
      color: 'secondary',
      items: [
        'Advanced technical skills',
        'Generative AI tools & applications',
        'AI-powered productivity techniques',
        'Tech stack modernization'
      ],
    },
    {
      week: 'Week 5-6',
      title: 'Domain Expertise (Sales/HR)',
      icon: <DomainIcon />,
      color: 'warning',
      items: [
        'Domain-specific training',
        'Sales fundamentals & strategies',
        'HR operations & talent management',
        'Industry best practices'
      ],
    },
    {
      week: 'Week 7-8',
      title: 'Mock Interviews & Placement Drives',
      icon: <WorkIcon />,
      color: 'success',
      items: [
        'Mock interview sessions',
        'Placement drive preparation',
        'Corporate networking',
        'Job offer negotiation'
      ],
    },
  ]

  const stats = [
    { value: '8', label: 'Weeks of Training', icon: <TimerIcon /> },
    { value: '24', label: 'Placement Guarantee', icon: <EmojiEventsIcon /> },
    { value: '100%', label: 'Success Rate', icon: <PeopleIcon /> },
  ]

  return (
    <Box
      id="career-launch"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.08)} 20%, 
            ${alpha(theme.palette.secondary.dark, 0.04)} 40%, 
            ${alpha(theme.palette.primary.dark, 0.06)} 60%,
            ${alpha(theme.palette.common.black, 0.2)} 100%
          )
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '40%',
          height: '40%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.03)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 3,
              py: 1.2,
              borderRadius: 50,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.light, 0.05)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
              mb: 3,
              backdropFilter: 'blur(20px)',
              animation: 'glowPulse 3s ease-in-out infinite',
              '@keyframes glowPulse': {
                '0%, 100%': { boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}` },
                '50%': { boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.2)}` },
              },
            }}
          >
            <RocketLaunchIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
              Your Journey to Success
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              ...sectionHeadlineSx,
              textShadow: `0 4px 40px ${alpha(theme.palette.common.black, 0.3)}`,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'block',
                ...sectionEyebrowSx,
                color: alpha(theme.palette.text.primary, 0.5),
                mb: 1,
                fontFamily: 'monospace',
              }}
            >
              60-Day
            </Box>

            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Typography
                component="span"
                sx={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  animation: 'gradientShift 5s ease-in-out infinite',
                  '@keyframes gradientShift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                  },
                }}
              >
                Career Launch Program
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  backgroundSize: '200% 100%',
                  borderRadius: 4,
                  filter: 'blur(3px)',
                  animation: 'underlineMove 3s ease-in-out infinite',
                  '@keyframes underlineMove': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                  },
                }}
              />
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              mx: 'auto',
              maxWidth: 600,
              color: alpha(theme.palette.text.secondary, 0.7),
              ...sectionDescriptionSx,
            }}
          >
            A comprehensive 8-week journey from student to corporate-ready professional
          </Typography>
        </Box>

        {/* Main Content Grid */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side - Program Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  ...sectionSubtitleSx,
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your 60-Day Roadmap to Success
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.text.secondary, 0.8),
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Each week is carefully designed to build specific skills that transform you into a corporate-ready professional.
                From communication to technical expertise, we cover everything you need.
              </Typography>

              {/* Stats Mini Cards */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {stats.map((stat, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      minWidth: 100,
                      p: 2,
                      borderRadius: 3,
                      background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.6)})`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
                      textAlign: 'center',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: alpha(theme.palette.text.secondary, 0.6),
                        fontSize: '0.7rem',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Scrollable Syllabus Container */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: 400, md: 480 },
                overflowY: 'auto',
                overflowX: 'hidden',
                pr: { xs: 0, md: 1 },
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: alpha(theme.palette.primary.main, 0.05),
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: theme.palette.primary.main,
                },
              }}
            >
              {/* Scroll Indicator */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  animation: 'bounce 2s infinite',
                  '@keyframes bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(5px)' },
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: 50,
                    background: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <ExpandMoreIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: alpha(theme.palette.text.secondary, 0.6),
                      fontWeight: 500,
                      fontSize: '0.7rem',
                    }}
                  >
                    Scroll to explore all weeks
                  </Typography>
                  <ExpandMoreIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                </Box>
              </Box>

              {/* Week Cards - Stacked Vertically */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pb: 2 }}>
                {timelineData.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      borderRadius: 4,
                      background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${alpha(getPaletteColor(item.color).main, 0.08)}`,
                      boxShadow: `
                        0 10px 40px ${alpha(theme.palette.common.black, 0.1)},
                        inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                      `,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -30,
                        right: -30,
                        width: 80,
                        height: 80,
                        background: `radial-gradient(circle, ${alpha(getPaletteColor(item.color).main, 0.04)}, transparent 70%)`,
                        borderRadius: '50%',
                      },
                      '&:hover': {
                        transform: 'translateX(6px)',
                        borderColor: alpha(getPaletteColor(item.color).main, 0.2),
                        boxShadow: `
                          0 15px 50px ${alpha(getPaletteColor(item.color).main, 0.1)},
                          inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                        `,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      {/* Week Number & Icon */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 44,
                            height: 44,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${getPaletteColor(item.color).main}, ${getPaletteColor(item.color).dark})`,
                            boxShadow: `0 4px 20px ${alpha(getPaletteColor(item.color).main, 0.3)}`,
                            '& svg': {
                              fontSize: 20,
                              color: 'white',
                            },
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 1.5,
                            py: 0.3,
                            borderRadius: 50,
                            background: `linear-gradient(135deg, ${alpha(getPaletteColor(item.color).main, 0.12)}, ${alpha(getPaletteColor(item.color).main, 0.04)})`,
                            border: `1px solid ${alpha(getPaletteColor(item.color).main, 0.1)}`,
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 700,
                              color: getPaletteColor(item.color).main,
                              fontSize: '0.6rem',
                              letterSpacing: 0.3,
                            }}
                          >
                            {item.week}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Content */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            ...sectionCardTitleSx,
                            color: 'text.primary',
                            mb: 1.5,
                            background: `linear-gradient(135deg, ${getPaletteColor(item.color).light}, ${getPaletteColor(item.color).main})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                          {item.items.map((detail, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 0.6,
                                borderRadius: 2,
                                background: alpha(getPaletteColor(item.color).main, 0.03),
                                border: `1px solid ${alpha(getPaletteColor(item.color).main, 0.05)}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: alpha(getPaletteColor(item.color).main, 0.06),
                                  transform: 'translateX(4px)',
                                },
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  fontSize: 14,
                                  color: getPaletteColor(item.color).main,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: alpha(theme.palette.text.primary, 0.8),
                                  fontWeight: 400,
                                  fontSize: '0.78rem',
                                  lineHeight: 1.4,
                                }}
                              >
                                {detail}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Decorative Line */}
        <Box
          sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main})`,
              borderRadius: 1,
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.3)}`,
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                '50%': { transform: 'scale(1.5)', opacity: 0.5 },
              },
            }}
          />
          <Box
            sx={{
              width: 60,
              height: 2,
              background: `linear-gradient(90deg, ${theme.palette.secondary.main}, transparent)`,
              borderRadius: 1,
            }}
          />
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            py: 6,
            px: 3,
            borderRadius: 4,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.6)})`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -50,
              right: -50,
              width: 150,
              height: 150,
              background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
              borderRadius: '50%',
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Launch Your Career?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.8),
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Join our 60-day Career Launch Program and transform your professional journey with expert guidance and practical skills.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={onEnrollClick}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              borderRadius: 3,
              px: 6,
              py: 1.8,
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
              '&:hover': {
                transform: 'translateY(-3px) scale(1.02)',
                boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.6)}`,
              },
            }}
          >
            <RocketLaunchIcon sx={{ mr: 1.5, fontSize: 24 }} />
            Enroll Now
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default CareerLaunchProgram