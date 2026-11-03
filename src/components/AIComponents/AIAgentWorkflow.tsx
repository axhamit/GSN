import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, alpha } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface WorkflowStep {
  title: string
  description: string
  icon?: string
}

interface AIAgentWorkflowProps {
  title?: string
  description?: string
  steps: WorkflowStep[]
}

const AIAgentWorkflow: FC<AIAgentWorkflowProps> = ({
  title = 'AI Agent Workflow',
  description = 'Understand how AI agents process information and make decisions',
  steps,
}) => {
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
          {title}
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
          {description}
        </Typography>

        <Box sx={{ position: 'relative', maxWidth: 1000, mx: 'auto' }}>
          <Grid container spacing={3} alignItems="center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      background: theme.palette.background.paper,
                      border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                        borderColor: alpha(theme.palette.primary.light, 0.3),
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.15)}, ${alpha(theme.palette.ai.light, 0.1)})`,
                          color: theme.palette.primary.light,
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1rem' }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {index < steps.length - 1 && (
                  <Grid item xs={12} sm={6} md={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        color: theme.palette.primary.light,
                        fontSize: '2rem',
                        fontWeight: 700,
                      }}
                    >
                      →
                    </Box>
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default AIAgentWorkflow
