import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { useTheme, alpha } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PsychologyIcon from '@mui/icons-material/Psychology'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import SettingsIcon from '@mui/icons-material/Settings'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

interface Module {
  title: string
  duration: string
  topics: string[]
  icon?: React.ReactNode
}

interface AICurriculumTimelineProps {
  modules: Module[]
}

const AICurriculumTimeline: FC<AICurriculumTimelineProps> = ({ modules }) => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const defaultIcons = [
    <SmartToyIcon />,
    <PsychologyIcon />,
    <CodeIcon />,
    <StorageIcon />,
    <SettingsIcon />,
    <EmojiEventsIcon />,
  ]

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
          }}
        >
          Course Curriculum
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 6,
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          A structured learning path from fundamentals to advanced AI concepts
        </Typography>

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {modules.map((module, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                borderRadius: 3,
                background: theme.palette.background.paper,
                border: `1px solid ${alpha('#38bdf8', 0.08)}`,
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  margin: '8px 0',
                  borderColor: alpha('#38bdf8', 0.2),
                  boxShadow: `0 8px 30px ${alpha('#38bdf8', 0.1)}`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#38bdf8' }} />}
                sx={{
                  px: 3,
                  py: 2.5,
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${alpha('#38bdf8', 0.1)}, ${alpha('#60a5fa', 0.05)})`,
                      color: '#38bdf8',
                      flexShrink: 0,
                    }}
                  >
                    {module.icon || defaultIcons[index % defaultIcons.length]}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Module {index + 1}: {module.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {module.duration}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Box sx={{ pl: 6 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#38bdf8' }}>
                    Topics Covered:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {module.topics.map((topic, topicIndex) => (
                      <Box
                        key={topicIndex}
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          background: alpha('#38bdf8', 0.05),
                          border: `1px solid ${alpha('#38bdf8', 0.1)}`,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {topic}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default AICurriculumTimeline
