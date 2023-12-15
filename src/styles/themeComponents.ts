const themeComponents = {
  components: {
    MuiButton: {
      styleOverrides: {
        "root": ({ theme: { palette } }: any) => ({
          backgroundColor: palette.abz.primary.yellow,
          color: '#000',
          borderRadius: '80px',
          boxShadow: 'none',
          padding: '4px 16px',
          '&:hover': {
            backgroundColor: '#FFE302',
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            color: 'rgba(255, 255, 255, 0.87)',
            backgroundColor: '#B4B4B4',
            cursor: 'not-allowed',
            pointerEvents: 'auto'
          }
        })
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        "root": ({ theme: { palette } }: any) => ({
          color: palette.abz.primary.yellow,
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#7E7E7E',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CB3D40',
            borderWidth: '2px',
          }
        },
        input: {
          padding: '14px 16px',
        },
        notchedOutline: {
          borderColor: '#D0CFCF',
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#D0CFCF',
          padding: '3px 9px',
          '&.Mui-checked': {
            color: '#00BDD3'
          },
          '.MuiSvgIcon-root': {
            width: '20px',
            height: '20px',
          }
        }
      }
    }
  }
}

export default themeComponents
