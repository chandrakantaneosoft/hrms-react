// ** Type Import
import { display, fontSize, fontWeight, lineHeight } from '@mui/system'
import { OwnerStateThemeType } from './'

export default {
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100px',
        height: '48px'
      })
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21px',
        color: theme.palette.customColors.mainText,
        borderRadius: '40px',
        border: '1px solid #49454F1F',
        '&.Mui-selected': {
          border: `1px solid ${theme.palette.primary.dark}`,
          backgroundColor: theme.palette.customColors.primaryLightest,
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '21px',
          color: theme.palette.primary.dark
        },
        '&:hover': {
          border: `1px solid ${theme.palette.primary.dark}`,
          backgroundColor: theme.palette.customColors.primaryLightest,
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '21px',
          color: theme.palette.primary.dark
        }
      })
    }
  }
}
