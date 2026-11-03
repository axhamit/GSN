import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useTheme, alpha } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

interface ComparisonFeature {
  feature: string
  course1: string | boolean
  course2: string | boolean
}

interface AICourseComparisonProps {
  course1Name: string
  course2Name: string
  features: ComparisonFeature[]
}

const AICourseComparison: FC<AICourseComparisonProps> = ({
  course1Name,
  course2Name,
  features,
}) => {
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
          Course Comparison
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
          Compare our AI courses to find the perfect fit for your goals
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
            border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="course comparison table">
            <TableHead>
              <TableRow
                sx={{
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.ai.light, 0.05)})`,
                }}
              >
                <TableCell sx={{ fontWeight: 700, fontSize: '1rem' }}>Feature</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '1rem', color: theme.palette.primary.light }}>
                  {course1Name}
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '1rem', color: theme.palette.ai.main }}>
                  {course2Name}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:nth-of-type(even)': {
                      background: alpha(theme.palette.primary.light, 0.02),
                    },
                    '&:hover': {
                      background: alpha(theme.palette.primary.light, 0.05),
                    },
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    {feature.feature}
                  </TableCell>
                  <TableCell>
                    {typeof feature.course1 === 'boolean' ? (
                      feature.course1 ? (
                        <CheckIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                      ) : (
                        <CloseIcon sx={{ color: '#f44336', fontSize: 20 }} />
                      )
                    ) : (
                      <Typography variant="body2">{feature.course1}</Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    {typeof feature.course2 === 'boolean' ? (
                      feature.course2 ? (
                        <CheckIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                      ) : (
                        <CloseIcon sx={{ color: '#f44336', fontSize: 20 }} />
                      )
                    ) : (
                      <Typography variant="body2">{feature.course2}</Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  )
}

export default AICourseComparison
