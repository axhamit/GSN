import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SchoolIcon from '@mui/icons-material/School'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import PeopleIcon from '@mui/icons-material/People'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { motion, AnimatePresence } from 'framer-motion'
import {
  sectionBadgeSx,
  sectionCardTitleSx,
  sectionCtaTitleSx,
  sectionHeadlineSx,
} from '@/config/theme/sectionTypography'

const PartnershipModels: FC = () => {
  const theme = useTheme()
  const [expandedSection, setExpandedSection] = useState<string | null>('academic')

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const academicFeatures = [
    {
      icon: <SchoolIcon />,
      title: 'Semester Programs',
      description: 'Credit-based employability modules integrated into the regular academic calendar.',
      details: ['8-week intensive modules', 'Industry-aligned curriculum', 'Hands-on projects']
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: 'CRT Modules',
      description: 'Dedicated Campus Recruitment Training spanning pre-final and final years.',
      details: ['Mock interviews', 'Resume building', 'Group discussions']
    },
    {
      icon: <PeopleIcon />,
      title: 'Faculty Development',
      description: 'Empowering educators with current corporate trends and methodologies.',
      details: ['Corporate training', 'Industry exposure', 'Skill upgradation']
    },
  ]

  const bootcampFeatures = [
    {
      icon: <RocketLaunchIcon />,
      title: 'Pre-Placement Bootcamps',
      description: '30-to-60 day rigorous training just before the placement season begins.',
      details: ['Intensive training', 'Real-world projects', 'Industry mentorship']
    },
    {
      icon: <EmojiEventsIcon />,
      title: 'Weekend Workshops',
      description: 'Focused skill-building sessions (e.g., Gen AI, Adv. Excel) over weekends.',
      details: ['Flexible schedule', 'Practical skills', 'Hands-on learning']
    },
    {
      icon: <BusinessCenterIcon />,
      title: 'Corporate Sessions',
      description: 'Guest lectures and industry interaction series.',
      details: ['Industry experts', 'Networking opportunities', 'Real-world insights']
    },
  ]

  return (
    <Box
      id="partnership-models"
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
            <BusinessCenterIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: 'text.primary', ...sectionBadgeSx }}>
              Partnership
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              ...sectionHeadlineSx,
              textShadow: `0 4px 40px ${alpha(theme.palette.common.black, 0.3)}`,
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
            College Partnership Models
          </Typography>
        </Box>

        {/* Toggle Section */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                onClick={() => toggleSection('academic')}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: expandedSection === 'academic' 
                    ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.primary.light, 0.05)})`
                    : alpha(theme.palette.background.paper, 0.4),
                  border: `1px solid ${expandedSection === 'academic' 
                    ? alpha(theme.palette.primary.main, 0.3)
                    : alpha(theme.palette.primary.main, 0.06)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 30px ${alpha(theme.palette.common.black, 0.15)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.15),
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 1,
                    borderRadius: 2,
                    mb: 1,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.light, 0.05)})`,
                    '& svg': {
                      fontSize: 28,
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <SchoolIcon />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    ...sectionCardTitleSx,
                    color: expandedSection === 'academic' ? theme.palette.primary.main : 'text.primary',
                  }}
                >
                  Academic Integration
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: alpha(theme.palette.text.secondary, 0.6),
                    display: 'block',
                    mt: 0.5,
                  }}
                >
                  Semester Programs & CRT
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                onClick={() => toggleSection('bootcamp')}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: expandedSection === 'bootcamp' 
                    ? `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.15)}, ${alpha(theme.palette.secondary.light, 0.05)})`
                    : alpha(theme.palette.background.paper, 0.4),
                  border: `1px solid ${expandedSection === 'bootcamp' 
                    ? alpha(theme.palette.secondary.main, 0.3)
                    : alpha(theme.palette.secondary.main, 0.06)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 30px ${alpha(theme.palette.common.black, 0.15)}`,
                    borderColor: alpha(theme.palette.secondary.main, 0.15),
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 1,
                    borderRadius: 2,
                    mb: 1,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.1)}, ${alpha(theme.palette.secondary.light, 0.05)})`,
                    '& svg': {
                      fontSize: 28,
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  <RocketLaunchIcon />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    ...sectionCardTitleSx,
                    color: expandedSection === 'bootcamp' ? theme.palette.secondary.main : 'text.primary',
                  }}
                >
                  Intensive Bootcamps
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: alpha(theme.palette.text.secondary, 0.6),
                    display: 'block',
                    mt: 0.5,
                  }}
                >
                  Pre-Placement & Workshops
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Content Sections with Animation */}
        <AnimatePresence mode="wait">
          {expandedSection === 'academic' && (
            <motion.div
              key="academic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Grid container spacing={3}>
                {academicFeatures.map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: { xs: 3, md: 3.5 },
                          borderRadius: 4,
                          height: '100%',
                          background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                          backdropFilter: 'blur(20px)',
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                          boxShadow: `
                            0 20px 60px ${alpha(theme.palette.common.black, 0.12)},
                            inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                          `,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px) scale(1.01)',
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                            boxShadow: `
                              0 30px 80px ${alpha(theme.palette.primary.main, 0.12)},
                              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                            `,
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 48,
                              height: 48,
                              borderRadius: 3,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                              '& svg': {
                                fontSize: 24,
                                color: 'white',
                              },
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              ...sectionCardTitleSx,
                              color: 'text.primary',
                            }}
                          >
                            {feature.title}
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha(theme.palette.text.secondary, 0.85),
                            lineHeight: 1.7,
                            fontSize: '0.9rem',
                            mb: 2,
                          }}
                        >
                          {feature.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          {feature.details.map((detail, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 0.8,
                                borderRadius: 2,
                                background: alpha(theme.palette.primary.main, 0.03),
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.05)}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: alpha(theme.palette.primary.main, 0.06),
                                  transform: 'translateX(4px)',
                                },
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  fontSize: 16,
                                  color: theme.palette.primary.main,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: alpha(theme.palette.text.primary, 0.8),
                                  fontSize: '0.85rem',
                                }}
                              >
                                {detail}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          )}

          {expandedSection === 'bootcamp' && (
            <motion.div
              key="bootcamp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Grid container spacing={3}>
                {bootcampFeatures.map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: { xs: 3, md: 3.5 },
                          borderRadius: 4,
                          height: '100%',
                          background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
                          backdropFilter: 'blur(20px)',
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
                          boxShadow: `
                            0 20px 60px ${alpha(theme.palette.common.black, 0.12)},
                            inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                          `,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px) scale(1.01)',
                            borderColor: alpha(theme.palette.secondary.main, 0.2),
                            boxShadow: `
                              0 30px 80px ${alpha(theme.palette.secondary.main, 0.12)},
                              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
                            `,
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 48,
                              height: 48,
                              borderRadius: 3,
                              background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                              boxShadow: `0 4px 20px ${alpha(theme.palette.secondary.main, 0.3)}`,
                              '& svg': {
                                fontSize: 24,
                                color: 'white',
                              },
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              ...sectionCardTitleSx,
                              color: 'text.primary',
                            }}
                          >
                            {feature.title}
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha(theme.palette.text.secondary, 0.85),
                            lineHeight: 1.7,
                            fontSize: '0.9rem',
                            mb: 2,
                          }}
                        >
                          {feature.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          {feature.details.map((detail, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 0.8,
                                borderRadius: 2,
                                background: alpha(theme.palette.secondary.main, 0.03),
                                border: `1px solid ${alpha(theme.palette.secondary.main, 0.05)}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: alpha(theme.palette.secondary.main, 0.06),
                                  transform: 'translateX(4px)',
                                },
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  fontSize: 16,
                                  color: theme.palette.secondary.main,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: alpha(theme.palette.text.primary, 0.8),
                                  fontSize: '0.85rem',
                                }}
                              >
                                {detail}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          )}
        </AnimatePresence>

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
            Ready to Partner with Us?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.7),
              mb: 2,
            }}
          >
            Transform your institution with our comprehensive partnership programs
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
            <PeopleIcon sx={{ fontSize: 20 }} />
            <Typography variant="button" sx={{ fontWeight: 700 }}>
              Partner Now
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

export default PartnershipModels