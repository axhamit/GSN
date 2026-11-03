import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'

const HomeHero: FC = () => (
  <Box
    id="hero"
    component="section"
    sx={{
      py: { xs: 7, md: 9 },
      backgroundColor: '#fff',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 560, mx: { xs: 'auto', md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              component="p"
              sx={{
                mb: 2,
                color: 'primary.main',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              GSN Foundation
            </Typography>
            <Typography
              component="h1"
              sx={{
                mb: 2.5,
                color: '#172b3c',
                fontSize: { xs: '2.7rem', sm: '3.5rem', md: '3.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.045em',
                lineHeight: 1.08,
              }}
            >
              Learn with clarity.
              <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
                Grow with confidence.
              </Box>
            </Typography>
            <Typography
              sx={{
                maxWidth: 500,
                mx: { xs: 'auto', md: 0 },
                mb: 3.5,
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
            >
              Master core technical and non-technical skills with industry experts. Upgrade your expertise, bridge the gap, and advance your career.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <ScrollLink to="premium-courses" smooth duration={350} offset={-72}>
                <Button variant="contained" size="large" sx={{ minWidth: 168 }}>
                  Explore courses
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth duration={350} offset={-72}>
                <Button variant="outlined" size="large" sx={{ minWidth: 168 }}>
                  About GSN
                </Button>
              </ScrollLink>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2.5 }}
              sx={{
                mt: 4,
                color: 'text.secondary',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              <Typography component="span" variant="body2">Experienced educators</Typography>
              <Typography component="span" variant="body2">Personalised guidance</Typography>
              <Typography component="span" variant="body2">Online and offline learning</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: { xs: '4 / 3', md: '5 / 4' },
              overflow: 'hidden',
              borderRadius: { xs: 3, md: 4 },
              backgroundColor: '#eaf0f4',
            }}
          >
            <Image
              src="/images/3Hero.png"
              alt="Students learning together"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default HomeHero
