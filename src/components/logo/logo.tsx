import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  const router = useRouter()

  const handleClick = (): void => {
    if (onClick) {
      onClick()
    } else {
      router.push('/')
    }
  }

  return (
    <Box
      component="button"
      type="button"
      onClick={handleClick}
      aria-label="GSN Foundation home"
      sx={{
        flexShrink: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        border: 0,
        padding: 0,
        background: 'transparent',
        font: 'inherit',
      }}
    >
      <Box
        component="img"
        src="/images/logo_blue.png"
        alt="GSN Foundation"
        sx={{
          display: 'block',
          width: { xs: 104, md: 136 },
          height: { xs: 52, md: 68 },
          objectFit: 'contain',
          filter: variant === 'secondary' ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
