import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import { StyledButton } from '../styled-button'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const HomeNewsLetter: FC = () => {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <Box
      id="newsletter"
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
        <Box
          sx={{
            position: 'relative',
            borderRadius: 6,
            overflow: 'hidden',
            background: `
              linear-gradient(145deg, 
                ${alpha(theme.palette.primary.dark, 0.3)} 0%, 
                ${alpha(theme.palette.secondary.dark, 0.2)} 50%,
                ${alpha(theme.palette.primary.dark, 0.3)} 100%
              )
            `,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
            boxShadow: `
              0 30px 80px ${alpha(theme.palette.common.black, 0.3)},
              inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
            `,
            backdropFilter: 'blur(20px)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)}, transparent 70%)`,
              borderRadius: '50%',
              pointerEvents: 'none',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -150,
              left: -150,
              width: 400,
              height: 400,
              background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.03)}, transparent 70%)`,
              borderRadius: '50%',
              pointerEvents: 'none',
            },
          }}
        >
          <Box
            sx={{
              py: { xs: 6, md: 10 },
              px: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
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
              <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
              <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 700, letterSpacing: 0.5 }}>
                Stay Updated
              </Typography>
            </Box>

            {/* BIG HEADER */}
          <Box sx={{ mb: 4, maxWidth: 1100, mx: "auto" }}>
  <Typography
    variant="h1"
  component="h2"
    sx={{
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: "-0.04em",
      textAlign: "center",
      fontSize: {
        xs: "2rem",
        sm: "3.25rem",
        md: "4.5rem",
        lg: "4rem",
      },
      textShadow: `0 4px 40px ${alpha(theme.palette.common.black, 0.3)}`,
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
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Subscribe to
    </Box>

    <Box
      component="span"
      sx={{
        display: { xs: "block", sm: "inline" },
        ml: { sm: 1 },
        color: "text.primary",
      }}
    >
      Our Newsletter
    </Box>
  </Typography>
</Box>

            <Typography
              sx={{
                maxWidth: 600,
                mx: 'auto',
                color: alpha(theme.palette.text.secondary, 0.8),
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Subscribe to our newsletter to get information about our courses, 
              upcoming batches, and exclusive offers.
            </Typography>

            {/* Subscription Form */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: 2,
                maxWidth: 600,
                mx: 'auto',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  width: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  background: alpha(theme.palette.background.paper, 0.6),
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  '&:focus-within': {
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                    background: alpha(theme.palette.background.paper, 0.8),
                  },
                }}
              >
                <Box
                  sx={{
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': {
                      fontSize: 22,
                      color: alpha(theme.palette.text.secondary, 0.5),
                    },
                  }}
                >
                  <EmailIcon />
                </Box>
                <InputBase
                  sx={{
                    flex: 1,
                    height: 56,
                    px: 0,
                    pr: 2,
                    color: 'text.primary',
                    '& input::placeholder': {
                      color: alpha(theme.palette.text.secondary, 0.5),
                      fontSize: '0.95rem',
                    },
                  }}
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                />
                {email && (
                  <Box
                    sx={{
                      px: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': {
                        fontSize: 18,
                        color: theme.palette.success.main,
                      },
                    }}
                  >
                    <CheckCircleIcon />
                  </Box>
                )}
              </Box>

              <StyledButton
                disableHoverEffect={false}
                size="large"
                onClick={handleSubscribe}
                sx={{
                  minWidth: { xs: '100%', sm: 160 },
                  height: 56,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
                  },
                  '& svg': {
                    ml: 1,
                  },
                }}
              >
                Subscribe
                <SendIcon sx={{ fontSize: 18 }} />
              </StyledButton>
            </Box>

            {/* Success Message */}
            {subscribed && (
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: 3,
                  background: alpha(theme.palette.success.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  animation: 'fadeInUp 0.5s ease',
                  '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <CheckCircleIcon sx={{ color: theme.palette.success.main, fontSize: 24 }} />
                <Typography sx={{ color: theme.palette.success.main, fontWeight: 600 }}>
                  Thank you! You've been subscribed successfully.
                </Typography>
              </Box>
            )}

            {/* Trust Indicators */}
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 2, sm: 4 },
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'No Spam', icon: <AutoAwesomeIcon /> },
                { label: 'Weekly Updates', icon: <AutoAwesomeIcon /> },
                { label: 'Unsubscribe Anytime', icon: <AutoAwesomeIcon /> },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: alpha(theme.palette.text.secondary, 0.6),
                  }}
                >
                  <Box
                    sx={{
                      p: 0.5,
                      borderRadius: '50%',
                      background: alpha(theme.palette.primary.main, 0.1),
                      display: 'flex',
                      '& svg': {
                        fontSize: 14,
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="caption" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter