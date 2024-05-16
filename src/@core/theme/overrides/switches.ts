// ** Type Import
import { border, borderColor, color, height, margin, padding, positions, width } from '@mui/system'
import { OwnerStateThemeType } from './'
import { left } from '@popperjs/core'

const Switch = () => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          width: 42,
          height: 26,
          padding: 0,
          overflow: 'initial',

          '& .MuiSwitch-switchBase.MuiSwitch-colorPrimary': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary.dark,
                opacity: 1,
                border: 0
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: theme.palette.customColors.inactive,
                border: '1px solid #767586',
                color: theme.palette.customColors.disabled
              },
              '& .MuiSwitch-thumb': {
                color: '#fff',
                width: 19,
                height: 19,
                margin: 2
              },
              '&:hover': {
                backgroundColor: theme.palette.customColors.primarySuperLight,
                padding: '5px',
                marginTop: '-3px',
                marginLeft: '-3px'
              }

              // '&.Mui-disabled .MuiSwitch-thumb': {
              //   color: theme.palette.customColors.disabled,
              //   width:19,
              //   height: 18,
              // },
            },
            '&.Mui-disabled': {
              opacity: 0.12
            },
            '&:hover': {
              backgroundColor: theme.palette.customColors.disableBorder,
              padding: '5px',
              marginTop: '-3px',
              marginLeft: '-3px'
            },

            // '&.Mui-focusVisible .MuiSwitch-thumb': {
            //   color: '#33cf4d',
            //   border: '6px solid #fff',
            // },
            // '&.Mui-disabled + .MuiSwitch-track': {
            //   opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            // },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 14,
              height: 14,
              margin: 4,
              color: '#535252',
              transition: 'width 300ms, height 300ms, margin 300ms',
              '&:hover': {
                width: '20px !important',
                height: '20px !important',
                margin: '2px !important'
              }
            }
          },
          '& .MuiSwitch-switchBase.MuiSwitch-colorSecondary': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.secondary.main,
                opacity: 1,
                border: 0
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: theme.palette.customColors.inactive,
                border: '1px solid #767586',
                color: theme.palette.customColors.disabled
              },
              '& .MuiSwitch-thumb': {
                color: '#fff',
                width: 19,
                height: 19,
                margin: 2
              },
              '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                padding: '5px',
                marginTop: '-3px',
                marginLeft: '-3px'
              }

              // '&.Mui-disabled .MuiSwitch-thumb': {
              //   color: theme.palette.customColors.disabled,
              //   width:19,
              //   height: 18,
              // },
            },
            '&.Mui-disabled': {
              opacity: 0.12
            },
            '&:hover': {
              backgroundColor: theme.palette.customColors.disableBorder,
              padding: '5px',
              marginTop: '-3px',
              marginLeft: '-3px'
            },

            // '&.Mui-focusVisible .MuiSwitch-thumb': {
            //   color: '#33cf4d',
            //   border: '6px solid #fff',
            // },
            // '&.Mui-disabled + .MuiSwitch-track': {
            //   opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            // },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 14,
              height: 14,
              margin: 4,
              color: '#535252',
              transition: 'width 300ms, height 300ms, margin 300ms',
              '&:hover': {
                width: '20px !important',
                height: '20px !important',
                margin: '2px !important'
              }
            }
          },

          // '& .MuiSwitch-thumb:hover':{
          //   // width: 14,
          //   // height: 14,
          //   // margin: 4,
          //   width: 22,
          //   height: 23,
          //   margin:0 -0.1,
          // },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.grey[50],
            border: '2px solid #767586',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500
            })
          }
        })
      }
    }
  }
}

export default Switch
