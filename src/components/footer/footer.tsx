import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import QrCodeIcon from '@mui/icons-material/QrCode'
import PersonIcon from '@mui/icons-material/Person'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        background: `
          linear-gradient(165deg, 
            #0a0a0a 0%, 
            ${alpha(theme.palette.primary.dark, 0.15)} 30%, 
            #0a0a0a 60%,
            ${alpha(theme.palette.primary.dark, 0.05)} 100%
          )
        `,
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '40%',
          height: '40%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '30%',
          height: '30%',
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
          height: 2,
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
        <Grid container spacing={4}>
          {/* Left Section - Brand & Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ pr: { md: 4 } }}>
              {/* Logo */}
              <Typography
                variant="h1"
  component="h2"
                variant="h4"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                GSN Foundation
              </Typography>

              {/* Tagline */}
              <Typography
                variant="subtitle2"
                sx={{
                  color: alpha(theme.palette.common.white, 0.5),
                  fontFamily: 'monospace',
                  letterSpacing: 0.5,
                  mb: 3,
                  textTransform: 'uppercase',
                }}
              >
                Bridging the Gap Between Campus and Corporate
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: '0.9rem',
                }}
              >
                GSN Foundation provides expert coaching for PCMB 11th & 12th, competitive exams like JEE, NEET, KCET,
                and 10th Standard Board preparation. Learn through both online and offline classes with personalized
                study plans.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <EmailIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha(theme.palette.common.white, 0.8),
                      fontSize: '0.85rem',
                      '&:hover': { color: theme.palette.primary.main },
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    contact@gsnfoundation.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha(theme.palette.common.white, 0.8),
                      fontSize: '0.85rem',
                    }}
                  >
                    www.gsnfoundation.com
                  </Typography>
                </Box>
              </Box>

              {/* Social Links */}
              <FooterSocialLinks />
            </Box>
          </Grid>

          {/* Middle Section - Navigation */}
          <Grid item xs={12} md={4}>
            <FooterNavigation />
          </Grid>

          {/* Right Section - Contact Persons & QR */}
          <Grid item xs={12} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  mb: 2,
                  fontSize: '1rem',
                  letterSpacing: 0.5,
                }}
              >
                Contact Persons
              </Typography>

              {/* Vijay Kumar Nandapur */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  mb: 2,
                  background: alpha(theme.palette.primary.main, 0.06),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.1),
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <PersonIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    Vijay Kumar Nandapur
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pl: 0.5 }}>
                  <PhoneIcon sx={{ fontSize: 16, color: alpha(theme.palette.common.white, 0.4) }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha(theme.palette.common.white, 0.8),
                      fontSize: '0.85rem',
                      '&:hover': { color: theme.palette.primary.main },
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    +91 8217591455
                  </Typography>
                </Box>
              </Box>

              {/* Srikanth Patil */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  mb: 3,
                  background: alpha(theme.palette.secondary.main, 0.06),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: alpha(theme.palette.secondary.main, 0.1),
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <PersonIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    Srikanth Patil
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pl: 0.5 }}>
                  <PhoneIcon sx={{ fontSize: 16, color: alpha(theme.palette.common.white, 0.4) }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha(theme.palette.common.white, 0.8),
                      fontSize: '0.85rem',
                      '&:hover': { color: theme.palette.secondary.main },
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    +91 9480287005
                  </Typography>
                </Box>
              </Box>

              {/* QR Code Section */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  textAlign: 'center',
                  background: alpha(theme.palette.common.white, 0.03),
                  border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: alpha(theme.palette.common.white, 0.06),
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: 3,
                    background: 'white',
                    mb: 1,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: -2,
                      borderRadius: 4,
                      padding: 2,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    },
                  }}
                >
                  <QrCodeIcon
                    sx={{
                      fontSize: 50,
                      color: '#000',
                    }}
                  />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: alpha(theme.palette.common.white, 0.6),
                    display: 'block',
                    fontSize: '0.7rem',
                    letterSpacing: 0.5,
                  }}
                >
                  Scan to connect
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: alpha(theme.palette.common.white, 0.4),
              fontSize: '0.75rem',
            }}
          >
            © {new Date().getFullYear()} GSN Foundation. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              variant="caption"
              sx={{
                color: alpha(theme.palette.common.white, 0.3),
                fontSize: '0.7rem',
                cursor: 'pointer',
                '&:hover': { color: theme.palette.primary.main },
                transition: 'color 0.3s ease',
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: alpha(theme.palette.common.white, 0.3),
                fontSize: '0.7rem',
                cursor: 'pointer',
                '&:hover': { color: theme.palette.primary.main },
                transition: 'color 0.3s ease',
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer