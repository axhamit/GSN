import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme, alpha } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface AITechStackProps {
  technologies: string[]
  frameworks?: string[]
  tools?: string[]
}

const AITechStack: FC<AITechStackProps> = ({ technologies, frameworks = [], tools = [] }) => {
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
          Tools & Technologies
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
          Master industry-standard AI tools and frameworks
        </Typography>

        <Grid container spacing={4}>
          {technologies.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.primary.light,
                  textAlign: 'center',
                }}
              >
                Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                {technologies.map((tech, index) => (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: 2,
                      background: theme.palette.background.paper,
                      border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.15)}`,
                        borderColor: alpha(theme.palette.primary.light, 0.3),
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {tech}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          )}

          {frameworks.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.ai.main,
                  textAlign: 'center',
                }}
              >
                Frameworks
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                {frameworks.map((framework, index) => (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: 2,
                      background: theme.palette.background.paper,
                      border: `1px solid ${alpha(theme.palette.ai.main, 0.1)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${alpha(theme.palette.ai.main, 0.15)}`,
                        borderColor: alpha(theme.palette.ai.main, 0.3),
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {framework}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          )}

          {tools.length > 0 && (
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.secondary.main,
                  textAlign: 'center',
                }}
              >
                Tools
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                {tools.map((tool, index) => (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: 2,
                      background: theme.palette.background.paper,
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.15)}`,
                        borderColor: alpha(theme.palette.secondary.main, 0.3),
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {tool}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default AITechStack
