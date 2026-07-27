import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import CodeIcon from '@mui/icons-material/Code'
import ChatIcon from '@mui/icons-material/Chat'
import SchoolIcon from '@mui/icons-material/School'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PeopleIcon from '@mui/icons-material/People'
import WorkIcon from '@mui/icons-material/Work'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionCtaTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
  sectionStatSx,
  sectionSubtitleSx,
} from '@/config/theme/sectionTypography'

// Dynamic data interface
export interface EmployabilityData {
  title: string
  subtitle: string
  description: string
  challenges: {
    label: string
    percentage: number
    icon: React.ReactNode
    color: string
    description?: string
    details?: string[]
  }[]
  stats: {
    value: string
    label: string
    icon: React.ReactNode
  }[]
}

// Default data
const defaultData: EmployabilityData = {
  title: "India's Employability Challenge",
  subtitle: 'The Gap',
  description: 'Statistics show a critical disparity: While millions graduate annually, only a fraction possess the immediate practical skills and communication excellence required by modern corporations.',
  challenges: [
    {
      label: 'Lack Practical Tech Skills',
      percentage: 45,
      icon: <CodeIcon />,
      color: 'error',
      description: 'Students lack hands-on technical skills required in the industry',
      details: [
        'No exposure to modern programming languages',
        'Lack of project-based learning',
        'Outdated curriculum',
        'Limited access to tech resources'
      ]
    },
    {
      label: 'Require Soft Skills & Comm.',
      percentage: 35,
      icon: <ChatIcon />,
      color: 'warning',
      description: 'Communication and soft skills are major gaps in graduates',
      details: [
        'Poor verbal communication skills',
        'Lack of confidence in interviews',
        'Unable to articulate ideas clearly',
        'Limited teamwork experience'
      ]
    },
    {
      label: 'Industry Ready Graduates',
      percentage: 20,
      icon: <SchoolIcon />,
      color: 'success',
      description: 'Only a small fraction are truly industry-ready',
      details: [
        'Lack of real-world project experience',
        'No exposure to corporate culture',
        'Unable to meet industry standards',
        'Limited professional networking'
      ]
    },
  ],
  stats: [
    { value: '10M+', label: 'Graduates Annually', icon: <PeopleIcon /> },
    { value: '80%', label: 'Unemployable', icon: <WarningIcon /> },
    { value: '20%', label: 'Industry Ready', icon: <CheckCircleIcon /> },
  ]
}

interface EmployabilityChallengeProps {
  data?: EmployabilityData
}

const EmployabilityChallenge: FC<EmployabilityChallengeProps> = ({ data = defaultData }) => {
  const theme = useTheme()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const getColor = (color: string) => {
    switch(color) {
      case 'error': return theme.palette.error.main
      case 'warning': return theme.palette.warning.main
      case 'success': return theme.palette.success.main
      case 'primary': return theme.palette.primary.main
      case 'secondary': return theme.palette.secondary.main
      default: return theme.palette.primary.main
    }
  }

  const getColorLight = (color: string) => {
    switch(color) {
      case 'error': return theme.palette.error.light
      case 'warning': return theme.palette.warning.light
      case 'success': return theme.palette.success.light
      case 'primary': return theme.palette.primary.light
      case 'secondary': return theme.palette.secondary.light
      default: return theme.palette.primary.light
    }
  }

  const getColorDark = (color: string) => {
    switch(color) {
      case 'error': return theme.palette.error.dark
      case 'warning': return theme.palette.warning.dark
      case 'success': return theme.palette.success.dark
      case 'primary': return theme.palette.primary.dark
      case 'secondary': return theme.palette.secondary.dark
      default: return theme.palette.primary.dark
    }
  }

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Box
      id="employability-challenge"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.08)} 20%, 
            ${alpha(theme.palette.error.dark, 0.04)} 40%, 
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
          background: `radial-gradient(circle, ${alpha(theme.palette.error.main, 0.03)} 0%, transparent 70%)`,
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
          background: `linear-gradient(90deg, transparent, ${theme.palette.error.main}, ${theme.palette.primary.main}, ${theme.palette.error.main}, transparent)`,
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
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {/* Premium Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 3,
              py: 1.2,
              borderRadius: 50,
              background: `linear-gradient(135deg, ${alpha(theme.palette.error.main, 0.12)}, ${alpha(theme.palette.primary.main, 0.05)})`,
              border: `1px solid ${alpha(theme.palette.error.main, 0.15)}`,
              mb: 3,
              backdropFilter: 'blur(20px)',
              animation: 'glowPulse 3s ease-in-out infinite',
              '@keyframes glowPulse': {
                '0%, 100%': { boxShadow: `0 0 20px ${alpha(theme.palette.error.main, 0.1)}` },
                '50%': { boxShadow: `0 0 40px ${alpha(theme.palette.error.main, 0.2)}` },
              },
            }}
          >
            <TrendingDownIcon sx={{ color: theme.palette.error.main, fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
              The Challenge
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
            <Typography
              component="span"
              sx={{
                fontSize: 'inherit',
                fontWeight: 'inherit',
                background: `linear-gradient(135deg, ${theme.palette.error.light}, ${theme.palette.error.main}, ${theme.palette.primary.main})`,
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
              {data.title}
            </Typography>
          </Typography>

          <Box sx={{ mt: 3, maxWidth: 700, mx: 'auto' }}>
            <Typography
              variant="h6"
              sx={{
                color: alpha(theme.palette.text.secondary, 0.6),
                ...sectionSubtitleSx,
                mb: 2,
                fontFamily: 'monospace',
                letterSpacing: 1,
              }}
            >
              {data.subtitle}
            </Typography>
            <Typography
              sx={{
                color: alpha(theme.palette.text.secondary, 0.8),
                ...sectionDescriptionSx,
              }}
            >
              {data.description}
            </Typography>
          </Box>
        </Box>

        {/* Main Content - Circular Progress + Accordion */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side - All Circular Progress Indicators */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.8)})`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
                boxShadow: `
                  0 20px 60px ${alpha(theme.palette.common.black, 0.1)},
                  inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                `,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                gap: 3,
              }}
            >
              {data.challenges.map((challenge, index) => {
                const color = getColor(challenge.color)
                const colorLight = getColorLight(challenge.color)
                const isActive = expandedIndex === index

                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      p: 2,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      background: isActive ? alpha(color, 0.08) : 'transparent',
                      border: `1px solid ${isActive ? alpha(color, 0.15) : 'transparent'}`,
                      cursor: 'pointer',
                      '&:hover': {
                        background: alpha(color, 0.05),
                        borderColor: alpha(color, 0.1),
                      },
                    }}
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* Circular Progress */}
                    <Box sx={{ position: 'relative', flexShrink: 0 }}>
                      <CircularProgress
                        variant="determinate"
                        value={100}
                        size={80}
                        thickness={5}
                        sx={{
                          color: alpha(theme.palette.text.primary, 0.05),
                          position: 'absolute',
                        }}
                      />
                      <CircularProgress
                        variant="determinate"
                        value={challenge.percentage}
                        size={80}
                        thickness={5}
                        sx={{
                          color: color,
                          filter: `drop-shadow(0 0 15px ${alpha(color, 0.2)})`,
                          transition: 'all 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${color}, ${getColorDark(challenge.color)})`,
                            boxShadow: `0 4px 15px ${alpha(color, 0.3)}`,
                            '& svg': {
                              fontSize: 16,
                              color: 'white',
                            },
                          }}
                        >
                          {challenge.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            background: `linear-gradient(135deg, ${colorLight}, ${color})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1,
                            mt: 0.3,
                          }}
                        >
                          {challenge.percentage}%
                        </Typography>
                      </Box>
                    </Box>

                    {/* Label with Expand Icon */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: isActive ? color : 'text.primary',
                          fontSize: '0.95rem',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {challenge.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: alpha(theme.palette.text.secondary, 0.6),
                          display: 'block',
                          fontSize: '0.75rem',
                        }}
                      >
                        {challenge.percentage}% of graduates
                      </Typography>
                    </Box>

                    <Box sx={{ flexShrink: 0 }}>
                      {isActive ? (
                        <ExpandLessIcon sx={{ color: color }} />
                      ) : (
                        <ExpandMoreIcon sx={{ color: alpha(theme.palette.text.secondary, 0.4) }} />
                      )}
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Grid>

          {/* Right Side - Accordion Details */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                height: '100%',
                minHeight: 400,
                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
                boxShadow: `
                  0 20px 60px ${alpha(theme.palette.common.black, 0.1)},
                  inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                `,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              {expandedIndex !== null ? (
                <>
                  {/* Accordion Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${getColor(data.challenges[expandedIndex].color)}, ${getColorDark(data.challenges[expandedIndex].color)})`,
                        boxShadow: `0 4px 20px ${alpha(getColor(data.challenges[expandedIndex].color), 0.3)}`,
                        '& svg': {
                          fontSize: 24,
                          color: 'white',
                        },
                      }}
                    >
                      {data.challenges[expandedIndex].icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          background: `linear-gradient(135deg, ${getColorLight(data.challenges[expandedIndex].color)}, ${getColor(data.challenges[expandedIndex].color)})`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: { xs: '1.375rem', md: '1.625rem' },
                        }}
                      >
                        {data.challenges[expandedIndex].label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha(theme.palette.text.secondary, 0.6),
                          fontSize: '0.85rem',
                        }}
                      >
                        {data.challenges[expandedIndex].percentage}% of graduates face this challenge
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: alpha(theme.palette.text.secondary, 0.8),
                      fontSize: '0.95rem',
                      lineHeight: 1.8,
                      mb: 3,
                      p: 2,
                      borderRadius: 3,
                      background: alpha(theme.palette.background.default, 0.4),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.05)}`,
                    }}
                  >
                    {data.challenges[expandedIndex].description}
                  </Typography>

                  {/* Details List */}
                  {data.challenges[expandedIndex].details && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '0.85rem',
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          opacity: 0.6,
                        }}
                      >
                        Key Factors
                      </Typography>
                      {data.challenges[expandedIndex].details?.map((detail, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            p: 1.5,
                            borderRadius: 2,
                            background: alpha(getColor(data.challenges[expandedIndex].color), 0.04),
                            border: `1px solid ${alpha(getColor(data.challenges[expandedIndex].color), 0.06)}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: alpha(getColor(data.challenges[expandedIndex].color), 0.08),
                              transform: 'translateX(4px)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: getColor(data.challenges[expandedIndex].color),
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: alpha(theme.palette.text.primary, 0.8),
                              fontSize: '0.9rem',
                            }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </>
              ) : (
                <Box
                  sx={{
                    textAlign: 'center',
                    color: alpha(theme.palette.text.secondary, 0.4),
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Select a challenge
                  </Typography>
                  <Typography variant="body2">
                    Click on any challenge from the left to see detailed information
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.6)})`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.error.main, 0.06)}`,
            boxShadow: `
              0 20px 60px ${alpha(theme.palette.common.black, 0.1)},
              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
            `,
          }}
        >
          {data.stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 1.5,
                transition: 'all 0.3s ease',
                borderRadius: 3,
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background: alpha(theme.palette.primary.main, 0.04),
                },
                '&:not(:last-child)::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '20%',
                  bottom: '20%',
                  width: 1,
                  background: `linear-gradient(180deg, transparent, ${alpha(theme.palette.primary.main, 0.1)}, transparent)`,
                  display: { xs: 'none', sm: 'block' },
                },
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  p: 1,
                  borderRadius: 2,
                  mb: 1,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.05)}`,
                  '& svg': {
                    fontSize: 24,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {stat.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: alpha(theme.palette.text.secondary, 0.7),
                  fontWeight: 500,
                  fontSize: '0.85rem',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            textAlign: 'center',
            background: `linear-gradient(145deg, ${alpha(theme.palette.error.main, 0.06)}, ${alpha(theme.palette.primary.main, 0.03)})`,
            border: `1px solid ${alpha(theme.palette.error.main, 0.06)}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              ...sectionCtaTitleSx,
              color: 'text.primary',
              mb: 1,
            }}
          >
            Ready to Bridge the Gap?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.7),
              mb: 2,
            }}
          >
            Join our training programs and become one of the 20% industry-ready graduates
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 3,
              py: 1.2,
              borderRadius: 50,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              color: 'white',
              fontWeight: 600,
              boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-2px) scale(1.02)',
                boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
              },
            }}
          >
            <WorkIcon sx={{ fontSize: 20 }} />
            <Typography variant="button" sx={{ fontWeight: 700 }}>
              Start Your Journey
            </Typography>
          </Box>
        </Box>

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
              background: `linear-gradient(90deg, transparent, ${theme.palette.error.main})`,
              borderRadius: 1,
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.palette.error.main}, ${theme.palette.primary.main})`,
              boxShadow: `0 0 30px ${alpha(theme.palette.error.main, 0.3)}`,
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
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
              borderRadius: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default EmployabilityChallenge