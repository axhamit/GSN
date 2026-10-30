import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from '@/config/theme'

const aiTheme = createTheme(theme, {
  palette: {
    mode: 'dark',
    primary: {
      light: '#7dd3fc',
      main: '#38bdf8',
      dark: '#0284c7',
      contrastText: '#071426',
    },
    secondary: {
      light: '#93c5fd',
      main: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#071426',
      paper: '#0d1d33',
    },
    text: {
      primary: '#edf5ff',
      secondary: '#b7c8de',
    },
  },
})

const AIThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={aiTheme}>
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary' }}>{children}</Box>
  </ThemeProvider>
)

export default AIThemeProvider
