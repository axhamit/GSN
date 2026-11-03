import React, { FC } from 'react'
import Button from '@mui/material/Button'
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
import ComputerIcon from '@mui/icons-material/Computer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
} from '@/config/theme/sectionTypography'

const GapAnalysis: FC = () => {
  const theme = useTheme()

  const otherCourseFeatures = [
    {
      icon: <SchoolIcon />,
      title: 'Learning style varies',
      description: 'Some courses focus more on concepts than end-to-end implementation.',
    },
    {
      icon: <PsychologyIcon />,
      title: 'Project depth can vary',
      description: 'Hands-on practice and portfolio-ready projects depend on the program.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Different areas of focus',
      description: 'Some courses specialize in a single tool or area of AI.',
    },
    {
      icon: <ComputerIcon />,
      title: 'Career support varies',
      description: 'Mentoring, interview preparation, and portfolio guidance differ by provider.',
    },
  ]

  const gsnFeatures = [
    {
      icon: <PsychologyIcon />,
      title: 'Build a complete AI skill set',
      description: 'Learn Python, machine learning, deep learning, and generative AI.',
    },
    {
      icon: <ComputerIcon />,
      title: 'Learn by building',
      description: 'Practice through 100+ hours of hands-on labs and real-world projects.',
    },
    {
      icon: <AutoAwesomeIcon />,
      title: 'Prepare for production work',
      description: 'Train, evaluate, optimize, and deploy AI models using modern tools.',
    },
    {
      icon: <BusinessCenterIcon />,
      title: 'Get career-focused guidance',
      description: 'Earn an industry-recognized certification, complete a mentor-guided capstone, and get support with your portfolio, resume, and interview preparation.',
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
            ${alpha(theme.palette.text.secondary, 0.025)} 50%, 
            ${alpha(theme.palette.primary.dark, 0.05)} 75%,
            ${alpha(theme.palette.common.black, 0.035)} 100%
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
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 70%)`,
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
          background: `linear-gradient(90deg, transparent, ${theme.palette.common.black}, ${theme.palette.primary.main}, ${theme.palette.common.black}, transparent)`,
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
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.common.black, 0.025)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
              mb: 3,
              backdropFilter: 'blur(20px)',
              animation: 'glowPulse 3s ease-in-out infinite',
              '@keyframes glowPulse': {
                '0%, 100%': { boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.08)}` },
                '50%': { boxShadow: `0 0 32px ${alpha(theme.palette.primary.main, 0.14)}` },
              },
            }}
          >
            <CompareArrowsIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
              Applied AI, built for your next step
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              ...sectionHeadlineSx,
              textAlign: 'center',
              color: theme.palette.common.black,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.common.black})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              GSN AI Training vs Other Courses
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              mx: 'auto',
              maxWidth: 720,
              color: 'text.secondary',
              ...sectionDescriptionSx,
            }}
          >
            Build practical AI skills with guided projects, modern tools, and career support designed to help you take your next professional step.
          </Typography>
        </Box>

        {/* Comparison Grid with VS in between */}
        <Grid container spacing={0} alignItems="stretch">
          {/* Other AI courses */}
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: { xs: 4, md: '4px 0 0 4px' },
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                backdropFilter: 'blur(20px)',
                border: { xs: `1px solid ${alpha(theme.palette.text.secondary, 0.14)}`, md: 'none' },
                borderRight: { md: `1px solid ${alpha(theme.palette.text.secondary, 0.14)}` },
                borderLeft: { md: `1px solid ${alpha(theme.palette.text.secondary, 0.14)}` },
                borderTop: { md: `1px solid ${alpha(theme.palette.text.secondary, 0.14)}` },
                borderBottom: { md: `1px solid ${alpha(theme.palette.text.secondary, 0.14)}` },
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
                  background: `radial-gradient(circle, ${alpha(theme.palette.text.secondary, 0.06)}, transparent 70%)`,
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
                    background: `linear-gradient(135deg, ${theme.palette.text.secondary}, ${theme.palette.text.primary})`,
                    boxShadow: `0 8px 24px ${alpha(theme.palette.text.primary, 0.18)}`,
                  }}
                >
                  <SchoolIcon sx={{ color: 'white', fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      ...sectionCardTitleSx,
                      fontWeight: 800,
                      color: 'text.primary',
                    }}
                  >
                    Other AI Courses
                  </Typography>
                  <Typography variant="caption" sx={{ color: alpha(theme.palette.text.secondary, 0.6) }}>
                    A different learning experience
                  </Typography>
                </Box>
              </Box>

              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {otherCourseFeatures.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      background: alpha(theme.palette.text.secondary, 0.035),
                      border: `1px solid ${alpha(theme.palette.text.secondary, 0.08)}`,
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: alpha(theme.palette.text.secondary, 0.06),
                        borderColor: alpha(theme.palette.text.secondary, 0.16),
                      },
                    }}
                  >
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <InfoOutlinedIcon sx={{ color: 'text.secondary', fontSize: 22 }} />
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
            <Box
              sx={{
                display: 'grid',
                width: 44,
                height: 44,
                placeItems: 'center',
                borderRadius: '50%',
                color: 'text.secondary',
                backgroundColor: 'background.paper',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
                boxShadow: `0 6px 20px ${alpha(theme.palette.common.black, 0.08)}`,
                fontSize: '0.8rem',
                fontWeight: 800,
              }}
            >
                VS
              </Box>
          </Grid>

          {/* GSN Applied AI */}
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: { xs: 4, md: '0 4px 4px 0' },
                height: '100%',
                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                backdropFilter: 'blur(20px)',
                border: { xs: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`, md: 'none' },
                borderRight: { md: `1px solid ${alpha(theme.palette.primary.main, 0.12)}` },
                borderLeft: { md: `1px solid ${alpha(theme.palette.primary.main, 0.12)}` },
                borderTop: { md: `1px solid ${alpha(theme.palette.primary.main, 0.12)}` },
                borderBottom: { md: `1px solid ${alpha(theme.palette.primary.main, 0.12)}` },
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
                  background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)}, transparent 70%)`,
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
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
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
                      color: theme.palette.primary.main,
                    }}
                  >
                    GSN Applied AI
                  </Typography>
                  <Typography variant="caption" sx={{ color: alpha(theme.palette.text.secondary, 0.6) }}>
                    Four-month professional certification
                  </Typography>
                </Box>
              </Box>

              {/* Features List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {gsnFeatures.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      background: alpha(theme.palette.primary.main, 0.03),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: alpha(theme.palette.primary.main, 0.06),
                        borderColor: alpha(theme.palette.primary.main, 0.14),
                      },
                    }}
                  >
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: 22 }} />
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

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 5 } }}>
          <Button
            variant="contained"
            href="/courses/applied-ai-master-certification"
            endIcon={<ArrowForwardIcon />}
            sx={{
              minHeight: 48,
              px: 3,
              borderRadius: 2,
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            Explore the Applied AI program
          </Button>
        </Box>

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
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.common.black})`,
              boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.24)}`,
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

export default GapAnalysis