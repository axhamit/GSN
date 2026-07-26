import React, { FC, useState, useMemo } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, alpha } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import { AnimatePresence } from 'framer-motion'
import { Course } from '@/interfaces/course'
import { data } from './popular-course.data'
import CourseCardItem from '@/components/course/course-card-item'

// Course Categories - Career Launch Academy added first
const courseCategories = [
  { id: 'career-launch', label: '🚀 Career Launch', icon: '🚀' },
  { id: 'all', label: 'All Courses', icon: '📚' },
  { id: '11th-standard', label: '11th Standard', icon: '🔬' },
  { id: '12th-standard', label: '12th Standard', icon: '🧪' },
  { id: 'engineering-entrance', label: 'Engineering Entrance', icon: '⚙️' },
  { id: 'state-entrance', label: 'State Entrance', icon: '🏛️' },
  { id: 'test-series', label: 'Test Series', icon: '📝' },
  { id: '10th-standard', label: '10th Standard', icon: '📖' },
]

const HomePremiumCourses: FC = () => {
  const theme = useTheme()
  const [activeTab, setActiveTab] = useState('career-launch')

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
  }

  const allCourses = data

  const filteredCourses = useMemo(() => {
    if (activeTab === 'all') {
      return allCourses
    }

    if (activeTab === 'career-launch') {
      return allCourses.filter(course => course.category === 'Career Launch Academy')
    }

    const categoryMap: Record<string, string> = {
      '11th-standard': '11th Standard',
      '12th-standard': '12th Standard',
      'engineering-entrance': 'Engineering Entrance',
      'state-entrance': 'State Entrance',
      'test-series': 'Test Series',
      '10th-standard': '10th Standard',
    }

    const category = categoryMap[activeTab]
    return allCourses.filter(course => course.category === category)
  }, [activeTab, allCourses])

  // Check if Career Launch Academy exists in filtered courses
  const hasCareerLaunch = filteredCourses.some(course => course.category === 'Career Launch Academy')

  return (
    <Box
      id="premium-courses"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.dark, 0.02)} 0%, ${theme.palette.background.default} 50%, ${alpha(theme.palette.secondary.dark, 0.02)} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 250,
          height: 250,
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.03)} 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 0.75,
              borderRadius: 50,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.12)}, ${alpha(theme.palette.primary.light, 0.04)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              mb: 2.5,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: theme.palette.success.main,
                animation: 'blink 1.5s infinite',
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.3 },
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontSize: '0.7rem',
              }}
            >
              🎯 Premium Learning Paths
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 1.5,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose Your Path to Success
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              maxWidth: 550,
              mx: 'auto',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}
          >
            Explore our comprehensive course catalog designed to help you ace every exam with confidence
          </Typography>
        </Box>

        {/* Tabs Section */}
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.6)})`,
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            p: 1,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
            boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.04)}`,
            overflow: 'auto',
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center',
            },
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTab-root': {
                minHeight: 36,
                px: 2.5,
                py: 0.75,
                borderRadius: 2,
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  color: 'white',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
                },
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.05),
                  transform: 'translateY(-1px)',
                },
                '&:not(.Mui-selected):hover': {
                  background: alpha(theme.palette.primary.main, 0.08),
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {courseCategories.map((category) => (
              <Tab
                key={category.id}
                value={category.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <span style={{ fontSize: '1rem' }}>{category.icon}</span>
                    <span style={{ fontSize: '0.8rem' }}>{category.label}</span>
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* Course Grid */}
        <AnimatePresence mode="wait">
          <Grid container spacing={2.5}>
            {filteredCourses.map((course, index) => (
              <Grid item xs={12} sm={6} lg={4} key={course.id}>
                <CourseCardItem item={course} index={index} />
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 6,
              px: 4,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.6)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, color: 'text.secondary', fontWeight: 700 }}>
              No courses available
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              We're adding more courses soon. Check back later!
            </Typography>
          </Box>
        )}

        {/* Bottom CTA */}
        {filteredCourses.length > 0 && (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                borderRadius: 50,
                px: 5,
                py: 1.5,
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
                },
              }}
            >
              View All Courses
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default HomePremiumCourses