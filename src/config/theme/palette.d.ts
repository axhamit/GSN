import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    ai: Palette['primary']
  }

  interface PaletteOptions {
    ai?: PaletteOptions['primary']
  }
}
