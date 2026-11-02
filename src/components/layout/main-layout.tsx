import React, { FC, ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import CareerPopup from '@/components/popup/CareerPopup'
import EnrollmentForm from '@/components/form/EnrollmentForm'

interface Props {
  children: ReactNode
  showCareerPopup?: boolean
}

const MainLayout: FC<Props> = ({ children, showCareerPopup = true }) => {
  const [enrollOpen, setEnrollOpen] = useState(false)

  return (
    <Box component="main">
      <Header />
      {children}
      <Footer />
      {showCareerPopup && <CareerPopup onEnrollClick={() => setEnrollOpen(true)} />}
      <EnrollmentForm
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName="Career Launch Program"
        coursePrice={25000}
      />
    </Box>
  )
}

export default MainLayout
