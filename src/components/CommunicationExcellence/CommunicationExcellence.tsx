import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import ForumIcon from '@mui/icons-material/Forum'
import EmailIcon from '@mui/icons-material/Email'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionCtaTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
  sectionStatSx,
  sectionSubtitleSx,
} from '@/config/theme/sectionTypography'

const CommunicationExcellence: FC = () => {
  const theme = useTheme()

  const getPaletteColor = (color: string) => {
    const paletteColor = (theme.palette as Record<string, any>)[color] ?? theme.palette.primary
    return paletteColor as { main: string; light: string; dark: string }
  }

  const modules = [
    {
      icon: <RecordVoiceOverIcon />,
      title: 'Public Speaking',
      description: 'Conquering stage fear and delivering impactful, confident presentations to diverse audiences.',
      color: 'primary',
      gradient: 'primary',
      features: ['Stage Fear Management', 'Confidence Building', 'Audience Engagement'],
    },
    {
      icon: <ForumIcon />,
      title: 'Business Communication',
      description: 'Mastering corporate vocabulary, meeting etiquette, and professional articulation.',
      color: 'secondary',
      gradient: 'secondary',
      features: ['Corporate Vocabulary', 'Meeting Etiquette', 'Professional Articulation'],
    },
    {
      icon: <EmailIcon />,
      title: 'Professional Email',
      description: 'Structuring persuasive, clear, and concise corporate emails that drive action.',
      color: 'warning',
      gradient: 'warning',
      features: ['Email Structure', 'Persuasive Writing', 'Action-Oriented Content'],
    },
    {
      icon: <SlideshowIcon />,
      title: 'Presentation Skills',
      description: 'Creating visually appealing slides and delivering compelling corporate narratives.',
      color: 'success',
      gradient: 'success',
      features: ['Visual Design', 'Storytelling', 'Narrative Delivery'],
    },
  ]

  const stats = [
    { value: '95%', label: 'Improvement in Communication' },
    { value: '10K+', label: 'Students Trained' },
    { value: '4.9/5', label: 'Average Rating' },
  ]

  return (
    <Box
      id="communication-excellence"
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
              Master Communication
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
              Communication
            </Typography>
            <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' }, color: 'text.primary' }}>
              {' '}
              Excellence
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
            Master the art of professional communication with our comprehensive training modules designed for corporate success
          </Typography>
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

        {/* Modules Grid */}
        <Grid container spacing={3}>
          {modules.map((module, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  height: '100%',
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(getPaletteColor(module.color).main, 0.08)}`,
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
                    background: `radial-gradient(circle, ${alpha(getPaletteColor(module.color).main, 0.04)}, transparent 70%)`,
                    borderRadius: '50%',
                    transition: 'all 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.01)',
                    borderColor: alpha(getPaletteColor(module.color).main, 0.2),
                    boxShadow: `
                      0 30px 80px ${alpha(getPaletteColor(module.color).main, 0.12)},
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
                      background: `linear-gradient(135deg, ${getPaletteColor(module.color).main}, ${getPaletteColor(module.color).dark})`,
                      boxShadow: `0 8px 30px ${alpha(getPaletteColor(module.color).main, 0.3)}`,
                      '& svg': {
                        fontSize: 28,
                        color: 'white',
                      },
                    }}
                  >
                    {module.icon}
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        ...sectionCardTitleSx,
                        mb: 1.5,
                        background: `linear-gradient(135deg, ${getPaletteColor(module.color).light}, ${getPaletteColor(module.color).main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {module.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha(theme.palette.text.secondary, 0.85),
                        lineHeight: 1.7,
                        fontSize: '0.9rem',
                        mb: 2,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {module.description}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {module.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.8,
                            px: 1.5,
                            py: 0.6,
                            borderRadius: 50,
                            background: alpha(getPaletteColor(module.color).main, 0.08),
                            border: `1px solid ${alpha(getPaletteColor(module.color).main, 0.06)}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: alpha(getPaletteColor(module.color).main, 0.15),
                              transform: 'scale(1.05)',
                            },
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              fontSize: 12,
                              color: getPaletteColor(module.color).main,
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: alpha(theme.palette.text.primary, 0.8),
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

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
            Ready to Master Communication?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.7),
              mb: 2,
            }}
          >
            Join our comprehensive training program and transform your communication skills
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
            <TrendingUpIcon sx={{ fontSize: 20 }} />
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

export default CommunicationExcellence