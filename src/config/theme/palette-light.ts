import { PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'
import paletteBase from './palette-base'

const palette: PaletteOptions = {
  mode: 'light',
  ...paletteBase,
  background: {
    default: '#f2f5f5', //'#fdfdfd',
    paper: common.white,
  },
  text: {
    primary: grey[900],
    secondary: '#717171', // grey[700],
    disabled: grey[500],
  },
}

export default palette
