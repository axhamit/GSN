import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SchoolIcon from '@mui/icons-material/School'
import { useTheme, alpha } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface CareerPopupProps {
  onEnrollClick?: () => void
}

const CareerPopup: FC<CareerPopupProps> = ({ onEnrollClick }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  const handleEnroll = () => {
    handleClose()
    onEnrollClick?.()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{
        zIndex: 9999,
        '& .MuiBackdrop-root': {
          backgroundColor: alpha(theme.palette.common.black, 0.7),
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: { xs: 3, md: 4 },
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0)}, ${alpha(theme.palette.primary.main, 0.05)})`,
          boxShadow: `0 40px 100px ${alpha(theme.palette.common.black, 0.5)}`,
          position: 'relative',
          overflow: 'hidden',
          mx: { xs: 1, md: 0 },
          border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            right: -100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
            borderRadius: '50%',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.12)} 0%, transparent 70%)`,
            borderRadius: '50%',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: 1,
          pt: { xs: 2, md: 3 },
          px: { xs: 2, md: 3 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <RocketLaunchIcon sx={{ color: 'primary.main', fontSize: { xs: 20, md: 24 } }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Avishkar Your Career
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: { xs: '0.85rem', md: '0.875rem' },
            }}
          >
            Transform your future with our expert guidance
          </Typography>
        </Box>
        <IconButton
          onClick={handleClose}
          sx={{
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.15),
              transform: 'rotate(90deg)',
            },
            transition: 'transform 0.3s ease',
            p: { xs: 1, md: 1.5 },
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 2, md: 3 }, pb: 2, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mt: 1, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
              border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              mb: 2,
            }}
          >
            <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
          </Box>
          
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
            }}
          >
            Start Your Journey Today
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: alpha(theme.palette.text.secondary, 0.8),
              mb: 3,
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.6,
            }}
          >
            Join thousands of students who have transformed their careers with our comprehensive training programs. Get personalized guidance and industry-ready skills.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mb: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: theme.palette.success.main,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                Expert mentorship from industry professionals
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: theme.palette.success.main,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                100% placement assistance
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: theme.palette.success.main,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                Industry-aligned curriculum
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          px: { xs: 2, md: 3 },
          pb: { xs: 2, md: 3 },
          gap: 1.5,
          position: 'relative',
          zIndex: 1,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Button
          onClick={handleClose}
          fullWidth={isMobile}
          sx={{
            color: 'text.secondary',
            fontWeight: 600,
            px: 3,
            py: 1.5,
            '&:hover': {
              background: alpha(theme.palette.primary.main, 0.05),
            },
          }}
        >
          Maybe Later
        </Button>
        <Button
          onClick={handleEnroll}
          variant="contained"
          fullWidth={isMobile}
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontWeight: 700,
            boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 12px 35px ${alpha(theme.palette.primary.main, 0.4)}`,
            },
          }}
        >
          <RocketLaunchIcon sx={{ mr: 1, fontSize: 20 }} />
          Enroll Now
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CareerPopup
