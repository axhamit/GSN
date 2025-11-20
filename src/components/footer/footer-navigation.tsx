import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

// ---------------- UPDATED COURSE MENU ----------------
const courseMenu: Array<Navigation> = [
  { label: 'PCMB – 11th & 12th', path: '#' },
  { label: '10th Board Preparation', path: '#' },
  { label: 'JEE Coaching', path: '#' },
  { label: 'NEET Coaching', path: '#' },
  { label: 'KCET Coaching', path: '#' },
  { label: 'Online + Offline Classes', path: '#' },
]

// Use header navigations
const pageMenu = headerNavigations

// ---------------- UPDATED ABOUT MENU ----------------
const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Admissions', path: '#' },
  { label: 'Results & Toppers', path: '#' },
  { label: 'Privacy Policy', path: '#' },
  { label: 'Terms & Conditions', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Course Section */}
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Courses" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path="#" />
        ))}
      </Grid>

      {/* Menu Section */}
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>

      {/* About Section */}
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
