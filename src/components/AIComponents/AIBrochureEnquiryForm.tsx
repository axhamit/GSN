import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import { useTheme, alpha } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import DownloadIcon from '@mui/icons-material/Download'
import SchoolIcon from '@mui/icons-material/School'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import CloseIcon from '@mui/icons-material/Close'
import { triggerBrochureDownload } from '@/utils/download-brochure'

interface AIBrochureEnquiryFormProps {
  open: boolean
  onClose: () => void
  courseName: string
  courseSlug: string
  onSuccess?: () => void
}

const countryCodes = [
  { code: '+91', label: '🇮🇳 +91' },
  { code: '+1', label: '🇺🇸 +1' },
  { code: '+44', label: '🇬🇧 +44' },
  { code: '+61', label: '🇦🇺 +61' },
  { code: '+86', label: '🇨🇳 +86' },
  { code: '+81', label: '🇯🇵 +81' },
  { code: '+49', label: '🇩🇪 +49' },
  { code: '+33', label: '🇫🇷 +33' },
]

const AIBrochureEnquiryForm: FC<AIBrochureEnquiryFormProps> = ({
  open,
  onClose,
  courseName,
  courseSlug,
  onSuccess,
}) => {
  const theme = useTheme()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [countryCode, setCountryCode] = useState('+91')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

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

  const handleClose = (): void => {
    setStatus(null)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setCountryCode('+91')
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

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
      const payload = {
        ...formData,
        phone: `${countryCode}${formData.phone}`,
        courseName,
        courseSlug,
        source: 'ai-course-page',
      }

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json() as { brochureUrl?: string }
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      if (!result.brochureUrl) {
        throw new Error('The enquiry was recorded but no brochure URL was returned')
      }

      setFormData({ name: '', email: '', phone: '', message: '' })
      setCountryCode('+91')
      triggerBrochureDownload(result.brochureUrl, `${courseSlug}-brochure.pdf`)
      onSuccess?.()
      onClose()
      await router.push(`/thank-you?course=${encodeURIComponent(courseSlug)}`)
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="course-brochure-dialog-title"
    >
        <Paper
          sx={{
            position: 'relative',
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${alpha(theme.palette.primary.light, 0.02)})`,
            border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
            boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <IconButton
            aria-label="Close brochure form"
            onClick={handleClose}
            sx={{ position: 'absolute', top: 12, right: 12 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.15)}, ${alpha(theme.palette.ai.light, 0.1)})`,
                color: theme.palette.primary.light,
                mb: 2,
              }}
            >
              <DownloadIcon sx={{ fontSize: 32 }} />
            </Box>
            <Typography id="course-brochure-dialog-title" variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Download Course Brochure
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Fill in your details to receive the comprehensive course brochure and our team will contact
              you within 24 hours.
            </Typography>
          </Box>

          {status && (
            <Alert
              severity={status.type}
              sx={{ mb: 3, borderRadius: 2 }}
              onClose={() => setStatus(null)}
            >
              {status.message}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, p: 2, borderRadius: 2, background: alpha(theme.palette.primary.light, 0.05) }}>
              <SchoolIcon sx={{ color: theme.palette.primary.light }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Course: {courseName}
              </Typography>
            </Box>

            <TextField
              fullWidth
              required
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2.5 }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: theme.palette.primary.light }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: theme.palette.primary.light }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FormControl variant="standard" sx={{ minWidth: 90 }}>
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
                    <PhoneIcon sx={{ color: theme.palette.primary.light, ml: 1 }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
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
              sx={{ mb: 3 }}
              variant="outlined"
              InputProps={{ sx: { borderRadius: 2 } }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                py: 1.75,
                fontWeight: 700,
                borderRadius: 2,
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
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                  <span>Submitting...</span>
                </Box>
              ) : (
                'Submit & Download Brochure'
              )}
            </Button>

            <Typography variant="caption" sx={{ display: 'block', mt: 2, textAlign: 'center', color: 'text.secondary' }}>
              By submitting this form, you agree to our privacy policy. We will only use your information to
              respond to your enquiry.
            </Typography>
          </Box>
        </Paper>
    </Dialog>
  )
}

export default AIBrochureEnquiryForm
