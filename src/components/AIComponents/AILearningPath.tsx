import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, alpha } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface LearningPathStep {
  label: string
  description: string
}

interface AILearningPathProps {
  steps: LearningPathStep[]
}

const AILearningPath: FC<AILearningPathProps> = ({ steps }) => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

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
          Your Learning Journey
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
          A structured path from fundamentals to advanced AI expertise
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background:
                          index < activeStep
                            ? `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
                            : alpha(theme.palette.primary.light, 0.1),
                        color: index < activeStep ? 'white' : theme.palette.primary.light,
                        fontWeight: 700,
                        fontSize: '0.875rem',
                      }}
                    >
                      {index < activeStep ? <CheckCircleIcon sx={{ fontSize: 18 }} /> : index + 1}
                    </Box>
                  )}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {step.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                          mr: 1,
                        }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3, mt: 2, background: alpha(theme.palette.primary.light, 0.05) }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                🎉 All steps completed - you're ready to start your AI journey!
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default AILearningPath
