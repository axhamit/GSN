import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SchoolIcon from '@mui/icons-material/School'
import AssignmentIcon from '@mui/icons-material/Assignment'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PsychologyIcon from '@mui/icons-material/Psychology'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionDescriptionSx,
  sectionEyebrowSx,
  sectionHeadlineSx,
} from '@/config/theme/sectionTypography'

const TrainingMethodology: FC = () => {
  const theme = useTheme()

  const steps = [
    {
      number: '01',
      title: 'Learn & Practice',
      description: 'Immersive, hands-on modules focusing on doing rather than just listening.',
      icon: <SchoolIcon />,
      color: 'primary',
      gradient: 'primary',
      details: [
        'Hands-on practical sessions',
        'Real-world project work',
        'Industry-aligned curriculum'
      ]
    },
    {
      number: '02',
      title: 'Mentor & Assess',
      description: 'Continuous feedback loops from industry experts to refine skills.',
      icon: <PsychologyIcon />,
      color: 'secondary',
      gradient: 'secondary',
      details: [
        'Expert mentorship program',
        'Regular skill assessments',
        'Personalized feedback'
      ]
    },
    {
      number: '03',
      title: 'Improve & Place',
      description: 'Targeted mock interviews leading to successful corporate placements.',
      icon: <WorkspacePremiumIcon />,
      color: 'warning',
      gradient: 'warning',
      details: [
        'Mock interview sessions',
        'Placement preparation',
        'Corporate connections'
      ]
    },
  ]

  return (
    <Box
      id="training-methodology"
      sx={{
        py: { xs: 12, md: 16 },
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
        {/* Header Section - BIG & BOLD */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          {/* Premium Badge */}
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
            <AutoAwesomeIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
              Our Process
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                ...sectionHeadlineSx,
                fontSize: { xs: '2.5rem', sm: '2.25rem', md: '3.5rem', lg: '4.5rem' },
                textShadow: `0 4px 40px ${alpha(theme.palette.common.black, 0.3)}`,
                position: 'relative',
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
                Our
              </Box>

              {/* Main Highlighted Text - "Training Methodology" */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
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
                    position: 'relative',
                  }}
                >
                  Training Methodology
                </Typography>

                {/* Decorative Underline with Glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    backgroundSize: '200% 100%',
                    borderRadius: 4,
                    filter: 'blur(4px)',
                    animation: 'underlineMove 3s ease-in-out infinite',
                    '@keyframes underlineMove': {
                      '0%, 100%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                    },
                  }}
                />

                {/* Secondary Glow Underline */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -4,
                    left: '10%',
                    right: '10%',
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.3)}, transparent)`,
                    borderRadius: 4,
                    filter: 'blur(6px)',
                  }}
                />
              </Box>

              {/* Decorative Sparkles */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -20, md: -30 },
                  right: { xs: 10, md: 50 },
                  fontSize: { xs: 30, md: 50 },
                  opacity: 0.2,
                  animation: 'sparkle 3s ease-in-out infinite',
                  '@keyframes sparkle': {
                    '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: 0.2 },
                    '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: 0.4 },
                  },
                }}
              >
                ✨
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 10, md: 20 },
                  left: { xs: 20, md: 50 },
                  fontSize: { xs: 20, md: 35 },
                  opacity: 0.15,
                  animation: 'sparkle 4s ease-in-out infinite 1s',
                }}
              >
                ⭐
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 600,
              color: alpha(theme.palette.text.secondary, 0.7),
              ...sectionDescriptionSx,
            }}
          >
            A proven three-step approach to transform students into industry-ready professionals
          </Typography>
        </Box>

        {/* Methodology Steps */}
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  height: '100%',
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.08)}`,
                  boxShadow: `
                    0 20px 60px ${alpha(theme.palette.common.black, 0.15)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -80,
                    right: -80,
                    width: 160,
                    height: 160,
                    background: `radial-gradient(circle, ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.04)}, transparent 70%)`,
                    borderRadius: '50%',
                    transition: 'all 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    borderColor: alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.3),
                    boxShadow: `
                      0 30px 80px ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.15)},
                      inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                    `,
                    '&::before': {
                      transform: 'scale(2)',
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Number & Icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 56,
                      height: 56,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${theme.palette[step.color as keyof typeof theme.palette].main}, ${theme.palette[step.color as keyof typeof theme.palette].dark})`,
                      boxShadow: `0 8px 30px ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.3)}`,
                      fontFamily: 'monospace',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'white',
                    }}
                  >
                    {step.number}
                  </Box>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.1)}, ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.03)})`,
                      border: `1px solid ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.05)}`,
                      display: 'flex',
                      '& svg': {
                        fontSize: 28,
                        color: theme.palette[step.color as keyof typeof theme.palette].main,
                      },
                    }}
                  >
                    {step.icon}
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  variant="h4"
                  sx={{
                    ...sectionCardTitleSx,
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette[step.color as keyof typeof theme.palette].light}, ${theme.palette[step.color as keyof typeof theme.palette].main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: alpha(theme.palette.text.secondary, 0.85),
                    lineHeight: 1.8,
                    fontSize: '1rem',
                    mb: 3,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </Typography>

                {/* Details List */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {step.details.map((detail, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        background: alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.03),
                        border: `1px solid ${alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.05)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: alpha(theme.palette[step.color as keyof typeof theme.palette].main, 0.06),
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <ArrowForwardIcon
                        sx={{
                          fontSize: 16,
                          color: theme.palette[step.color as keyof typeof theme.palette].main,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha(theme.palette.text.primary, 0.8),
                          fontWeight: 500,
                          fontSize: '0.9rem',
                        }}
                      >
                        {detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Decorative Line */}
        <Box
          sx={{
            mt: 8,
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
      </Container>
    </Box>
  )
}

export default TrainingMethodology