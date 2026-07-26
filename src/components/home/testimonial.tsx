import React, { FC, useRef, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled, alpha, useTheme } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import StarIcon from '@mui/icons-material/Star'
import SchoolIcon from '@mui/icons-material/School'
import VerifiedIcon from '@mui/icons-material/Verified'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { TestimonialItem } from '@/components/testimonial'
import { data } from './testimonial.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  const theme = useTheme()
  
  return (
    <IconButton
      sx={{
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.9)})`,
        backdropFilter: 'blur(20px)',
        color: 'text.primary',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        '&:hover': { 
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
          borderColor: theme.palette.primary.main,
          boxShadow: `0 8px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
          transform: 'scale(1.15) rotate(5deg)',
        },
        bottom: { xs: '-28px !important', md: '80px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '100px !important' : '30px !important',
        zIndex: 10,
        boxShadow: `0 8px 30px ${alpha(theme.palette.common.black, 0.3)}`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        width: 52,
        height: 52,
        '& svg': {
          fontSize: 26,
        },
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward /> : <IconArrowBack />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .slick-list': { 
    marginLeft: '-30px', 
    marginBottom: '32px',
    padding: '20px 0',
  },
  '& .slick-track': {
    display: 'flex',
    alignItems: 'stretch',
  },
  '& .slick-slide': {
    height: 'auto',
    '& > div': {
      height: '100%',
      padding: '0 15px',
    },
  },
  '& .slick-dots': {
    bottom: -40,
    '& li': {
      margin: '0 4px',
      '& button': {
        '&:before': {
          color: alpha(theme.palette.text.primary, 0.2),
          fontSize: 10,
          transition: 'all 0.3s ease',
        },
      },
      '&.slick-active button:before': {
        color: theme.palette.primary.main,
        fontSize: 14,
        textShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
      },
    },
  },
}))

const TestimonialCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.85)})`,
  backdropFilter: 'blur(30px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  boxShadow: `
    0 20px 60px ${alpha(theme.palette.common.black, 0.2)},
    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
  `,
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.06)}, transparent 70%)`,
    borderRadius: '50%',
    transition: 'all 0.6s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -80,
    left: -80,
    width: 160,
    height: 160,
    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)}, transparent 70%)`,
    borderRadius: '50%',
    transition: 'all 0.6s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.01)',
    borderColor: alpha(theme.palette.primary.main, 0.2),
    boxShadow: `
      0 40px 80px ${alpha(theme.palette.primary.main, 0.15)},
      inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}
    `,
    '&::before': {
      transform: 'scale(1.5)',
      opacity: 0.5,
    },
    '&::after': {
      transform: 'scale(1.3)',
      opacity: 0.5,
    },
  },
}))

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null)
  const theme = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    pauseOnHover: true,
    fade: false,
    dots: true,
    dotsClass: 'slick-dots',
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex)
    },
  }

  return (
    <Box
      id="testimonial"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(165deg, 
            ${alpha(theme.palette.background.default, 0.98)} 0%, 
            ${alpha(theme.palette.primary.dark, 0.05)} 25%, 
            ${alpha(theme.palette.secondary.dark, 0.03)} 50%, 
            ${alpha(theme.palette.primary.dark, 0.08)} 75%,
            ${alpha(theme.palette.common.black, 0.2)} 100%
          )
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '60%',
          height: '60%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'pulseGlow 10s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'pulseGlow 8s ease-in-out infinite reverse',
        },
        '@keyframes pulseGlow': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.2) translate(5%, 5%)' },
        },
      }}
    >
      {/* Decorative Gradient Border */}
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
        <Grid container spacing={6} alignItems="center">
          {/* Left Content - Testimonials */}
          <Grid item xs={12} md={6}>
            <Box>
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
                  mb: 4,
                  backdropFilter: 'blur(20px)',
                  animation: 'glowPulse 3s ease-in-out infinite',
                  '@keyframes glowPulse': {
                    '0%, 100%': {
                      boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                    },
                    '50%': {
                      boxShadow: `0 0 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                  },
                }}
              >
                <AutoAwesomeIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 700, letterSpacing: 0.5 }}>
                  Student Stories
                </Typography>
              </Box>

              {/* BIG HEADER - Redesigned */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h1"
  component="h2"
                  sx={{
                    fontSize: { xs: 3, sm: 3.8, md: 5.5 },
                    lineHeight: 1.1,
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    textShadow: `0 4px 40px ${alpha(theme.palette.common.black, 0.3)}`,
                    position: 'relative',
                  }}
                >
                  {/* Small "What Our" text */}
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      fontSize: { xs: 1.2, sm: 1.5, md: 2 },
                      fontWeight: 700,
                      color: alpha(theme.palette.text.primary, 0.5),
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      mb: 1,
                      fontFamily: 'monospace',
                    }}
                  >
                    What Our
                  </Box>

                  {/* Main Highlighted Text - "Students Say" with BIG style */}
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        backgroundSize: '300% 300%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                        animation: 'gradientShift 5s ease-in-out infinite',
                        '@keyframes gradientShift': {
                          '0%, 100%': { backgroundPosition: '0% 50%' },
                          '50%': { backgroundPosition: '100% 50%' },
                        },
                        position: 'relative',
                      }}
                    >
                      Students Say
                    </Typography>

                    {/* Decorative Underline with Glow */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        backgroundSize: '200% 100%',
                        borderRadius: 4,
                        filter: 'blur(4px)',
                        animation: 'underlineMove 3s ease-in-out infinite',
                        '@keyframes underlineMove': {
                          '0%, 100%': { backgroundPosition: '0% 50%' },
                          '50%': { backgroundPosition: '100% 50%' },
                        },
                      }}
                    />

                    {/* Secondary Glow Underline */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -4,
                        left: '10%',
                        right: '10%',
                        height: 2,
                        background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.3)}, transparent)`,
                        borderRadius: 4,
                        filter: 'blur(6px)',
                      }}
                    />
                  </Box>

                  {/* Decorative Elements - Sparkles */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: -20, md: -30 },
                      right: { xs: 10, md: 50 },
                      fontSize: { xs: 30, md: 50 },
                      opacity: 0.2,
                      animation: 'sparkle 3s ease-in-out infinite',
                      '@keyframes sparkle': {
                        '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: 0.2 },
                        '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: 0.4 },
                      },
                    }}
                  >
                    ✨
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 10, md: 20 },
                      left: { xs: 20, md: 50 },
                      fontSize: { xs: 20, md: 35 },
                      opacity: 0.15,
                      animation: 'sparkle 4s ease-in-out infinite 1s',
                    }}
                  >
                    ⭐
                  </Box>
                </Typography>
              </Box>

              {/* Testimonial Slider */}
              <StyledSlickContainer>
                <Slider ref={sliderRef} {...sliderConfig}>
                  {data.map((item, index) => (
                    <Box key={String(index)}>
                      <TestimonialCard>
                        {/* Decorative Quote Icon */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 20,
                            right: 24,
                            opacity: 0.15,
                          }}
                        >
                          <FormatQuoteIcon
                            sx={{
                              fontSize: 56,
                              color: theme.palette.primary.main,
                              transform: 'rotate(180deg)',
                            }}
                          />
                        </Box>

                        {/* Rating Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarIcon
                                key={star}
                                sx={{
                                  fontSize: 20,
                                  color: star <= (item.rating || 5) 
                                    ? '#FFB800' 
                                    : alpha(theme.palette.text.disabled, 0.2),
                                  filter: star <= (item.rating || 5) 
                                    ? `drop-shadow(0 0 8px ${alpha('#FFB800', 0.3)})`
                                    : 'none',
                                }}
                              />
                            ))}
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{
                              color: alpha(theme.palette.text.secondary, 0.6),
                              fontWeight: 500,
                            }}
                          >
                            {item.date || 'Recent'}
                          </Typography>
                        </Box>

                        {/* Testimonial Content */}
                        <Typography
                          sx={{
                            color: 'text.primary',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.8,
                            mb: 4,
                            flex: 1,
                            fontStyle: 'italic',
                            opacity: 0.9,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          "{item.content}"
                        </Typography>

                        {/* Author Info */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2.5,
                            mt: 'auto',
                            pt: 2,
                            borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          <Box
                            sx={{
                              position: 'relative',
                              width: 56,
                              height: 56,
                              borderRadius: '50%',
                              overflow: 'hidden',
                              border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                              flexShrink: 0,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.2)}`,
                            }}
                          >
                            {item.avatar ? (
                              <Image
                                src={item.avatar}
                                alt={item.name}
                                width={56}
                                height={56}
                                style={{ objectFit: 'cover' }}
                              />
                            ) : (
                              <SchoolIcon sx={{ color: 'white', fontSize: 30 }} />
                            )}
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: -2,
                                right: -2,
                                background: theme.palette.success.main,
                                borderRadius: '50%',
                                width: 20,
                                height: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: `2px solid ${theme.palette.background.paper}`,
                              }}
                            >
                              <VerifiedIcon sx={{ fontSize: 14, color: 'white' }} />
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                color: 'text.primary',
                                mb: 0.25,
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: alpha(theme.palette.text.secondary, 0.7),
                                display: 'block',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                              }}
                            >
                              {item.role || 'Student'}
                            </Typography>
                          </Box>
                        </Box>
                      </TestimonialCard>
                    </Box>
                  ))}
                </Slider>
              </StyledSlickContainer>
            </Box>
          </Grid>

          {/* Right Content - Premium Stats Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              {/* Main Image Container */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 400, md: 550 },
                  borderRadius: 5,
                  overflow: 'hidden',
                  boxShadow: `
                    0 40px 100px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent 50%, ${alpha(theme.palette.secondary.main, 0.05)})`,
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src="/images/home-testimonial.png"
                  alt="Student Testimonial"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  quality={97}
                  priority
                />
                
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: `linear-gradient(to top, ${alpha(theme.palette.background.default, 0.9)}, transparent)`,
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Premium Floating Card 1 - Achievement */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 40 },
                  right: { xs: 10, md: -30 },
                  zIndex: 2,
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(30px)',
                  borderRadius: 4,
                  p: 3,
                  minWidth: { xs: 150, md: 200 },
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  boxShadow: `
                    0 30px 80px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  animation: 'floatCard1 4s ease-in-out infinite',
                  '@keyframes floatCard1': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(2deg)' },
                  },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1.2,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                      boxShadow: `0 8px 30px ${alpha(theme.palette.success.main, 0.3)}`,
                    }}
                  >
                    <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.light})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                      }}
                    >
                      10K+
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.8rem' }}>
                      Happy Students
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Premium Floating Card 2 - Rating */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 20, md: 50 },
                  left: { xs: 10, md: -30 },
                  zIndex: 2,
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(30px)',
                  borderRadius: 4,
                  p: 3,
                  minWidth: { xs: 160, md: 200 },
                  border: `1px solid ${alpha(theme.palette.warning.main, 0.15)}`,
                  boxShadow: `
                    0 30px 80px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  animation: 'floatCard2 4.5s ease-in-out infinite 0.5s',
                  '@keyframes floatCard2': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-12px) rotate(-2deg)' },
                  },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: alpha(theme.palette.warning.main, 0.3),
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      p: 1.2,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
                      boxShadow: `0 8px 30px ${alpha(theme.palette.warning.main, 0.3)}`,
                    }}
                  >
                    <StarIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.light})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                      }}
                    >
                      4.9/5
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.8rem' }}>
                      Average Rating
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Premium Floating Card 3 - Success Rate */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 100, md: 120 },
                  right: { xs: 10, md: 20 },
                  zIndex: 2,
                  background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  backdropFilter: 'blur(30px)',
                  borderRadius: 4,
                  p: 2.5,
                  minWidth: { xs: 130, md: 160 },
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.15)}`,
                  boxShadow: `
                    0 30px 80px ${alpha(theme.palette.common.black, 0.4)},
                    inset 0 1px 0 ${alpha(theme.palette.common.white, 0.05)}
                  `,
                  animation: 'floatCard3 3.5s ease-in-out infinite 1s',
                  '@keyframes floatCard3': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-18px)' },
                  },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: alpha(theme.palette.secondary.main, 0.3),
                  },
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    95%+
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.75rem' }}>
                    Success Rate
                  </Typography>
                </Box>
              </Box>

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '15%',
                  left: '-10%',
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)}, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 0,
                  animation: 'pulseGlow 8s ease-in-out infinite',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '-5%',
                  width: 150,
                  height: 150,
                  background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)}, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 0,
                  animation: 'pulseGlow 10s ease-in-out infinite reverse',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonial