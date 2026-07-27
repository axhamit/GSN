import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import PsychologyIcon from '@mui/icons-material/Psychology'
import ChatIcon from '@mui/icons-material/Chat'
import BuildIcon from '@mui/icons-material/Build'
import SearchIcon from '@mui/icons-material/Search'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionCtaTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
  sectionStatSx,
  sectionSubtitleSx,
} from '@/config/theme/sectionTypography'

const GenerativeAIProgram: FC = () => {
  const theme = useTheme()

  const getPaletteColor = (color: string) => {
    const paletteColor = (theme.palette as Record<string, any>)[color] ?? theme.palette.primary
    return paletteColor as { main: string; light: string; dark: string }
  }

  const features = [
    {
      icon: <ChatIcon />,
      title: 'ChatGPT & Claude',
      description: 'Master the leading AI assistants for content creation, coding, and problem-solving.',
      color: 'primary',
    },
    {
      icon: <BuildIcon />,
      title: 'Prompt Engineering',
      description: 'Learn the art of crafting effective prompts to get the best results from AI models.',
      color: 'secondary',
    },
    {
      icon: <SearchIcon />,
      title: 'Perplexity AI',
      description: 'Utilize AI-powered search and research tools for data gathering and analysis.',
      color: 'warning',
    },
    {
      icon: <MenuBookIcon />,
      title: 'Google NotebookLM',
      description: 'Leverage AI for note-taking, research organization, and knowledge management.',
      color: 'success',
    },
  ]

  const stats = [
    { value: '10X', label: 'Productivity Boost', icon: <TrendingUpIcon /> },
    { value: '500+', label: 'Students Trained', icon: <WorkspacePremiumIcon /> },
    { value: '95%', label: 'Skill Mastery', icon: <PsychologyIcon /> },
  ]

  return (
    <Box
      id="generative-ai"
      sx={{
        py: { xs: 10, md: 14 },
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
              AI Revolution
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
              Generative AI
            </Typography>
            <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' }, color: 'text.primary' }}>
              {' '}
              Program
            </Box>
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
              The Future of Productivity
            </Typography>
            <Typography
              sx={{
                color: alpha(theme.palette.text.secondary, 0.8),
                ...sectionDescriptionSx,
              }}
            >
              Equip your students with the most sought-after skill of the decade. We train candidates to leverage AI 
              tools to multiply their output and efficiency in any corporate role.
            </Typography>
          </Box>
        </Box>

        {/* Stats Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.6)})`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
            boxShadow: `
              0 20px 60px ${alpha(theme.palette.common.black, 0.1)},
              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
            `,
          }}
        >
          {stats.map((stat, index) => (
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
                  ...sectionStatSx,
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

        {/* Features Grid */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  height: '100%',
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(getPaletteColor(feature.color).main, 0.08)}`,
                  boxShadow: `
                    0 20px 60px ${alpha(theme.palette.common.black, 0.12)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -60,
                    right: -60,
                    width: 120,
                    height: 120,
                    background: `radial-gradient(circle, ${alpha(getPaletteColor(feature.color).main, 0.04)}, transparent 70%)`,
                    borderRadius: '50%',
                    transition: 'all 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.01)',
                    borderColor: alpha(getPaletteColor(feature.color).main, 0.2),
                    boxShadow: `
                      0 30px 80px ${alpha(getPaletteColor(feature.color).main, 0.12)},
                      inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                    `,
                    '&::before': {
                      transform: 'scale(1.5)',
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 56,
                      height: 56,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${getPaletteColor(feature.color).main}, ${getPaletteColor(feature.color).dark})`,
                      boxShadow: `0 8px 30px ${alpha(getPaletteColor(feature.color).main, 0.3)}`,
                      '& svg': {
                        fontSize: 28,
                        color: 'white',
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        ...sectionCardTitleSx,
                        mb: 1,
                        background: `linear-gradient(135deg, ${getPaletteColor(feature.color).light}, ${getPaletteColor(feature.color).main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha(theme.palette.text.secondary, 0.85),
                        lineHeight: 1.7,
                        fontSize: '0.9rem',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Learn More Link */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mt: 2,
                        color: getPaletteColor(feature.color).main,
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          gap: 1.5,
                          opacity: 0.8,
                        },
                      }}
                    >
                      Learn More
                      <RocketLaunchIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Skills Tags Section */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.8)})`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
            boxShadow: `
              0 20px 60px ${alpha(theme.palette.common.black, 0.1)},
              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
            `,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography
              sx={{
                color: alpha(theme.palette.text.secondary, 0.6),
                fontWeight: 600,
                fontSize: '0.9rem',
                mr: 1,
              }}
            >
              What You'll Master:
            </Typography>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  px: 2.5,
                  py: 0.8,
                  borderRadius: 50,
                  background: alpha(getPaletteColor(feature.color).main, 0.08),
                  border: `1px solid ${alpha(getPaletteColor(feature.color).main, 0.06)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: alpha(getPaletteColor(feature.color).main, 0.15),
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CheckCircleIcon
                  sx={{
                    fontSize: 16,
                    color: getPaletteColor(feature.color).main,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: alpha(theme.palette.text.primary, 0.8),
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}
                >
                  {feature.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            textAlign: 'center',
            background: `linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.06)}, ${alpha(theme.palette.secondary.main, 0.03)})`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
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
            Ready to Master Generative AI?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.7),
              mb: 2,
            }}
          >
            Join our program and become a certified AI professional
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
            <AutoAwesomeIcon sx={{ fontSize: 20 }} />
            <Typography variant="button" sx={{ fontWeight: 700 }}>
              Enroll Now
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

export default GenerativeAIProgram