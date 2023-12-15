import { createTheme } from '@mui/material'
import themeComponents from './themeComponents'
import themePalette from './themePalette'


const theme = createTheme({
  ...themeComponents,
  ...themePalette,
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Nunito", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 400,
      fontSize: '40px',
      lineHeight: '40px',
      letterSpacing: '0.25px',
      color: '#000',
      textAlign: 'center',
    },
    h5: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '26px',
      letterSpacing: '0.25px',
      color: '#000'
    },
    h6: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '0.25px',
      color: '#000'
    },
    body1: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '26px',
      letterSpacing: '0.25px',
      color: '#000'
    },
    button: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '26px',
      letterSpacing: '1.25px',
      textTransform: 'none'
    },
  },
  shape: {
    borderRadius: 0.5
  },
})

export default theme
