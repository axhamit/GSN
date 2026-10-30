import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useTheme, alpha } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface AILearningOutcomesProps {
  outcomes: string[]
}

const AILearningOutcomes: FC<AILearningOutcomesProps> = ({ outcomes }) => {
  const theme = useTheme()

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: alpha('#38bdf8', 0.02) }}>
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
          Learning Outcomes
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
          Master these essential AI skills and transform your career
        </Typography>

        <Grid container spacing={3}>
          {outcomes.map((outcome, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  background: theme.palette.background.paper,
                  border: `1px solid ${alpha('#38bdf8', 0.08)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px ${alpha('#38bdf8', 0.15)}`,
                    borderColor: alpha('#38bdf8', 0.2),
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: '#38bdf8',
                        fontSize: 24,
                        flexShrink: 0,
                        mt: 0.25,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: 'text.primary',
                      }}
                    >
                      {outcome}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AILearningOutcomes
