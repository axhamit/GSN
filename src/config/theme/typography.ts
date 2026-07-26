import { TypographyOptions } from '@mui/material/styles/createTypography'

export const fontFamily = [
  '"Cabin",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
].join(',')

const typography: TypographyOptions = {
  fontFamily,

  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 900,

  h1: {
    fontSize: '6rem', // 96px
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
  },

  h2: {
    fontSize: '4.5rem', // 72px
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
  },

  h3: {
    fontSize: '3.5rem', // 56px
    fontWeight: 800,
    lineHeight: 1.1,
  },

  h4: {
    fontSize: '2.5rem', // 40px
    fontWeight: 800,
    lineHeight: 1.15,
  },

  h5: {
    fontSize: '2rem', // 32px
    fontWeight: 700,
    lineHeight: 1.2,
  },

  h6: {
    fontSize: '1.5rem', // 24px
    fontWeight: 700,
    lineHeight: 1.3,
  },

  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },

  body2: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },

  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
  },

  subtitle2: {
    fontSize: '0.9rem',
    fontWeight: 500,
  },
}

export default typography