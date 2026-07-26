import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SchoolIcon from '@mui/icons-material/School'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PsychologyIcon from '@mui/icons-material/Psychology'
import GroupsIcon from '@mui/icons-material/Groups'
import ComputerIcon from '@mui/icons-material/Computer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
} from '@/config/theme/sectionTypography'

const GapAnalysis: FC = () => {
  const theme = useTheme()

  const campusFeatures = [
    {
      icon: <SchoolIcon />,
      title: 'Focus on Theory',
      description: 'Curriculum heavily leans towards academic concepts and examinations.',
    },
    {
      icon: <PsychologyIcon />,
      title: 'Structured Learning',
      description: 'Predictable syllabus with clear right and wrong answers.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Individual Effort',
      description: 'Success is measured primarily by individual grades and test scores.',
    },
    {
      icon: <ComputerIcon />,
      title: 'Standardized Tech',
      description: 'Basic technological exposure lacking modern corporate tools.',
    },
  ]

  const corporateFeatures = [
    {
      icon: <BusinessCenterIcon />,
      title: 'Focus on Application',
      description: 'Immediate need for practical execution and measurable results.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Ambiguity Management',
      description: 'Navigating complex, dynamic challenges without a textbook answer.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Collaborative Success',
      description: 'Projects require seamless teamwork, communication, and leadership.',
    },
    {
      icon: <AutoAwesomeIcon />,
      title: 'Advanced Proficiency',
      description: 'Mastery of modern tools, Gen AI, CRM, and advanced data analytics.',
    },
  ]

  return (
    <Box
      id="gap-analysis"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.08)} 25%, 
            ${alpha(theme.palette.error.dark, 0.04)} 50%, 
            ${alpha(theme.palette.secondary.dark, 0.06)} 75%,
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
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 70%)`,
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
            <CompareArrowsIcon sx={{ color: theme.palette.error.main, fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
              The Gap
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              ...sectionHeadlineSx,
              textAlign: 'center',
            }}
          >
  <Box
    component="span"
    sx={{
      display: "inline-block",
      background: `linear-gradient(135deg,
        ${theme.palette.error.main},
        ${theme.palette.primary.main}
      )`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    Campus vs Corporate
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
            Understanding the critical gap between academic learning and industry expectations
          </Typography>
        </Box>

        {/* Comparison Grid with VS in between */}
        <Grid container spacing={0} alignItems="stretch">
          {/* Campus Column */}
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: { xs: 4, md: '4px 0 0 4px' },
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                backdropFilter: 'blur(20px)',
                border: { xs: `1px solid ${alpha(theme.palette.error.main, 0.1)}`, md: 'none' },
                borderRight: { md: `1px solid ${alpha(theme.palette.error.main, 0.1)}` },
                borderLeft: { md: `1px solid ${alpha(theme.palette.error.main, 0.1)}` },
                borderTop: { md: `1px solid ${alpha(theme.palette.error.main, 0.1)}` },
                borderBottom: { md: `1px solid ${alpha(theme.palette.error.main, 0.1)}` },
                boxShadow: `
                  0 20px 60px ${alpha(theme.palette.common.black, 0.2)},
                  inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                `,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  background: `radial-gradient(circle, ${alpha(theme.palette.error.main, 0.05)}, transparent 70%)`,
                  borderRadius: '50%',
                },
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`,
                    boxShadow: `0 8px 30px ${alpha(theme.palette.error.main, 0.3)}`,
                  }}
                >
                  <SchoolIcon sx={{ color: 'white', fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      ...sectionCardTitleSx,
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${theme.palette.error.light}, ${theme.palette.error.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    College Environment
                  </Typography>
                  <Typography variant="caption" sx={{ color: alpha(theme.palette.text.secondary, 0.6) }}>
                    Academic Reality
                  </Typography>
                </Box>
              </Box>

              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {campusFeatures.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      background: alpha(theme.palette.error.main, 0.03),
                      border: `1px solid ${alpha(theme.palette.error.main, 0.05)}`,
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: alpha(theme.palette.error.main, 0.06),
                        borderColor: alpha(theme.palette.error.main, 0.1),
                      },
                    }}
                  >
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <CancelIcon sx={{ color: theme.palette.error.main, fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          fontSize: '0.95rem',
                          mb: 0.5,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha(theme.palette.text.secondary, 0.8),
                          lineHeight: 1.6,
                          fontSize: '0.85rem',
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* VS Badge - Centered between columns */}
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              my: { xs: 3, md: 0 },
              position: 'relative',
              zIndex: 3,
            }}
          >
              <Typography
  sx={{
    fontSize: "1rem",
    fontWeight: 700,
    color: "text.secondary",
    px: 2,
  }}
>
  VS
</Typography>
          </Grid>

          {/* Corporate Column */}
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: { xs: 4, md: '0 4px 4px 0' },
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                backdropFilter: 'blur(20px)',
                border: { xs: `1px solid ${alpha(theme.palette.success.main, 0.1)}`, md: 'none' },
                borderRight: { md: `1px solid ${alpha(theme.palette.success.main, 0.1)}` },
                borderLeft: { md: `1px solid ${alpha(theme.palette.success.main, 0.1)}` },
                borderTop: { md: `1px solid ${alpha(theme.palette.success.main, 0.1)}` },
                borderBottom: { md: `1px solid ${alpha(theme.palette.success.main, 0.1)}` },
                boxShadow: `
                  0 20px 60px ${alpha(theme.palette.common.black, 0.2)},
                  inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                `,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  background: `radial-gradient(circle, ${alpha(theme.palette.success.main, 0.05)}, transparent 70%)`,
                  borderRadius: '50%',
                },
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                    boxShadow: `0 8px 30px ${alpha(theme.palette.success.main, 0.3)}`,
                  }}
                >
                  <BusinessCenterIcon sx={{ color: 'white', fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      ...sectionCardTitleSx,
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${theme.palette.success.light}, ${theme.palette.success.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Industry Expectations
                  </Typography>
                  <Typography variant="caption" sx={{ color: alpha(theme.palette.text.secondary, 0.6) }}>
                    Corporate Reality
                  </Typography>
                </Box>
              </Box>

              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {corporateFeatures.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      background: alpha(theme.palette.success.main, 0.03),
                      border: `1px solid ${alpha(theme.palette.success.main, 0.05)}`,
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: alpha(theme.palette.success.main, 0.06),
                        borderColor: alpha(theme.palette.success.main, 0.1),
                      },
                    }}
                  >
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ color: theme.palette.success.main, fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          fontSize: '0.95rem',
                          mb: 0.5,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha(theme.palette.text.secondary, 0.8),
                          lineHeight: 1.6,
                          fontSize: '0.85rem',
                        }}
                      >
                        {feature.description}
                      </Typography>
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
              background: `linear-gradient(90deg, ${theme.palette.success.main}, transparent)`,
              borderRadius: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default GapAnalysis