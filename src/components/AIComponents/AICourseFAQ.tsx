import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { useTheme, alpha } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpIcon from '@mui/icons-material/Help'

interface FAQ {
  question: string
  answer: string
}

interface AICourseFAQProps {
  faqs: FAQ[]
}

const AICourseFAQ: FC<AICourseFAQProps> = ({ faqs }) => {
  const theme = useTheme()

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: alpha(theme.palette.primary.light, 0.02) }}>
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
          Frequently Asked Questions
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
          Got questions? We've got answers
        </Typography>

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: 3,
                background: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.primary.light, 0.08)}`,
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  margin: '8px 0',
                  borderColor: alpha(theme.palette.primary.light, 0.2),
                  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.light }} />}
                sx={{
                  px: 3,
                  py: 2.5,
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                  <HelpIcon sx={{ color: theme.palette.primary.light, fontSize: 24 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, pl: 5 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default AICourseFAQ
