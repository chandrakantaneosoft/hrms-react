// ** Type Import

import { borderColor, color, fontSize, fontWeight, height, letterSpacing, lineHeight, maxWidth } from '@mui/system'
import { OwnerStateThemeType } from './'

const input = () => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.customColors.mainText,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.5px',
          fontWeight: 400,

          '&.MuiInputLabel-animated': {
            fontSize: '12px',

            letterSpacing: '0.4px',
            fontWeight: 400,
            color: theme.palette.customColors.textLabel,
            '&.Mui-disabled': {
              color: theme.palette.customColors.textLabel
            }
          },
          '&.Mui-error.Mui-focused': {
            color: theme.palette.error.dark
          },
          '&.Mui-error': {
            color: theme.palette.error.dark
          },
          '&.Mui-focused': {
            color: theme.palette.primary.dark
          },
          '&.Mui-disabled': {
            color: theme.palette.customColors.textLabel
          }
        })
      }
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: '1.5rem',
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
          },
          '&.Mui-disabled:before': {
            borderBottomStyle: 'solid'
          }
        })
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
          '&:hover:not(.Mui-disabled)': {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
          },
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
          },
          '&.Mui-disabled': {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.05)`,
            '&:before': {
              borderBottomStyle: 'solid'
            }
          }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 4,
          borderColor: '#767586',
          height: '56px',
          padding: '4px 16px',
          color: theme.palette.customColors.mainText,
          '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor: '#111111'
          },
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.dark,
            color: theme.palette.error.dark
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(73, 69, 79, 0.12)'
          },
          '&.Mui-focused': {
            borderColor: `${theme.palette.primary.dark}`
          }
        })
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.4px',
          fontWeight: 400,
          color: theme.palette.customColors.textLabel,

          '&.Mui-error.Mui-focused': {
            color: theme.palette.error.dark
          },

          '&.Mui-disabled': {
            color: theme.palette.customColors.textLabel
          },
          '&.Mui-focused': {
            color: theme.palette.primary.dark
          }
        })
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.custom-search': {
            '& .MuiOutlinedInput-root': {
              maxWidth: '360px',
              height: '45px',
              borderRadius: '28px',
              color: theme.palette.customColors.inactive,
              border: `1px solid ${theme.palette.customColors.inactive}`,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.5px',
              '&.Mui-focused': {
                fontWeight: 500,
                color: theme.palette.customColors.inactive,
                borderColor: `${theme.palette.customColors.inactive}`
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.customColors.inactive}`
              },
              '& .MuiInputAdornment-positionStart': {
                color: theme.palette.customColors.textLabel
              },
              '& .MuiInputAdornment-positionEnd': {
                color: theme.palette.customColors.inactive
              }
            }
          }
        })
      }
    }

    // MuiRadio: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       color: theme.palette.customColors.mainText,
    //       '&:hover': {
    //         backgroundColor: theme.palette.customColors.disabled
    //       },
    //       '&.Mui-disabled': {
    //         color: theme.palette.customColors.disable
    //       },
    //       '&.MuiRadio-colorPrimary': {
    //         color: theme.palette.primary.main,
    //         '&:hover': {
    //           backgroundColor: theme.palette.customColors.primaryLightest
    //         },
    //         '&.Mui-disabled': {
    //           color: theme.palette.customColors.disable
    //         }
    //       },
    //       '&.MuiRadio-colorSecondary': {
    //         color: theme.palette.secondary.main,
    //         '&:hover': {
    //           backgroundColor: theme.palette.customColors.disabled
    //         },
    //         '&.Mui-disabled': {
    //           color: theme.palette.customColors.disable
    //         }
    //       }
    //     })
    //   }
    // },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       borderRadius: '2px',
    //       color: theme.palette.customColors.chipBorder,
    //       '&:hover': {
    //         backgroundColor: theme.palette.customColors.disabled,
    //         borderRadius: '100%'
    //       },
    //       '&.Mui-disabled': {
    //         color: theme.palette.customColors.chipBorder
    //       },
    //       '&.Mui-disabled.Mui-checked': {
    //         color: theme.palette.customColors.chipBorder
    //       },
    //       '&.MuiCheckbox-indeterminate': {
    //         color: theme.palette.customColors.chipBorder
    //       },
    //       '&.MuiCheckbox-colorDefault': {
    //         color: theme.palette.customColors.chipBorder,
    //         '&:hover': {
    //           backgroundColor: theme.palette.customColors.disabled,
    //           borderRadius: '100%'
    //         },
    //         '&.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.Mui-disabled': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.Mui-disabled.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.MuiCheckbox-indeterminate.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         }
    //       },
    //       '&.MuiCheckbox-colorPrimary': {
    //         color: theme.palette.primary.main,
    //         '&:hover': {
    //           backgroundColor: theme.palette.customColors.primaryLightest,
    //           borderRadius: '100%'
    //         },
    //         '&.Mui-checked': {
    //           color: theme.palette.primary.main
    //         },
    //         '&.Mui-disabled': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.Mui-disabled.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.MuiCheckbox-indeterminate.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.MuiCheckbox-indeterminate': {
    //           color: theme.palette.customColors.chipBorder
    //         }
    //       },
    //       '&.MuiCheckbox-colorSecondary': {
    //         color: theme.palette.secondary.main,
    //         '&:hover': {
    //           backgroundColor: theme.palette.customColors.primaryLightest,
    //           borderRadius: '100%'
    //         },
    //         '&.Mui-checked': {
    //           color: theme.palette.secondary.main
    //         },
    //         '&.Mui-disabled': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.Mui-disabled.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.MuiCheckbox-indeterminate.Mui-checked': {
    //           color: theme.palette.customColors.chipBorder
    //         },
    //         '&.MuiCheckbox-indeterminate': {
    //           color: theme.palette.customColors.chipBorder
    //         }
    //       }
    //     })
    //   }
    // },
    // MuiBadge: {
    //   styleOverrides: {
    //     badge: ({ theme }: OwnerStateThemeType) => ({
    //       fontSize: '11px',
    //       lineHeight: '16px',
    //       fontWeight: 500,
    //       boxShadow: '0px !important',
    //       backgroundColor: 'transperent',
    //       '&.MuiBadge-dot': {
    //         width: '6px',
    //         height: '6px',
    //         minWidth: '6px',
    //         borderRadius: '50px',
    //         backgroundColor: theme.palette.customColors.badgeColorDefault,
    //         color: theme.palette.common.white,
    //         '&.MuiBadge-colorPrimary': {
    //           backgroundColor: theme.palette.primary.dark,
    //           color: theme.palette.common.white
    //         },
    //         '&.MuiBadge-colorSecondary': {
    //           backgroundColor: theme.palette.secondary.main,
    //           color: theme.palette.common.white
    //         },
    //         '&.MuiBadge-colorInfo': {
    //           backgroundColor: theme.palette.info.main,
    //           color: theme.palette.common.white
    //         },
    //         '&.MuiBadge-colorSuccess': {
    //           backgroundColor: theme.palette.success.main,
    //           color: theme.palette.success.dark
    //         },
    //         '&.MuiBadge-colorError': {
    //           backgroundColor: theme.palette.secondary.main,
    //           color: theme.palette.common.white
    //         }
    //       },
    //       '&.MuiBadge-standard': {
    //         width: '18px',
    //         height: '18px',
    //         minWidth: '18px',
    //         borderRadius: '50px',
    //         padding: '0px 4px',
    //         backgroundColor: theme.palette.customColors.badgeColorDefault,
    //         color: theme.palette.common.white,
    //         '&.MuiBadge-colorPrimary': {
    //           backgroundColor: theme.palette.primary.dark,
    //           color: theme.palette.common.white
    //         },
    //         '&.MuiBadge-colorSecondary': {
    //           backgroundColor: theme.palette.secondary.main,
    //           color: theme.palette.common.white
    //         },
    //         '&.MuiBadge-colorInfo': {
    //           backgroundColor: theme.palette.info.main,
    //           color: theme.palette.common.white
    //         },
    //         '&.MuiBadge-colorSuccess': {
    //           backgroundColor: theme.palette.success.main,
    //           color: theme.palette.success.dark
    //         },
    //         '&.MuiBadge-colorError': {
    //           backgroundColor: theme.palette.secondary.main,
    //           color: theme.palette.common.white
    //         }
    //       }
    //     })
    //   }
    // }
  }
}

export default input
