import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTheme, alpha } from '@mui/material/styles'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface AICTASectionProps {
  title?: string
  subtitle?: string
  benefits?: string[]
  primaryCTA?: string
  secondaryCTA?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const AICTASection: FC<AICTASectionProps> = ({
  title = 'Ready to Transform Your Career with AI?',
  subtitle = 'Join thousands of learners who have accelerated their careers with our comprehensive AI courses.',
  benefits = [
    'Industry-relevant curriculum',
    'Hands-on projects and labs',
    'Expert mentorship',
    'Career support and guidance',
  ],
  primaryCTA = 'Enroll Now',
  secondaryCTA = 'Download Brochure',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.95)} 0%, ${alpha(theme.palette.primary.main, 0.9)} 55%, ${alpha(theme.palette.primary.dark, 0.98)} 100%)`,
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
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.2)} 0%, transparent 70%)`,
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
          background: `radial-gradient(circle, ${alpha(theme.palette.ai.main, 0.16)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <RocketLaunchIcon
            sx={{
              fontSize: { xs: 48, md: 64 },
              color: theme.palette.primary.light,
              mb: 3,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.75rem' },
              background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${alpha(theme.palette.primary.light, 0.8)})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 2,
                p: 2,
                borderRadius: 2,
                background: alpha(theme.palette.background.paper, 0.6),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
              }}
            >
              <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24 }} />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={onPrimaryClick}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              px: 5,
              py: 2,
              fontWeight: 700,
              borderRadius: 2,
              boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: `0 12px 35px ${alpha(theme.palette.primary.main, 0.4)}`,
              },
            }}
          >
            {primaryCTA}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={onSecondaryClick}
            sx={{
              borderColor: theme.palette.primary.light,
              color: theme.palette.primary.light,
              px: 5,
              py: 2,
              fontWeight: 700,
              borderRadius: 2,
              background: alpha(theme.palette.background.paper, 0.8),
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: alpha(theme.palette.primary.light, 0.05),
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            {secondaryCTA}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default AICTASection
