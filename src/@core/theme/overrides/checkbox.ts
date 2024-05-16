// ** Type Import
import { OwnerStateThemeType } from './'

const checkbox = () => {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: '2px',
          color: theme.palette.customColors.chipBorder,
          '&:hover': {
            backgroundColor: theme.palette.customColors.disabled,
            borderRadius: '100%'
          },
          '&.Mui-disabled': {
            color: theme.palette.customColors.chipBorder
          },
          '&.Mui-disabled.Mui-checked': {
            color: theme.palette.customColors.chipBorder
          },
          '&.MuiCheckbox-indeterminate': {
            color: theme.palette.customColors.chipBorder
          },
          '&.MuiCheckbox-colorDefault': {
            color: theme.palette.customColors.chipBorder,
            '&:hover': {
              backgroundColor: theme.palette.customColors.disabled,
              borderRadius: '100%'
            },
            '&.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            },
            '&.Mui-disabled': {
              color: theme.palette.customColors.chipBorder
            },
            '&.Mui-disabled.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            },
            '&.MuiCheckbox-indeterminate.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            }
          },
          '&.MuiCheckbox-colorPrimary': {
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.customColors.primaryLightest,
              borderRadius: '100%'
            },
            '&.Mui-checked': {
              color: theme.palette.primary.main
            },
            '&.Mui-disabled': {
              color: theme.palette.customColors.chipBorder
            },
            '&.Mui-disabled.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            },
            '&.MuiCheckbox-indeterminate.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            },
            '&.MuiCheckbox-indeterminate': {
              color: theme.palette.customColors.chipBorder
            }
          },
          '&.MuiCheckbox-colorSecondary': {
            color: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.customColors.primaryLightest,
              borderRadius: '100%'
            },
            '&.Mui-checked': {
              color: theme.palette.secondary.main
            },
            '&.Mui-disabled': {
              color: theme.palette.customColors.chipBorder
            },
            '&.Mui-disabled.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            },
            '&.MuiCheckbox-indeterminate.Mui-checked': {
              color: theme.palette.customColors.chipBorder
            },
            '&.MuiCheckbox-indeterminate': {
              color: theme.palette.customColors.chipBorder
            }
          }
        })
      }
    }
  }
}

export default checkbox
