import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import SchoolIcon from '@mui/icons-material/School'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PeopleIcon from '@mui/icons-material/People'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'framer-motion'

const AvishkarCareer: FC = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)

  const roadmap = [
    {
      step: 'Assess',
      icon: <PsychologyIcon />,
      title: 'Discover Your Potential',
      description: 'Identify your strengths, skills gaps, and career aspirations through comprehensive assessment.',
      color: 'primary'
    },
    {
      step: 'Build',
      icon: <WorkspacePremiumIcon />,
      title: 'Build Your Profile',
      description: 'Create a powerful professional profile with resume building, LinkedIn optimization, and personal branding.',
      color: 'secondary'
    },
    {
      step: 'Learn',
      icon: <SchoolIcon />,
      title: 'Learn & Practice',
      description: 'Master in-demand skills through hands-on training, real-world projects, and industry-aligned curriculum.',
      color: 'warning'
    },
    {
      step: 'Mentor',
      icon: <PeopleIcon />,
      title: 'Get Mentored',
      description: 'Receive personalized guidance from industry experts who help you navigate your career path.',
      color: 'success'
    },
    {
      step: 'Launch',
      icon: <RocketLaunchIcon />,
      title: 'Launch Your Career',
      description: 'Step into the corporate world with confidence, backed by placement support and interview preparation.',
      color: 'primary'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % roadmap.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: '95%', label: 'Placement Rate' },
    { value: '50+', label: 'Corporate Partners' },
    { value: '10K+', label: 'Students Transformed' },
  ]

  return (
    <Box
      id="avishkar-career"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.06)} 20%, 
            ${alpha(theme.palette.secondary.dark, 0.03)} 40%, 
            ${alpha(theme.palette.primary.dark, 0.08)} 60%,
            ${alpha(theme.palette.common.black, 0.2)} 100%
          )
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: '60%',
          height: '60%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '50%',
          height: '50%',
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1,
                borderRadius: 50,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.12)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                mb: 3,
                backdropFilter: 'blur(20px)',
              }}
            >
              <AutoAwesomeIcon sx={{ color: theme.palette.primary.main, fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 700, letterSpacing: 0.5 }}>
                Career Transformation Program
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 2.8, sm: 3.5, md: 4.5 },
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'block',
                  fontSize: { xs: 1, sm: 1.2, md: 1.6 },
                  fontWeight: 700,
                  color: alpha(theme.palette.text.primary, 0.4),
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  mb: 1,
                  fontFamily: 'monospace',
                }}
              >
                Avishkar
              </Box>
              <Box
                component="span"
                sx={{
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
                Your Career
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                fontWeight: 600,
                color: alpha(theme.palette.text.primary, 0.5),
                letterSpacing: 0.5,
                fontStyle: 'italic',
                fontFamily: 'Georgia, serif',
                mb: 3,
              }}
            >
              with <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>GSN Foundation</Box>
            </Typography>
          </motion.div>
        </Box>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(3, 1fr)' },
              gap: 2,
              mb: 6,
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 3,
                    background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.6)}, ${alpha(theme.palette.background.default, 0.4)})`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 1.8, sm: 2.2, md: 2.8 },
                      fontWeight: 900,
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
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
                    variant="caption"
                    sx={{
                      color: alpha(theme.palette.text.secondary, 0.6),
                      fontWeight: 500,
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Roadmap Title */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: 'text.primary',
              mb: 1,
            }}
          >
            Your Career <Box component="span" sx={{ color: theme.palette.primary.main }}>Transformation</Box> Roadmap
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.text.secondary, 0.6),
              fontSize: '0.95rem',
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            5 simple steps to launch your dream career
          </Typography>
        </Box>

        {/* Roadmap Steps - Horizontal Scroll */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            py: 3,
            px: 1,
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ flex: '0 0 auto', width: { xs: '80%', sm: '45%', md: '30%' } }}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  minWidth: { xs: 250, md: 280 },
                  height: '100%',
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette[item.color as keyof typeof theme.palette].main, 0.08)}`,
                  boxShadow: `0 15px 50px ${alpha(theme.palette.common.black, 0.08)}`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -60,
                    right: -60,
                    width: 120,
                    height: 120,
                    background: `radial-gradient(circle, ${alpha(theme.palette[item.color as keyof typeof theme.palette].main, 0.04)}, transparent 70%)`,
                    borderRadius: '50%',
                    transition: 'all 0.6s ease',
                  },
                  '&:hover': {
                    borderColor: alpha(theme.palette[item.color as keyof typeof theme.palette].main, 0.2),
                    boxShadow: `0 25px 70px ${alpha(theme.palette[item.color as keyof typeof theme.palette].main, 0.1)}`,
                    '&::before': { transform: 'scale(1.8)', opacity: 1 },
                  },
                }}
              >
                {/* Step Number */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette[item.color as keyof typeof theme.palette].main}, ${theme.palette[item.color as keyof typeof theme.palette].dark})`,
                      boxShadow: `0 4px 20px ${alpha(theme.palette[item.color as keyof typeof theme.palette].main, 0.3)}`,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: alpha(theme.palette[item.color as keyof typeof theme.palette].main, 0.08),
                      '& svg': {
                        fontSize: 20,
                        color: theme.palette[item.color as keyof typeof theme.palette].main,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>

                {/* Step Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    mb: 1,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette[item.color as keyof typeof theme.palette].main,
                      fontWeight: 700,
                      mr: 0.5,
                    }}
                  >
                    {item.step}
                  </Box>
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: alpha(theme.palette.text.secondary, 0.8),
                    lineHeight: 1.7,
                    fontSize: '0.9rem',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              textAlign: 'center',
              background: `linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.06)}, ${alpha(theme.palette.secondary.main, 0.03)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 1,
                fontSize: { xs: '1.1rem', md: '1.4rem' },
              }}
            >
              Ready to Transform Your Career with{' '}
              <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                GSN Foundation
              </Box>
              ?
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: alpha(theme.palette.text.secondary, 0.7),
                mb: 2,
                maxWidth: 450,
                mx: 'auto',
              }}
            >
              Start your Avishkar journey today and become corporate-ready
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
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
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
                  },
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                <Typography variant="button" sx={{ fontWeight: 700 }}>
                  Start Your Journey
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </motion.div>
          </Box>
        </motion.div>

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

export default AvishkarCareer