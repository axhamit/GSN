import React, { FC, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { Course } from '@/interfaces/course'
import { data } from './popular-course.data'
import CourseCardItem from '@/components/course/course-card-item'

const courseCategories = [
  { id: 'all', label: 'All courses' },
  { id: 'ai-courses', label: 'Artificial intelligence' },
  { id: 'career-launch', label: 'Career launch' },
  { id: '10th-standard', label: 'Class 10' },
  { id: '11th-standard', label: 'Class 11' },
  { id: '12th-standard', label: 'Class 12' },
  { id: 'neet', label: 'NEET' },
  { id: 'jee', label: 'JEE' },
  { id: 'kcet', label: 'KCET' },
  { id: 'test-series', label: 'Test series' },
]

const categoryMap: Record<string, string> = {
  '10th-standard': '10th Standard',
  '11th-standard': '11th Standard',
  '12th-standard': '12th Standard',
  neet: 'Medical Entrance',
  jee: 'Engineering Entrance',
  kcet: 'State Entrance',
  'test-series': 'Test Series',
}

const HomePremiumCourses: FC = () => {
  const [activeTab, setActiveTab] = useState('ai-courses')

  const filteredCourses = useMemo(() => {
    if (activeTab === 'all') {
      return [...data].sort((a, b) => {
        const order = (course: Course): number =>
          course.category === 'Artificial Intelligence' ? 0 : course.category === 'Career Launch Academy' ? 1 : 2
        return order(a) - order(b)
      })
    }

    if (activeTab === 'ai-courses') {
      return data.filter((course) => course.category === 'Artificial Intelligence')
    }

    if (activeTab === 'career-launch') {
      return data.filter((course) => course.category === 'Career Launch Academy')
    }

    return data.filter((course) => course.category === categoryMap[activeTab])
  }, [activeTab])

  return (
    <Box
      id="premium-courses"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#f6f8fa' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, maxWidth: 620 }}>
          <Typography
            component="p"
            sx={{
              mb: 1,
              color: 'primary.main',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Find your next step
          </Typography>
          <Typography
            component="h2"
            sx={{
              mb: 1.25,
              color: '#172b3c',
              fontSize: { xs: '2rem', md: '2.6rem' },
              fontWeight: 750,
              letterSpacing: '-0.035em',
              lineHeight: 1.2,
            }}
          >
            Learning paths built around you
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7 }}>
            Practical teaching, supportive mentors, and clear milestones for every goal.
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 3.5,
            borderBottom: '1px solid #dfe6eb',
            '& .MuiTabs-indicator': { height: 2, borderRadius: 2 },
            '& .MuiTab-root': {
              minHeight: 48,
              px: 1.75,
              color: '#647586',
              fontWeight: 600,
              fontSize: '0.85rem',
              textTransform: 'none',
              '&.Mui-selected': { color: '#17324d' },
            },
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(_, value: string) => setActiveTab(value)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="Filter courses by category"
          >
            {courseCategories.map((category) => (
              <Tab key={category.id} value={category.id} label={category.label} />
            ))}
          </Tabs>
        </Box>

        {filteredCourses.length > 0 ? (
          <Grid container spacing={2.5} alignItems="stretch">
            {filteredCourses.map((course, index) => (
              <Grid item xs={12} sm={6} lg={4} key={course.id}>
                <CourseCardItem item={course} index={index} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              py: 7,
              px: 3,
              border: '1px solid #e3e9ee',
              borderRadius: 3,
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography component="h3" sx={{ mb: 0.75, color: '#172b3c', fontWeight: 700 }}>
              Courses coming soon
            </Typography>
            <Typography color="text.secondary">
              We&apos;re adding new courses. Please check back soon.
            </Typography>
          </Box>
        )}

        {activeTab !== 'all' && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button variant="outlined" onClick={() => setActiveTab('all')}>
              Browse all courses
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default HomePremiumCourses
