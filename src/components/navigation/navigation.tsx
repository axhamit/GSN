import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/router'
import { navigations } from './navigation.data'

interface CourseNavigationItem {
  label: string
  detail: string
  path: string
  badge?: string
}

const featuredCourses: CourseNavigationItem[] = [
  { label: 'Advanced Agentic AI', detail: 'LLMs, RAG, AI Agents', path: '/courses/advanced-agentic-generative-ai', badge: 'Featured' },
  { label: 'Applied AI Master', detail: 'Machine learning, deep learning, Python', path: '/courses/applied-ai-master-certification', badge: 'Featured' },
  { label: 'Career Launch Program', detail: 'Career readiness and employability training', path: '/courses/career-launch-academy', badge: 'Featured' },
]

const otherCourses: CourseNavigationItem[] = [
  { label: '11th Standard PCMB', detail: 'Physics, Chemistry, Maths, Biology', path: '/courses/11th-standard' },
  { label: '12th Standard PCMB', detail: 'Advanced PCMB preparation', path: '/courses/12th-standard' },
  { label: 'JEE Mains & Advanced', detail: 'Engineering entrance exam preparation', path: '/courses/jee' },
  { label: 'NEET UG', detail: 'Medical entrance exam preparation', path: '/courses/neet' },
  { label: 'KCET', detail: 'Karnataka CET preparation', path: '/courses/kcet' },
  { label: '10th Standard Board', detail: 'Board exam preparation', path: '/courses/10th-standard' },
]

interface NavigationItemProps {
  destination: string
  label: string
  onNavigate?: () => void
}

const NavigationItem: FC<NavigationItemProps> = ({ destination, label, onNavigate }) => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box
      component={ScrollLink}
      to={destination}
      spy
      smooth
      duration={350}
      onClick={() => {
        if (router.pathname !== '/' && destination !== '/') {
          void router.push(`/#${destination}`)
        }
        onNavigate?.()
      }}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: { xs: 1.5, md: 1.25 },
        py: 1,
        borderRadius: 'var(--radius-button)',
        color: 'text.primary',
        fontWeight: 600,
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': { color: 'primary.main', bgcolor: alpha(theme.palette.primary.main, 0.06) },
        '&:focus-visible': { outline: `3px solid ${theme.palette.secondary.main}`, outlineOffset: 2 },
      }}
    >
      {label}
    </Box>
  )
}

interface CoursesDropdownProps {
  onNavigate?: () => void
}

const CoursesDropdown: FC<CoursesDropdownProps> = ({ onNavigate }) => {
  const theme = useTheme()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const menuItem = (item: CourseNavigationItem, featured: boolean): React.ReactElement => (
    <Box
      key={item.path}
      component="button"
      type="button"
      onClick={() => {
        void router.push(item.path)
        setOpen(false)
        onNavigate?.()
      }}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        p: 1.5,
        border: featured ? `1px solid ${alpha(theme.palette.primary.main, 0.22)}` : '1px solid transparent',
        borderRadius: 'var(--radius-button)',
        bgcolor: featured ? alpha(theme.palette.primary.main, 0.045) : 'transparent',
        color: 'text.primary',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background-color 160ms ease, border-color 160ms ease, transform 160ms ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          bgcolor: alpha(theme.palette.primary.main, 0.08),
          borderColor: alpha(theme.palette.primary.main, 0.3),
        },
        '&:focus-visible': { outline: `3px solid ${theme.palette.secondary.main}`, outlineOffset: 2 },
      }}
    >
      <Box>
        <Typography component="span" sx={{ display: 'block', fontWeight: 700 }}>{item.label}</Typography>
        <Typography component="span" variant="caption" color="text.secondary">{item.detail}</Typography>
      </Box>
      {featured && <Chip label={item.badge} size="small" color="primary" sx={{ fontWeight: 700 }} />}
    </Box>
  )

  return (
    <Box
      sx={{ position: 'relative', width: { xs: '100%', md: 'auto' } }}
    >
      <Button
        aria-expanded={open}
        aria-controls="courses-navigation-menu"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setOpen(false)
        }}
        sx={{
          width: { xs: '100%', md: 'auto' },
          justifyContent: { xs: 'flex-start', md: 'center' },
          minHeight: 44,
          color: 'text.primary',
          fontWeight: 700,
          textTransform: 'none',
          borderRadius: 'var(--radius-button)',
          '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.06) },
        }}
      >
        Courses
      </Button>
      {open && (
        <Box
          id="courses-navigation-menu"
          component="nav"
          aria-label="Course categories"
          sx={{
            position: { xs: 'static', md: 'absolute' },
            top: { md: 'calc(100% + 8px)' },
            right: { md: 0 },
            zIndex: 1400,
            width: { xs: '100%', md: 380 },
            maxHeight: { xs: 'none', md: 'min(75vh, 640px)' },
            overflowY: 'auto',
            p: 1.5,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            bgcolor: 'background.paper',
            boxShadow: 'var(--shadow-card-hover)',
          }}
        >
          <Typography variant="overline" sx={{ display: 'block', px: 1.5, color: 'text.secondary', fontWeight: 700 }}>AI Courses</Typography>
          {featuredCourses.slice(0, 2).map((item) => menuItem(item, true))}
          <Typography variant="overline" sx={{ display: 'block', px: 1.5, mt: 1.5, color: 'text.secondary', fontWeight: 700 }}>Career Launch Program</Typography>
          {menuItem(featuredCourses[2], true)}
          <Typography variant="overline" sx={{ display: 'block', px: 1.5, mt: 1.5, color: 'text.secondary', fontWeight: 700 }}>Other Courses</Typography>
          {otherCourses.map((item) => menuItem(item, false))}
          <Button
            href="/courses"
            fullWidth
            onClick={onNavigate}
            sx={{ mt: 1, minHeight: 44, fontWeight: 700 }}
          >
            View all courses
          </Button>
        </Box>
      )}
    </Box>
  )
}

interface NavigationProps {
  onNavigate?: () => void
}

const Navigation: FC<NavigationProps> = ({ onNavigate }) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'stretch', md: 'center' }, width: { xs: '100%', md: 'auto' }, gap: { xs: 0.25, md: 0.5 } }}>
    {navigations.map(({ path, label }) => path === 'courses'
      ? <CoursesDropdown key={path} onNavigate={onNavigate} />
      : <NavigationItem key={path} destination={path} label={label} onNavigate={onNavigate} />)}
  </Box>
)

export default Navigation
