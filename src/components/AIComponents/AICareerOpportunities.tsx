import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useTheme, alpha } from '@mui/material/styles'
import WorkIcon from '@mui/icons-material/Work'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SchoolIcon from '@mui/icons-material/School'

interface CareerRole {
  title: string
  description: string
  salaryRange?: string
  growth?: string
}

interface AICareerOpportunitiesProps {
  roles: CareerRole[]
  industryStats?: {
    title: string
    value: string
    description: string
  }[]
}

const AICareerOpportunities: FC<AICareerOpportunitiesProps> = ({ roles, industryStats = [] }) => {
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
          Career Opportunities
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
          Unlock exciting career paths in the rapidly growing AI industry
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {roles.map((role, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  background: theme.palette.background.paper,
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
                    <WorkIcon sx={{ color: theme.palette.primary.light, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {role.title}
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
                    {role.description}
                  </Typography>

                  {role.salaryRange && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <TrendingUpIcon sx={{ color: theme.palette.ai.main, fontSize: 18 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: theme.palette.ai.main }}>
                        Salary: {role.salaryRange}
                      </Typography>
                    </Box>
                  )}

                  {role.growth && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SchoolIcon sx={{ color: theme.palette.secondary.main, fontSize: 18 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>
                        Growth: {role.growth}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {industryStats.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 4,
                textAlign: 'center',
              }}
            >
              Industry Statistics
            </Typography>
            <Grid container spacing={3}>
              {industryStats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.ai.light, 0.05)})`,
                      border: `1px solid ${alpha(theme.palette.primary.light, 0.15)}`,
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.primary.light,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      {stat.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {stat.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default AICareerOpportunities
