import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

import typography from './typography'
import paletteBase from './palette-base'
import paletteLight from './palette-light'
import paletteDark from './palette-dark'
import shadows from './shadows'

// default
const createTheme = (darkMode?: boolean): Theme => {
  const palette = darkMode ? { ...paletteBase, ...paletteDark } : { ...paletteBase, ...paletteLight }
  return createMuiTheme({
    palette,
    typography,
    shadows,
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 44,
            borderRadius: 12,
            fontWeight: 700,
            textTransform: 'none',
            transition: 'background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',
            '&:focus-visible': {
              outline: `3px solid ${paletteBase.secondary.main}`,
              outlineOffset: 3,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            '&:before': { display: 'none' },
          },
        },
      },
    },
  })
}

const theme = createTheme(false)

export { paletteBase, paletteLight, paletteDark, typography, shadows }
export default theme
