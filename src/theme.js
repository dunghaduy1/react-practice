import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: blueGrey
      }
    },
    dark: {
      palette: {
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Some CSS
          '*::webkit-scrollbar': {
            with: '8px',
            height: '8px'
          },
          '*::webkit-scrollbar-thumb': {
            backgroundColor: '#f50057',
            borderRadius: '8px'
          },
          '*::webkit-scrollbar-thumb:hover': {
            backgroundColor: '#ab003c'

          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme