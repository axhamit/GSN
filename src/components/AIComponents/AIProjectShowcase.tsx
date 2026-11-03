import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useTheme, alpha } from '@mui/material/styles'
import CodeIcon from '@mui/icons-material/Code'
import DescriptionIcon from '@mui/icons-material/Description'

interface Project {
  title: string
  description: string
  technologies: string[]
  outcome: string
}

interface AIProjectShowcaseProps {
  projects: Project[]
}

const AIProjectShowcase: FC<AIProjectShowcaseProps> = ({ projects }) => {
  const theme = useTheme()

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
          Hands-on Projects
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
          Build real-world AI applications and strengthen your portfolio
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${alpha(theme.palette.primary.light, 0.02)})`,
                  border: `1px solid ${alpha(theme.palette.primary.light, 0.08)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderColor: alpha(theme.palette.primary.light, 0.2),
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <CodeIcon sx={{ color: theme.palette.primary.light, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.light,
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Box
                          key={techIndex}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            background: alpha(theme.palette.primary.light, 0.08),
                            border: `1px solid ${alpha(theme.palette.primary.light, 0.15)}`,
                          }}
                        >
                          <Typography variant="caption" sx={{ fontWeight: 500 }}>
                            {tech}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 2 }}>
                    <DescriptionIcon sx={{ color: theme.palette.ai.main, fontSize: 20, mt: 0.25 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        fontSize: '0.875rem',
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 600, color: theme.palette.ai.main }}>
                        Outcome:
                      </Box>{' '}
                      {project.outcome}
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

export default AIProjectShowcase
