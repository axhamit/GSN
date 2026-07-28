// hooks/useEnrollmentForm.ts
import { useState } from 'react'
import { EnquiryPayload } from '@/interfaces/enquiry'

interface UseEnrollmentFormProps {
  courseName: string
  coursePrice?: number
  source?: string
  onSuccess?: () => void
  onClose?: () => void
}

export const useEnrollmentForm = ({
  courseName,
  coursePrice,
  source = 'website',
  onSuccess,
  onClose
}: UseEnrollmentFormProps) => {
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

      setFormData({ name: '', email: '', phone: '', message: '' })
      setCountryCode('+91')
      onSuccess?.()
      
      if (onClose) {
        onClose()
      }

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

  const resetForm = () => {
    setStatus(null)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setCountryCode('+91')
  }

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    setShowToast(false)
  }

  return {
    // State
    formData,
    loading,
    status,
    countryCode,
    showToast,
    toastMessage,
    toastType,
    
    // Actions
    handleChange,
    handleSubmit,
    resetForm,
    setCountryCode,
    handleToastClose,
    setStatus,
    setShowToast,
    setToastMessage,
    setToastType,
    
    // Validation
    isValidEmail,
    isValidPhone,
  }
}