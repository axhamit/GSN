import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import SchoolIcon from '@mui/icons-material/School'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PeopleIcon from '@mui/icons-material/People'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { motion } from 'framer-motion'
import EnrollmentForm from '@/components/form/EnrollmentForm'

interface RoadmapStep {
  step: string
  icon: React.ReactElement
  title: string
  description: string
}

const AvishkarCareer: FC = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const roadmap: RoadmapStep[] = [
    {
      step: 'Assess',
      icon: <PsychologyIcon />,
      title: 'Discover Your Potential',
      description: 'Identify your strengths, skills gaps, and career aspirations through comprehensive assessment.',
    },
    {
      step: 'Build',
      icon: <WorkspacePremiumIcon />,
      title: 'Build Your Profile',
      description: 'Create a powerful professional profile with resume building, LinkedIn optimization, and personal branding.',
    },
    {
      step: 'Learn',
      icon: <SchoolIcon />,
      title: 'Learn & Practice',
      description: 'Master in-demand skills through hands-on training, real-world projects, and industry-aligned curriculum.',
    },
    {
      step: 'Mentor',
      icon: <PeopleIcon />,
      title: 'Get Mentored',
      description: 'Receive personalized guidance from industry experts who help you navigate your career path.',
    },
    {
      step: 'Launch',
      icon: <RocketLaunchIcon />,
      title: 'Launch Your Career',
      description: 'Step into the corporate world with confidence, backed by placement support and interview preparation.',
    }
  ]

  const stats = [
    { value: '95%', label: 'Placement Rate' },
    { value: '50+', label: 'Corporate Partners' },
    { value: '10K+', label: 'Students Transformed' },
  ]

  return (
    <Box
      id="avishkar-career"
      sx={{
        py: { xs: 7, md: 9 },
        backgroundColor: '#f6f8fa',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.75,
                py: 0.85,
                borderRadius: 50,
                color: 'primary.main',
                backgroundColor: alpha(theme.palette.primary.main, 0.07),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                mb: 2.5,
              }}
            >
              <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.08em' }}>
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
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.055em',
                color: 'text.primary',
                mb: 1.5,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  mr: { xs: 0.75, sm: 1.25 },
                }}
              >
                Avishkar
              </Box>
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  display: 'inline-block',
                }}
              >
                Your Career
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 500,
                color: 'text.secondary',
                mb: 0,
              }}
            >
              with{' '}
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 700 }}>
                GSN Foundation
              </Box>
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
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
              gap: { xs: 1.5, md: 2 },
              mb: { xs: 4, md: 5 },
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
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                      fontWeight: 800,
                      color: 'primary.main',
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      fontSize: '0.8rem',
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
        <Box sx={{ mb: 2.5, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.35rem', md: '1.75rem' },
              color: '#172b3c',
              mb: 1,
              textAlign: 'center',
            }}
          >
            Your Career <Box component="span" sx={{ color: theme.palette.primary.main }}>Transformation</Box> Roadmap
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            5 simple steps to launch your dream career
          </Typography>
        </Box>

        {/* Roadmap Steps */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 2, md: 2.5 },
            alignItems: 'stretch',
          }}
        >
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setActiveStep(index)}
              style={{ height: '100%', minWidth: 0 }}
            >
              <Box
                sx={{
                  height: '100%',
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 4,
                  backgroundColor: '#fff',
                  border: `1px solid ${alpha(theme.palette.primary.main, index === activeStep ? 0.3 : 0.1)}`,
                  boxShadow: index === activeStep
                    ? `0 12px 30px ${alpha(theme.palette.primary.main, 0.1)}`
                    : '0 4px 18px rgb(23 43 60 / 5%)',
                  transition: 'border-color 180ms ease, box-shadow 180ms ease',
                  '&:hover': {
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    boxShadow: `0 12px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
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
                      backgroundColor: 'primary.main',
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
                      backgroundColor: '#eef5fa',
                      '& svg': {
                        fontSize: 20,
                        color: 'primary.main',
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
                    textAlign: 'center',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: 'primary.main',
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
              mt: { xs: 4, md: 5 },
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              textAlign: 'center',
              backgroundColor: '#fff',
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
                textAlign: 'center',
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
                color: 'text.secondary',
                mb: 2,
                maxWidth: 450,
                mx: 'auto',
                textAlign: 'center',
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
                component="button"
                type="button"
                onClick={() => setEnquiryOpen(true)}
                aria-label="Start your Avishkar journey"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 3,
                  py: 1.2,
                  border: 'none',
                  borderRadius: 50,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: 'primary.dark',
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

      </Container>

      <EnrollmentForm
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        courseName="Avishkar Your Career Program"
        source="AvishkarCareer"
      />
    </Box>
  )
}

export default AvishkarCareer