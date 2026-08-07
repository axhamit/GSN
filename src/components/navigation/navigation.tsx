import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/router'
import { navigations } from './navigation.data'
import { useTheme, alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SchoolIcon from '@mui/icons-material/School'
import ScienceIcon from '@mui/icons-material/Science'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import EngineeringIcon from '@mui/icons-material/Engineering'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import StarIcon from '@mui/icons-material/Star'

// Course dropdown data with Career Launch Academy first
const courseDropdownItems = [
  {
    id: 'career-launch',
    label: '🚀 Career Launch Academy',
    icon: <RocketLaunchIcon sx={{ fontSize: 20 }} />,
    description: 'Complete PCMB 11th & 12th + Competitive Exams',
    path: '/courses/career-launch-academy',
    isFeatured: true,
    badge: 'Most Popular',
  },
  {
    id: '11th-standard',
    label: '11th Standard PCMB',
    icon: <ScienceIcon sx={{ fontSize: 20 }} />,
    description: 'Physics, Chemistry, Maths, Biology',
    path: '/courses/11th-standard',
  },
  {
    id: '12th-standard',
    label: '12th Standard PCMB',
    icon: <ScienceIcon sx={{ fontSize: 20 }} />,
    description: 'Advanced PCMB preparation',
    path: '/courses/12th-standard',
  },
  {
    id: 'jee',
    label: 'JEE Mains & Advanced',
    icon: <EngineeringIcon sx={{ fontSize: 20 }} />,
    description: 'Engineering entrance exam prep',
    path: '/courses/jee',
  },
  {
    id: 'neet',
    label: 'NEET UG',
    icon: <MedicalServicesIcon sx={{ fontSize: 20 }} />,
    description: 'Medical entrance exam prep',
    path: '/courses/neet',
  },
  {
    id: 'kcet',
    label: 'KCET',
    icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />,
    description: 'Karnataka CET preparation',
    path: '/courses/kcet',
  },
  {
    id: '10th-standard',
    label: '10th Standard Board',
    icon: <MenuBookIcon sx={{ fontSize: 20 }} />,
    description: 'Board exam preparation',
    path: '/courses/10th-standard',
  },
]

interface NavigationItemProps {
  destination: string
  label: string
  isActive?: boolean
}

const NavigationItem: FC<NavigationItemProps> = ({ destination, label, isActive }) => {
  const theme = useTheme()

  return (
    <Box
      component={ScrollLink}
      to={destination}
      spy={true}
      smooth={true}
      duration={350}
      activeClass="current"
      sx={{
        position: 'relative',
        color: isActive ? 'primary.main' : 'text.disabled',
        cursor: 'pointer',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', md: 'center' },
        width: { xs: '100%', md: 'auto' },
        px: { xs: 1.5, md: 2.25 },
        py: { xs: 1.1, md: 0.75 },
        mb: { xs: 0.5, md: 0 },
        fontSize: { xs: '1rem', md: '0.95rem' },
        borderRadius: { xs: 2, md: 999 },
        transition: 'all 0.3s ease',
        '& > div': { display: 'none' },
        '&.current > div': { display: 'block' },
        '&:hover': {
          color: 'primary.main',
          backgroundColor: { xs: alpha(theme.palette.primary.main, 0.06), md: 'transparent' },
          '& > div': {
            display: 'block',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          transform: 'rotate(3deg)',
          '& img': { width: 44, height: 'auto' },
        }}
      >
        {/* eslint-disable-next-line */}
        <img src="/images/headline-curve.svg" alt="Headline curve" />
      </Box>
      {label}
    </Box>
  )
}

// Courses Dropdown Component
const CoursesDropdown: FC = () => {
  const theme = useTheme()
  const router = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isHovered, setIsHovered] = useState(false)

  const handleCourseClick = (path: string) => {
    router.push(path)
    setIsHovered(false)
  }

  const handleToggleOpen = () => {
    if (isMobile) {
      setIsHovered((prev) => !prev)
    } else {
      setIsHovered(true)
    }
  }

  // Separate featured course (Career Launch Academy)
  const featuredCourse = courseDropdownItems.find(item => item.isFeatured)
  const regularCourses = courseDropdownItems.filter(item => !item.isFeatured)

  // Green color for Career Launch
  const greenColor = '#2e7d32'
  const greenLight = '#4caf50'

  return (
    <Box
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleToggleOpen}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: { xs: '100%', md: 'auto' },
        px: { xs: 1.5, md: 2.25 },
        py: { xs: 1.1, md: 0.75 },
        mb: { xs: 0.5, md: 0 },
        cursor: 'pointer',
        borderRadius: { xs: 2, md: 999 },
        '&:hover': {
          backgroundColor: { xs: alpha(theme.palette.primary.main, 0.06), md: 'transparent' },
          '& .dropdown-arrow': {
            transform: 'rotate(180deg)',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.disabled',
          fontWeight: 600,
          transition: 'color 0.3s ease',
          '&:hover': {
            color: 'primary.main',
          },
        }}
      >
        <span>Courses</span>
        <ArrowDropDownIcon 
          className="dropdown-arrow" 
          sx={{ 
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
          }} 
        />
      </Box>

      {/* Dropdown Menu */}
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          top: { xs: 'auto', md: 'calc(100% + 8px)' },
          left: { xs: 'auto', md: '50%' },
          mt: { xs: 1, md: 0 },
          minWidth: { xs: '100%', md: 340 },
          width: { xs: '100%', md: 'auto' },
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${alpha(theme.palette.primary.main, 0.02)})`,
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.15)}`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
          display: isHovered ? 'block' : 'none',
          pointerEvents: isHovered ? 'auto' : 'none',
          transform: isHovered ? { xs: 'translateY(0)', md: 'translateX(-50%) translateY(0)' } : { xs: 'translateY(-6px)', md: 'translateX(-50%) translateY(-10px)' },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1000,
          overflow: 'hidden',
          maxHeight: '80vh',
          overflowY: 'auto',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -6,
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 12,
            height: 12,
            background: theme.palette.background.paper,
            borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
            borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
          },
          '&::-webkit-scrollbar': {
            width: 4,
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: alpha(theme.palette.primary.main, 0.3),
            borderRadius: 10,
          },
        }}
      >
        <Box sx={{ p: 1.5 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              px: 1.5, 
              py: 1, 
              display: 'block',
              color: 'text.secondary',
              fontWeight: 600,
              letterSpacing: 0.5,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
            }}
          >
            Explore Our Courses
          </Typography>

          {/* Featured Course - Career Launch Academy */}
          {featuredCourse && (
            <Box
              onClick={() => handleCourseClick(featuredCourse.path)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 1.5,
                mb: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: `linear-gradient(135deg, ${alpha(greenColor, 0.06)}, ${alpha(greenLight, 0.03)})`,
                border: `1px solid ${alpha(greenColor, 0.15)}`,
                position: 'relative',
                '&:hover': {
                  transform: 'translateX(4px) scale(1.02)',
                  boxShadow: `0 8px 25px ${alpha(greenColor, 0.15)}`,
                  borderColor: greenColor,
                  '& .course-icon': {
                    background: `linear-gradient(135deg, ${greenColor}, ${greenLight})`,
                    color: 'white',
                    transform: 'scale(1.1) rotate(-5deg)',
                  },
                },
              }}
            >
              {/* Featured Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  background: `linear-gradient(135deg, ${greenColor}, ${greenLight})`,
                  borderRadius: 50,
                  px: 1.5,
                  py: 0.25,
                  boxShadow: `0 4px 15px ${alpha(greenColor, 0.4)}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  zIndex: 1,
                }}
              >
                <StarIcon sx={{ fontSize: 10, color: 'white' }} />
                <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, fontSize: '0.55rem' }}>
                  POPULAR
                </Typography>
              </Box>

              <Box
                className="course-icon"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${alpha(greenColor, 0.15)}, ${alpha(greenLight, 0.08)})`,
                  color: greenColor,
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {featuredCourse.icon}
              </Box>
              <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 700,
                    color: greenColor,
                    fontSize: '0.95rem',
                  }}
                >
                  {featuredCourse.label}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    display: 'block',
                  }}
                >
                  {featuredCourse.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: greenColor,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Enroll Now →
              </Box>
            </Box>
          )}

          {/* Divider */}
          <Box
            sx={{
              height: 1,
              background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.divider, 0.5)}, transparent)`,
              my: 1,
            }}
          />

          {/* Other Courses */}
          <Typography 
            variant="caption" 
            sx={{ 
              px: 1.5, 
              py: 0.5, 
              display: 'block',
              color: 'text.disabled',
              fontWeight: 500,
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            Other Programs
          </Typography>

          {regularCourses.map((item) => (
            <Box
              key={item.id}
              onClick={() => handleCourseClick(item.path)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, ${alpha(theme.palette.primary.light, 0.04)})`,
                  transform: 'translateX(4px)',
                  '& .course-icon': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    color: 'white',
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <Box
                className="course-icon"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.light, 0.05)})`,
                  color: 'primary.main',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.label}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    display: 'block',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'text.disabled',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                →
              </Box>
            </Box>
          ))}

          {/* View All Courses Link */}
          <Box
            onClick={() => router.push('/courses')}
            sx={{
              mt: 1,
              p: 1.5,
              borderRadius: 2,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.primary.light, 0.02)})`,
              border: `1px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.light, 0.05)})`,
                borderColor: theme.palette.primary.main,
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              View All Courses →
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'stretch', md: 'center' }, width: { xs: '100%', md: 'auto' }, gap: { xs: 0.25, md: 0.5 }, flexWrap: { md: 'wrap' } }}>
      {navigations.map(({ path: destination, label }) => {
        // Don't render the "Courses" navigation item from the data array
        if (destination === 'courses') {
          return <CoursesDropdown key={destination} />
        }
        return (
          <NavigationItem 
            key={destination} 
            destination={destination} 
            label={label}
            isActive={destination === '/'}
          />
        )
      })}
    </Box>
  )
}

export default Navigation