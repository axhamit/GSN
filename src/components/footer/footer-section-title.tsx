import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  title: string
}

const FooterSectionTitle: FC<Props> = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
      }}
    >
      <Typography
        component="p"
        variant="h5"
        sx={{
          color: 'primary.contrastText',
          fontWeight: 700,
          letterSpacing: '0.5px',
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Typography>

      {/* Education-themed underline highlight */}
      <Box
        sx={{
          width: '40px',
          height: '4px',
          borderRadius: '2px',
          mt: 0.5,
          backgroundColor: 'secondary.main', // emphasizes learning/skill UI colors
        }}
      />
    </Box>
  )
}

export default FooterSectionTitle
