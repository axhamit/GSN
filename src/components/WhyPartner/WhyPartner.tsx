import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ExtensionIcon from '@mui/icons-material/Extension'
import StarIcon from '@mui/icons-material/Star'
import PeopleIcon from '@mui/icons-material/People'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionDescriptionSx,
  sectionHeadlineSx,
  sectionStatSx,
} from '@/config/theme/sectionTypography'

const WhyPartner: FC = () => {
  const theme = useTheme()

  const getPaletteColor = (color: string) => {
    const paletteColor = (theme.palette as Record<string, any>)[color] ?? theme.palette.primary
    return paletteColor as { main: string; light: string; dark: string }
  }

  const benefits = [
    {
      icon: <TrendingUpIcon />,
      title: 'Higher Placements',
      description: 'Dramatically improve your campus placement rates by ensuring students meet day-one corporate requirements.',
      color: 'primary',
      gradient: 'primary',
      number: '01',
    },
    {
      icon: <EmojiEventsIcon />,
      title: 'Enhanced Reputation',
      description: 'Position your institution as a forward-thinking leader in holistic student development and career readiness.',
      color: 'secondary',
      gradient: 'secondary',
      number: '02',
    },
    {
      icon: <BusinessCenterIcon />,
      title: 'Corporate Connect',
      description: 'Leverage our extensive industry network to bring real-world insights, guest lectures, and opportunities to campus.',
      color: 'warning',
      gradient: 'warning',
      number: '03',
    },
    {
      icon: <ExtensionIcon />,
      title: 'Plug & Play Solution',
      description: 'Seamlessly integrate our comprehensive curriculum without overburdening your existing academic faculty.',
      color: 'success',
      gradient: 'success',
      number: '04',
    },
  ]

  const stats = [
    { value: '6', label: 'Years of Excellence', icon: <StarIcon /> },
    { value: '24', label: 'Partner Institutions', icon: <PeopleIcon /> },
    { value: '95%', label: 'Placement Rate', icon: <WorkspacePremiumIcon /> },
  ]

  return (
    <Box
      id="why-partner"
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
              Why Partner
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              ...sectionHeadlineSx,
              textAlign: 'center',
              textShadow: `0 2px 40px ${alpha(theme.palette.common.black, 0.3)}`,
            }}
          >
  <Box
    component="span"
    sx={{
      background: `linear-gradient(
        135deg,
        ${theme.palette.primary.light},
        ${theme.palette.primary.main},
        ${theme.palette.secondary.main}
      )`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Partner with
  </Box>

  <Box
    component="span"
    sx={{
      display: { xs: "block", sm: "inline" },
      color: "text.primary",
      ml: { sm: 1 },
    }}
  >
    GSN Foundation?
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
            Transform your institution with our comprehensive partnership programs designed for excellence
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  height: '100%',
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(getPaletteColor(benefit.color).main, 0.08)}`,
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
                    background: `radial-gradient(circle, ${alpha(getPaletteColor(benefit.color).main, 0.04)}, transparent 70%)`,
                    borderRadius: '50%',
                    transition: 'all 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.01)',
                    borderColor: alpha(getPaletteColor(benefit.color).main, 0.2),
                    boxShadow: `
                      0 30px 80px ${alpha(getPaletteColor(benefit.color).main, 0.12)},
                      inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                    `,
                    '&::before': {
                      transform: 'scale(1.8)',
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                  {/* Number Badge */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 48,
                      height: 48,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${alpha(getPaletteColor(benefit.color).main, 0.12)}, ${alpha(getPaletteColor(benefit.color).main, 0.04)})`,
                      border: `1px solid ${alpha(getPaletteColor(benefit.color).main, 0.1)}`,
                      fontFamily: 'monospace',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: getPaletteColor(benefit.color).main,
                    }}
                  >
                    {benefit.number}
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    {/* Icon & Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${getPaletteColor(benefit.color).main}, ${getPaletteColor(benefit.color).dark})`,
                          boxShadow: `0 4px 20px ${alpha(getPaletteColor(benefit.color).main, 0.3)}`,
                          display: 'flex',
                          '& svg': {
                            fontSize: 22,
                            color: 'white',
                          },
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          ...sectionCardTitleSx,
                          color: 'text.primary',
                          background: `linear-gradient(135deg, ${getPaletteColor(benefit.color).light}, ${getPaletteColor(benefit.color).main})`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {benefit.title}
                      </Typography>
                    </Box>

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
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.8)})`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
            boxShadow: `
              0 30px 80px ${alpha(theme.palette.common.black, 0.2)},
              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
            `,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 30% 50%, ${alpha(theme.palette.primary.main, 0.03)}, transparent 70%)`,
              pointerEvents: 'none',
            },
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 2,
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
                  p: 1.2,
                  borderRadius: 3,
                  mb: 1.5,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.05)}`,
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
          ))}
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

export default WhyPartner