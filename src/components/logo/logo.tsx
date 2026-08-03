import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{ flexShrink: 0, maxWidth: { xs: '70vw', md: 'none' } }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.1rem', sm: '1.3rem', md: '2rem' },
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
        }}
      >
        GSN<span>Foundation</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
