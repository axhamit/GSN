import React, { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { Logo } from '@/components/logo'

const linkGroups = [
  {
    title: 'Courses',
    links: [
      { label: 'Advanced Gen AI and Agentic AI', href: '/courses/advanced-agentic-generative-ai' },
      { label: 'Applied AI Master Certification', href: '/courses/applied-ai-master-certification' },
 { label: 'career launch Program', href: '/courses/career-launch-academy' },
      { label: 'Class 10', href: '/courses/10th-standard' },
      { label: 'Class 12', href: '/courses/12th-standard' },
      { label: 'NEET preparation', href: '/courses/neet' },
      { label: 'JEE preparation', href: '/courses/jee' },
      
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'All courses', href: '/#premium-courses' },
      { label: 'Learning paths', href: '/#learning-paths' },
      { label: 'About GSN', href: '/#about' },
      { label: 'Student stories', href: '/#student-stories' },
    ],
  },
]

const Footer: FC = () => (
  <Box
    component="footer"
    id="contact"
    sx={{
      scrollMarginTop: 80,
      color: '#e8eef3',
      backgroundColor: '#142b3d',
    }}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        sx={{ py: { xs: 6, md: 8 } }}
      >
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 1.5 }}>
            <Logo variant="secondary" />
          </Box>
          <Typography
            sx={{
              maxWidth: 380,
              color: 'rgba(232, 238, 243, 0.72)',
              fontSize: '0.92rem',
              lineHeight: 1.75,
            }}
          >
            Expert-led learning in Artificial Intelligence, Generative AI, Agentic AI, and advanced technology skills to accelerate careers and drive innovation.
          </Typography>
        </Grid>

        {linkGroups.map((group) => (
          <Grid item xs={6} sm={4} md={2} key={group.title}>
            <Typography
              component="h2"
              sx={{
                mb: 2,
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 700,
              }}
            >
              {group.title}
            </Typography>
            <Box component="ul" sx={{ display: 'grid', gap: 1.25, m: 0, p: 0, listStyle: 'none' }}>
              {group.links.map((item) => (
                <Box component="li" key={item.label}>
                  <Box
                    component={Link}
                    href={item.href}
                    sx={{
                      color: 'rgba(232, 238, 243, 0.72)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 160ms ease',
                      '&:hover': { color: '#fff' },
                      '&:focus-visible': { outlineColor: '#fff' },
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}

        <Grid item xs={12} sm={8} md={3}>
          <Typography
            component="h2"
            sx={{ mb: 2, color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}
          >
            Get in touch
          </Typography>
          <Box sx={{ display: 'grid', gap: 1.5 }}>
            <Box
              component="a"
              href="mailto:contact@gsnfoundation.com"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                color: 'rgba(232, 238, 243, 0.78)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: 18 }} />
              contact@gsnfoundation.com
            </Box>
            <Box
              component="a"
              href="tel:+918217735799"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                color: 'rgba(232, 238, 243, 0.78)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              <PhoneOutlinedIcon sx={{ fontSize: 18 }} />
              +91 8217735799
            </Box>
            <Box
              component="a"
              href="tel:+919480287005"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                color: 'rgba(232, 238, 243, 0.78)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              <PhoneOutlinedIcon sx={{ fontSize: 18 }} />
              +91 94802 87005
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1.5,
          py: 2.5,
          borderTop: '1px solid rgba(232, 238, 243, 0.14)',
        }}
      >
        <Typography sx={{ color: 'rgba(232, 238, 243, 0.62)', fontSize: '0.78rem' }}>
          © {new Date().getFullYear()} GSN Foundation. All rights reserved.
        </Typography>
        <Typography
          component={Link}
          href="https://www.gsnfoundation.com"
          sx={{
            color: 'rgba(232, 238, 243, 0.62)',
            fontSize: '0.78rem',
            textDecoration: 'none',
            '&:hover': { color: '#fff' },
          }}
        >
          gsnfoundation.com
        </Typography>
      </Box>
    </Container>
  </Box>
)

export default Footer
