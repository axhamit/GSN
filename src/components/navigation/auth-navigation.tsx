import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 1.5 }, width: { xs: '100%', md: 'auto' }, '& button': { width: { xs: '100%', sm: 'auto' } } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
    </Box>
  )
}

export default AuthNavigation
