import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { alpha, useTheme } from '@mui/material/styles'
import type { Course } from '@/interfaces/course'
import { courseRoadmaps } from '@/courses/course-roadmap.data'
import EnrollmentForm from '@/components/form/EnrollmentForm'

interface CourseRoadmapProps {
  course: Course
}

const CourseRoadmap: FC<CourseRoadmapProps> = ({ course }) => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState<string | false>('module-0')
  const [enrollOpen, setEnrollOpen] = useState(false)
  const roadmap = courseRoadmaps[course.slug || '']

  if (!roadmap) {
    return null
  }

  const featured = course.category === 'Artificial Intelligence' || course.category === 'Career Launch Academy'
  const sections = [
    { title: 'Projects', items: roadmap.projects },
    { title: 'Tools covered', items: roadmap.tools },
    { title: 'Learning outcomes', items: roadmap.outcomes },
  ]

  return (
    <Box id={course.slug === 'career-launch-academy' ? 'career-launch' : undefined} component="section" aria-labelledby="course-roadmap-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          {featured && <Chip label="Featured course roadmap" color="primary" size="small" sx={{ mb: 2, fontWeight: 700 }} />}
          <Typography id="course-roadmap-title" component="h2" variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 1.5 }}>
            {course.title.replace(/^[^\w]+/, '')} roadmap
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>{roadmap.overview}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap', mt: 2.5 }}>
            <Chip label={`Duration: ${roadmap.duration || course.duration || 'TODO: Confirm duration'}`} variant="outlined" />
            <Chip label={`Level: ${roadmap.level}`} variant="outlined" />
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: 900,
            mx: 'auto',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: { xs: 19, md: 28 },
              top: 28,
              bottom: 28,
              width: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.18),
            },
          }}
        >
          {roadmap.modules.map((module, index) => {
            const panel = `module-${index}`
            return (
              <Box key={panel} sx={{ position: 'relative', pl: { xs: 5, md: 7 }, mb: 2 }}>
                <Box aria-hidden="true" sx={{ position: 'absolute', zIndex: 1, left: { xs: 8, md: 16 }, top: 22, width: 24, height: 24, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'primary.main', color: 'primary.contrastText', fontSize: 12, fontWeight: 700, boxShadow: `0 0 0 5px ${alpha(theme.palette.primary.main, 0.1)}` }}>
                  {index + 1}
                </Box>
                <Accordion
                  expanded={expanded === panel}
                  onChange={(_, open) => setExpanded(open ? panel : false)}
                  sx={{
                    border: `1px solid ${alpha(theme.palette.primary.main, featured ? 0.18 : 0.1)}`,
                    borderRadius: 'var(--radius-card) !important',
                    boxShadow: 'var(--shadow-card)',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { borderColor: alpha(theme.palette.primary.main, 0.35), boxShadow: 'var(--shadow-card-hover)' },
                    transition: 'box-shadow 180ms ease, border-color 180ms ease',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${panel}-content`} id={`${panel}-header`} sx={{ px: { xs: 2, md: 3 }, py: 1 }}>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography component="h3" sx={{ fontWeight: 700 }}>{module.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{module.duration}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails id={`${panel}-content`} sx={{ px: { xs: 2, md: 3 }, pt: 0, pb: 3 }}>
                    <Typography component="h4" variant="subtitle2" sx={{ fontWeight: 700, mb: 1.25 }}>Topics covered</Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1, '& li::marker': { color: 'primary.main' } }}>
                      {module.topics.map((topic) => <Typography component="li" variant="body2" color="text.secondary" key={topic}>{topic}</Typography>)}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            )
          })}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, maxWidth: 1000, mx: 'auto', mt: 5 }}>
          {sections.map((section) => (
            <Box component="section" key={section.title} sx={{ p: { xs: 2.5, md: 3 }, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', bgcolor: 'background.paper', boxShadow: 'var(--shadow-card)' }}>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>{section.title}</Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, '& li + li': { mt: 1 } }}>
                {section.items.map((item) => <Typography component="li" variant="body2" color="text.secondary" key={item}>{item}</Typography>)}
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" size="large" onClick={() => setEnrollOpen(true)} sx={{ minHeight: 48, px: 4, borderRadius: 'var(--radius-button)', fontWeight: 700 }}>
            Enroll now
          </Button>
        </Box>
      </Container>
      <EnrollmentForm open={enrollOpen} onClose={() => setEnrollOpen(false)} courseName={course.title} coursePrice={course.price} source="course-roadmap" />
    </Box>
  )
}

export default CourseRoadmap
