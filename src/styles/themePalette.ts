import { PaletteOptions } from '@mui/material'

export type ThemePaletteAbzType = {
  abz: {
    primary: {
      yellow: string,
    },
    secondary: {
      blue: string
    },
    background: {
      lightGray: string
    }
  }
}

export type ThemePaletteType = {
  palette: PaletteOptions & ThemePaletteAbzType
}

const themePalette: ThemePaletteType = {
  palette: {
    abz: {
      primary: {
        yellow: '#F4E041',
      },
      secondary: {
        blue: '#00BDD3'
      },
      background: {
        lightGray: '#F8F8F8'
      }
    }
  }
}

export default themePalette
