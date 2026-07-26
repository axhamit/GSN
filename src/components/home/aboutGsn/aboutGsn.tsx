import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import SchoolIcon from '@mui/icons-material/School'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
  sectionStatSx,
} from '@/config/theme/sectionTypography'

const AboutGSN: FC = () => {
  const theme = useTheme()

  const getPaletteColor = (color: string) => {
    const paletteColor = (theme.palette as Record<string, any>)[color] ?? theme.palette.primary
    return paletteColor as { main: string; light: string; dark: string }
  }

  const features = [
    {
      icon: <SchoolIcon />,
      title: 'Who We Are',
      description: "We are India's most trusted employability and career readiness platform, dedicated to elevating higher education institutions.",
      color: 'primary',
      gradient: 'primary',
    },
    {
      icon: <RocketLaunchIcon />,
      title: 'What We Do',
      description: 'We design, develop, and deliver premium corporate training programs tailored for final year degree students, ensuring they are placement-ready.',
      color: 'secondary',
      gradient: 'secondary',
    },
    {
      icon: <LightbulbIcon />,
      title: 'Our Approach',
      description: 'Guided by our core values of practical learning, innovation, and integrity, we replace outdated methodologies with modern, industry-relevant skill building.',
      color: 'warning',
      gradient: 'warning',
    },
  ]

  const stats = [
    { value: '10K+', label: 'Students Trained', icon: <Diversity3Icon /> },
    { value: '500+', label: 'Corporate Partners', icon: <WorkspacePremiumIcon /> },
    { value: '95%', label: 'Placement Rate', icon: <TrendingUpIcon /> },
    { value: '150+', label: 'Institutions', icon: <SchoolIcon /> },
  ]

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 12, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.06)} 30%, 
            ${alpha(theme.palette.secondary.dark, 0.04)} 60%, 
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
          animation: 'pulseGlow 12s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '40%',
          height: '40%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'pulseGlow 10s ease-in-out infinite reverse',
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
              About GSN Foundation
            </Typography>
          </Box>

          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 1200,
              mx: 'auto',
              mb: 4,
            }}
          >
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
        background: `linear-gradient(135deg,
          ${theme.palette.primary.light},
          ${theme.palette.primary.main},
          ${theme.palette.secondary.main}
        )`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Building Futures,
    </Box>

    <Box
      component="span"
      sx={{
        display: { xs: "block", md: "inline" },
        ml: { md: 2 },
        color: "text.primary",
      }}
    >
      One Student at a Time
    </Box>
  </Typography>
</Box>
          <Typography
            sx={{
              mt: 3,
              mx: 'auto',
              maxWidth: 700,
              color: alpha(theme.palette.text.secondary, 0.8),
              ...sectionDescriptionSx,
            }}
          >
            Empowering the next generation of professionals through innovative education and industry-aligned training programs.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(getPaletteColor(feature.color).main, 0.1)}`,
                  boxShadow: `
                    0 20px 60px ${alpha(theme.palette.common.black, 0.2)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 200,
                    height: 200,
                    background: `radial-gradient(circle, ${alpha(getPaletteColor(feature.color).main, 0.06)}, transparent 70%)`,
                    borderRadius: '50%',
                    transition: 'all 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    borderColor: alpha(getPaletteColor(feature.color).main, 0.3),
                    boxShadow: `
                      0 30px 80px ${alpha(getPaletteColor(feature.color).main, 0.15)},
                      inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                    `,
                    '&::before': {
                      transform: 'scale(1.5)',
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 1.5,
                    borderRadius: 3,
                    mb: 2.5,
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

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    ...sectionCardTitleSx,
                    fontWeight: 800,
                    mb: 1.5,
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
                  sx={{
                    color: alpha(theme.palette.text.secondary, 0.85),
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.8)})`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
            boxShadow: `
              0 30px 80px ${alpha(theme.palette.common.black, 0.2)},
              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
            `,
          }}
        >
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    transition: 'all 0.3s ease',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'scale(1.05)',
                      background: alpha(theme.palette.primary.main, 0.05),
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1,
                      borderRadius: 2,
                      mb: 1.5,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                      '& svg': {
                        fontSize: 28,
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
                      color: alpha(theme.palette.text.secondary, 0.8),
                      fontWeight: 500,
                      fontSize: '0.9rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
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
              background: theme.palette.primary.main,
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
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
              borderRadius: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default AboutGSN