// ** Type Imports
import { OwnerStateThemeType } from './'
import { Skin } from 'src/@core/layouts/types'

const Autocomplete = (skin: Skin) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.customColors.mainText,
          fontSize: '16px',
          fontWeight: 500
        }),
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiInputBase-root.MuiOutlinedInput-root': {
            '& .MuiAutocomplete-endAdornment': {
              top: '5px'
            }
          }
        })
      }
    }
  }
}

export default Autocomplete
