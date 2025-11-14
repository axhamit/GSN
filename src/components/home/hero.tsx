import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students Trained',
    value: '10K+',
  },
  {
    label: 'Courses Offered',
    value: '15+',
  },
  {
    label: 'Expert Faculty',
    value: '50+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 28, md: 36 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 6, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ flexDirection: { xs: 'column', md: 'unset' }, alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    letterSpacing: 1.2,
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    Ace{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 20, md: 25 },
                        left: 0,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 120, md: 160 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  Your{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      color: 'text.primary',
                      display: 'inline-block',
                    }}
                  >
                    Exams
                  </Typography>{' '}
                  with Expert Guidance
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  sx={{ 
                    color: 'text.secondary', 
                    lineHeight: 1.6, 
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 3 
                  }}
                >
                  Comprehensive coaching for <strong>PCMB 11th & 12th</strong>, competitive exams like{' '}
                  <strong>KCET, JEE, NEET</strong>, and <strong>10th Standard Board</strong> preparation. 
                  Choose between online and offline classes with personalized study plans.
                </Typography>
              
                {/* Course Highlights */}
                <Grid container spacing={1.5} sx={{ mb: 3 }}>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ 
                      textAlign: 'center', 
                      p: 1.5, 
                      backgroundColor: 'primary.main', 
                      borderRadius: 2, 
                      color: 'white',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' }
                    }}>
                      <Typography variant="subtitle2" fontWeight="bold">PCMB 11th</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ 
                      textAlign: 'center', 
                      p: 1.5, 
                      backgroundColor: 'secondary.main', 
                      borderRadius: 2, 
                      color: 'white',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' }
                    }}>
                      <Typography variant="subtitle2" fontWeight="bold">PCMB 12th</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ 
                      textAlign: 'center', 
                      p: 1.5, 
                      backgroundColor: 'error.main', 
                      borderRadius: 2, 
                      color: 'white',
                      fontSize: { xs: '0.7rem', sm: '0.8rem' }
                    }}>
                      <Typography variant="subtitle2" fontWeight="bold">KCET/JEE/NEET</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ 
                      textAlign: 'center', 
                      p: 1.5, 
                      backgroundColor: 'warning.main', 
                      borderRadius: 2, 
                      color: 'white',
                      fontSize: { xs: '0.75rem', sm: '0.85rem' }
                    }}>
                      <Typography variant="subtitle2" fontWeight="bold">10th Board</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 2,
                '& button': { 
                  width: { xs: '100%', sm: 'auto' } 
                } 
              }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Explore Courses
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                    Watch Demo
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            {/* Success Badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: -20, md: 40 },
                left: { xs: 20, md: -80 },
                boxShadow: 3,
                borderRadius: 3,
                px: 2,
                py: 1.5,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                width: { xs: 280, md: 300 },
                border: '2px solid',
                borderColor: 'primary.main'
              }}
            >
              <Box
                sx={{
                  boxShadow: 2,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  backgroundColor: 'primary.main',
                  flexShrink: 0,
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={32} height={32} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'primary.main', fontSize: '1rem', fontWeight: 700, mb: 0.5 }}
                >
                  Top Results
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  95%+ success rate in board & competitive exams
                </Typography>
              </Box>
            </Box>

            {/* Online/Offline Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 40, md: 80 },
                right: { xs: 20, md: -40 },
                boxShadow: 3,
                borderRadius: 3,
                px: 2,
                py: 1.5,
                zIndex: 1,
                backgroundColor: 'secondary.main',
                display: 'flex',
                alignItems: 'center',
                width: { xs: 180, md: 200 },
              }}
            >
              <Box
                sx={{
                  boxShadow: 2,
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  backgroundColor: 'white',
                  flexShrink: 0,
                }}
              >
                <PlayArrowIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, mb: 0.2 }}
                >
                  Online & Offline
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', lineHeight: 1.2, fontSize: '0.75rem' }}>
                  Flexible learning
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              lineHeight: 0, 
              borderRadius: 4, 
              overflow: 'hidden', 
              boxShadow: 4,
              position: 'relative',
              zIndex: 0 
            }}>
              <Image 
                src="/images/home-hero.jpg" 
                width={600} 
                height={500} 
                alt="Students learning" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover'
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>

        {/* Experience Section */}
        <Box sx={{ 
          boxShadow: 2, 
          py: 4, 
          px: { xs: 3, md: 7 }, 
          borderRadius: 4, 
          mt: 6, 
          backgroundColor: 'primary.50',
          border: '1px solid',
          borderColor: 'primary.100'
        }}>
          <Grid container spacing={3}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero