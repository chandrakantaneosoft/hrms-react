// ** Type Import
import { OwnerStateThemeType } from './'

// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Util Import

const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({}: OwnerStateThemeType) => ({
          borderRadius: 40,
          height: '40px',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '21px',
          padding: '10px 24px',
          letterSpacing: 0.1
        }),

        contained: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiButton-containedInherit': {
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.grey[50],
            color: theme.palette.customColors.mainText,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.customColors.mainText
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButton-containedPrimary.MuiButtonGroup-groupedContainedPrimary': {
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderRightColor: theme.palette.primary.dark,
            '&:hover': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.customColors.primaryLightest,
              color: theme.palette.primary.main
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: '#F3F0F0',
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButton-containedPrimary': {
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.common.white
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: '#F3F0F0',
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButtonGroup-groupedHorizontal.MuiButtonGroup-groupedContainedSecondary': {
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.dark,
            borderRightColor: theme.palette.secondary.dark,
            '&:hover': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.secondary.dark
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: '#F3F0F0',
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButton-containedSecondary': {
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.dark,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.dark
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.customColors.mainText
            }
          }
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiButton-outlinedInherit': {
            boxShadow: theme.shadows[0],
            backgroundColor: 'transperent',
            color: theme.palette.customColors.mainText,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.customColors.mainText
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButton-outlinedPrimary.MuiButtonGroup-groupedOutlinedPrimary': {
            boxShadow: theme.shadows[0],
            backgroundColor: 'transperent',
            color: theme.palette.customColors.mainText,
            borderRightColor: theme.palette.primary.main,
            '&:hover': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.customColors.primaryLightest,
              color: theme.palette.primary.main
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: '#F3F0F0',
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButton-outlinedPrimary': {
            boxShadow: theme.shadows[0],
            backgroundColor: 'transperent',
            border: `1px solid ${theme.palette.grey[100]}`,
            color: theme.palette.primary.dark,
            '&.Mui-disabled': {
              border: '1px solid #1D1B20',
              backgroundColor: theme.palette.common.white,
              color: theme.palette.customColors.mainText
            },
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.customColors.primaryLighter,
              color: theme.palette.primary.dark,
              border: `1px solid ${theme.palette.primary.dark}`
            }
          },
          '&.MuiButton-outlinedSecondary.MuiButtonGroup-groupedOutlinedSecondary': {
            boxShadow: theme.shadows[0],
            backgroundColor: 'transperent',
            color: theme.palette.customColors.mainText,
            borderRightColor: theme.palette.secondary.main,
            '&:hover': {
              boxShadow: theme.shadows[0],
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.secondary.dark
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              backgroundColor: '#F3F0F0',
              color: theme.palette.customColors.mainText
            }
          },
          '&.MuiButton-outlinedSecondary': {
            boxShadow: theme.shadows[0],
            backgroundColor: 'transperent',
            border: `1px solid ${theme.palette.secondary.light}`,
            color: theme.palette.secondary.main,
            '&.Mui-disabled': {
              border: '1px solid #1D1B20',
              backgroundColor: theme.palette.common.white,
              color: theme.palette.customColors.mainText
            },
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              border: `1px solid ${theme.palette.secondary.light}`
            }
          }
        }),
        text: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiButton-textprimary': {
            boxShadow: theme.shadows[0],
            backgroundColor: 'transperent',
            color: theme.palette.primary.dark,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.customColors.primaryLighter,
              color: theme.palette.primary.dark
            },
            '&.Mui-disabled': {
              boxShadow: theme.shadows[0],
              border: '0px',
              backgroundColor: theme.palette.common.white,
              color: theme.palette.customColors.mainText
            }
          }
        })
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.contained': {
            backgroundColor: theme.palette.grey[50],
            color: theme.palette.customColors.mainText
          },
          '&.contained.MuiIconButton-colorPrimary': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
          },
          '&.contained.MuiIconButton-colorSecondary': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white
          },
          '&.contained.MuiIconButton-colorInfo': {
            backgroundColor: theme.palette.info.main,
            color: theme.palette.common.white
          },
          '&.contained.MuiIconButton-colorError': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white
          },
          '&.contained.MuiIconButton-colorSuccess': {
            backgroundColor: theme.palette.success.dark,
            color: theme.palette.common.white
          }
        })
      }
    }
  }
}

export default Button
