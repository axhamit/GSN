import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import SchoolIcon from '@mui/icons-material/School'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useTheme, alpha } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { EnquiryPayload } from '@/interfaces/enquiry'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

interface EnrollmentFormProps {
  open: boolean
  onClose: () => void
  courseName: string
  coursePrice?: number
  source?: string
  onSuccess?: () => void
}

// Country codes with flags
const countryCodes = [
  { code: '+91', label: '🇮🇳 +91' },
  { code: '+1', label: '🇺🇸 +1' },
  { code: '+44', label: '🇬🇧 +44' },
  { code: '+61', label: '🇦🇺 +61' },
  { code: '+86', label: '🇨🇳 +86' },
  { code: '+81', label: '🇯🇵 +81' },
  { code: '+49', label: '🇩🇪 +49' },
  { code: '+33', label: '🇫🇷 +33' },
  { code: '+7', label: '🇷🇺 +7' },
  { code: '+55', label: '🇧🇷 +55' },
]

const EnrollmentForm: FC<EnrollmentFormProps> = ({
  open,
  onClose,
  courseName,
  coursePrice,
  source = 'website',
  onSuccess
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [countryCode, setCountryCode] = useState('+91')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone validation (basic - allows only digits after country code)
  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{7,15}$/
    return phoneRegex.test(phone)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your full name.' })
      return
    }

    if (!isValidEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (!isValidPhone(formData.phone)) {
      setStatus({ type: 'error', message: 'Please enter a valid phone number (7-15 digits).' })
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      const payload: EnquiryPayload = {
        ...formData,
        phone: `${countryCode}${formData.phone}`,
        courseName,
        coursePrice,
        source,
      }

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      // Reset form and close dialog
      setFormData({ name: '', email: '', phone: '', message: '' })
      setCountryCode('+91')
      onSuccess?.()
      
      // Close the dialog first
      onClose()

      // Show toast notification after dialog closes
      setToastType('success')
      setToastMessage('🎉 Thank you! Your enquiry has been submitted successfully. Our team will contact you within 24 hours.')
      setShowToast(true)

    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or call us directly.' 
      })
    } finally {
      setLoading(false)
    }
  }

  const handleClose = (): void => {
    setStatus(null)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setCountryCode('+91')
    onClose()
  }

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    setShowToast(false)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: 3, md: 4 },
            backgroundColor: theme.palette.background.paper,
            backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0)}, ${alpha(theme.palette.primary.main, 0.02)})`,
            boxShadow: `0 30px 80px ${alpha(theme.palette.common.black, 0.3)}`,
            position: 'relative',
            overflow: 'hidden',
            mx: { xs: 1, md: 0 },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -100,
              right: -100,
              width: 200,
              height: 200,
              background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
              borderRadius: '50%',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -100,
              left: -100,
              width: 200,
              height: 200,
              background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.04)} 0%, transparent 70%)`,
              borderRadius: '50%',
            },
          },
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          pb: 1,
          pt: { xs: 2, md: 3 },
          px: { xs: 2, md: 3 },
          position: 'relative',
          zIndex: 1,
        }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <SchoolIcon sx={{ color: 'primary.main', fontSize: { xs: 20, md: 24 } }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                Enroll Now
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
              {courseName}
            </Typography>
            {coursePrice !== undefined && (
              <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700, display: 'block', mt: 0.5, fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                Course Fee: ₹{coursePrice.toLocaleString()}
              </Typography>
            )}
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
              Fill in your details and our team will get back to you within 24 hours.
            </Typography>

            {status && (
              <Alert 
                severity={status.type} 
                sx={{ 
                  mb: 2.5, 
                  borderRadius: 2,
                }} 
                onClose={() => setStatus(null)}
              >
                {status.message}
              </Alert>
            )}

            <TextField
              fullWidth
              required
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2.5 }}
              variant="outlined"
              size={isMobile ? 'small' : 'medium'}
              InputProps={{
                sx: { 
                  borderRadius: 2,
                  '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                  },
                },
              }}
            />

            <TextField
              fullWidth
              required
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2.5 }}
              variant="outlined"
              size={isMobile ? 'small' : 'medium'}
              InputProps={{
                sx: { 
                  borderRadius: 2,
                  '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                  },
                },
              }}
              helperText={formData.email && !isValidEmail(formData.email) ? 'Please enter a valid email address' : ''}
              error={formData.email ? !isValidEmail(formData.email) : false}
            />

            <TextField
              fullWidth
              required
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mb: 2.5 }}
              variant="outlined"
              size={isMobile ? 'small' : 'medium'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormControl variant="standard" sx={{ minWidth: 80 }}>
                      <Select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        disableUnderline
                        sx={{
                          '& .MuiSelect-select': {
                            py: 0.5,
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'text.primary',
                          },
                        }}
                      >
                        {countryCodes.map((country) => (
                          <MenuItem key={country.code} value={country.code}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 2,
                  '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                  },
                },
              }}
              helperText={formData.phone && !isValidPhone(formData.phone) ? 'Enter 7-15 digits' : ''}
              error={formData.phone ? !isValidPhone(formData.phone) : false}
            />

            <TextField
              fullWidth
              label="Message (Optional)"
              name="message"
              multiline
              rows={3}
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              size={isMobile ? 'small' : 'medium'}
              InputProps={{
                sx: { 
                  borderRadius: 2,
                  '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                  },
                },
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 }, gap: 1.5, position: 'relative', zIndex: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button
            onClick={handleClose}
            disabled={loading}
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
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading}
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
              '&:disabled': {
                opacity: 0.7,
              },
            }}
          >
            {loading ? 'Submitting...' : 'Submit Enquiry'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notification - Top Right */}
      <Snackbar
        open={showToast}
        autoHideDuration={6000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiSnackbar-root': {
            top: { xs: 16, sm: 24 },
          },
        }}
      >
        <Alert
          onClose={handleToastClose}
          severity={toastType}
          variant="filled"
          elevation={6}
          sx={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: 2,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 500,
            boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.2)}`,
            '& .MuiAlert-icon': {
              fontSize: '1.5rem',
              alignItems: 'center',
            },
            '& .MuiAlert-message': {
              py: 1,
              display: 'flex',
              alignItems: 'center',
            },
            animation: 'slideInRight 0.5s ease-out',
            '@keyframes slideInRight': {
              '0%': {
                transform: 'translateX(100%)',
                opacity: 0,
              },
              '100%': {
                transform: 'translateX(0)',
                opacity: 1,
              },
            },
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default EnrollmentForm