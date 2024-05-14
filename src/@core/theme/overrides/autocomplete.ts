// ** Type Imports
import { OwnerStateThemeType } from './'
import { Skin } from 'src/@core/layouts/types'

const Autocomplete = (skin: Skin) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[6],
          ...(skin === 'bordered' && { boxShadow: 'none', border: `1px solid ${theme.palette.divider}` }),
          color: theme.palette.customColors.mainText,
          fontSize: '16px',
          fontWeight: 500
        })
      }
    }
  }
}

export default Autocomplete
