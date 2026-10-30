import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useTheme, alpha } from '@mui/material/styles'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PsychologyIcon from '@mui/icons-material/Psychology'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

interface AIHeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  onCtaClick?: () => void
  secondaryCtaText?: string
  onSecondaryCtaClick?: () => void
  badge?: string
  showVisuals?: boolean
}

const AIHeroSection: FC<AIHeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText = 'Enroll Now',
  onCtaClick,
  secondaryCtaText = 'Download Brochure',
  onSecondaryCtaClick,
  badge,
  showVisuals = true,
}) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #08182d 0%, #0c2647 52%, #071426 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: `radial-gradient(circle, ${alpha('#38bdf8', 0.18)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${alpha('#1e88e5', 0.12)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            {badge && (
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 2,
                  py: 0.75,
                  borderRadius: 50,
                  background: `linear-gradient(135deg, ${alpha('#38bdf8', 0.1)}, ${alpha('#60a5fa', 0.05)})`,
                  border: `1px solid ${alpha('#38bdf8', 0.2)}`,
                  mb: 3,
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 18, color: '#38bdf8' }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#38bdf8',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                  }}
                >
                  {badge}
                </Typography>
              </Box>
            )}

            <Typography
              variant="overline"
              sx={{
                color: '#38bdf8',
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
                mb: 1,
                display: 'block',
              }}
            >
              {subtitle}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${alpha('#38bdf8', 0.8)})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
                maxWidth: 600,
              }}
            >
              {description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={onCtaClick}
                sx={{
                  background: `linear-gradient(135deg, #38bdf8, #0284c7)`,
                  px: 4,
                  py: 1.75,
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: `0 8px 25px ${alpha('#38bdf8', 0.3)}`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 35px ${alpha('#38bdf8', 0.4)}`,
                  },
                }}
              >
                {ctaText}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={onSecondaryCtaClick}
                sx={{
                  borderColor: '#38bdf8',
                  color: '#38bdf8',
                  px: 4,
                  py: 1.75,
                  fontWeight: 700,
                  borderRadius: 2,
                  '&:hover': {
                    background: alpha('#38bdf8', 0.05),
                    borderColor: '#0284c7',
                  },
                }}
              >
                {secondaryCtaText}
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SmartToyIcon sx={{ color: '#38bdf8', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  AI Agents
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PsychologyIcon sx={{ color: '#1e88e5', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  LLMs & RAG
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <RocketLaunchIcon sx={{ color: '#38bdf8', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Hands-on Projects
                </Typography>
              </Box>
            </Box>
          </Grid>

          {showVisuals && (
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* AI Visual Element */}
                <Box
                  sx={{
                    width: { xs: 280, md: 350 },
                    height: { xs: 280, md: 350 },
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${alpha('#38bdf8', 0.1)}, ${alpha('#1e88e5', 0.08)})`,
                    border: `2px solid ${alpha('#38bdf8', 0.2)}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    animation: 'pulse 3s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)' },
                      '50%': { transform: 'scale(1.05)' },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 200, md: 250 },
                      height: { xs: 200, md: 250 },
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${alpha('#38bdf8', 0.15)}, ${alpha('#60a5fa', 0.1)})`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <SmartToyIcon sx={{ fontSize: { xs: 80, md: 100 }, color: '#38bdf8' }} />
                  </Box>
                </Box>

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${alpha('#1e88e5', 0.15)}, ${alpha('#64b5f6', 0.1)})`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    animation: 'float 4s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  }}
                >
                  <PsychologyIcon sx={{ fontSize: 30, color: '#1e88e5' }} />
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 0,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${alpha('#38bdf8', 0.15)}, ${alpha('#60a5fa', 0.1)})`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    animation: 'float 4s ease-in-out infinite 1s',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  }}
                >
                  <AutoAwesomeIcon sx={{ fontSize: 25, color: '#38bdf8' }} />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default AIHeroSection
