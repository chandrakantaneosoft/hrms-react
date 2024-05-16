// ** Type Import
import { OwnerStateThemeType } from './'

const radio = () => {
  return {
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.customColors.mainText,
          '&:hover': {
            backgroundColor: theme.palette.customColors.disabled
          },
          '&.Mui-disabled': {
            color: theme.palette.customColors.disable
          },
          '&.MuiRadio-colorPrimary': {
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.customColors.primaryLightest
            },
            '&.Mui-disabled': {
              color: theme.palette.customColors.disable
            }
          },
          '&.MuiRadio-colorSecondary': {
            color: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.customColors.disabled
            },
            '&.Mui-disabled': {
              color: theme.palette.customColors.disable
            }
          }
        })
      }
    }
  }
}

export default radio
