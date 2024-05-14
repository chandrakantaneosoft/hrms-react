// ** Type Imports
import { borderRadius, color, fontSize, fontWeight, letterSpacing, lineHeight } from '@mui/system'
import { OwnerStateThemeType } from './'
import { Skin } from 'src/@core/layouts/types'

const Dialog = (skin: Skin) => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: '28px',
          boxShadow: theme.shadows[skin === 'bordered' ? 0 : 10],
          ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          '&:not(.MuiDialog-paperFullScreen)': {
            [theme.breakpoints.down('sm')]: {
              margin: theme.spacing(4),
              width: `calc(100% - ${theme.spacing(8)})`,
              maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
            }
          },
          '& > .MuiList-root': {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
          }
        })
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontSize: '24px !important',
          fontWeight: 400,
          lineHeight: '36px',
          color: theme.palette.customColors.text7,
          padding: theme.spacing(5)
        })
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiDialogContentText-root': {
            // fontSize: '14px',
            // fontWeight: 400,
            // lineHeight: '20px',
            // letterSpacing: '0.25px',
            // color: theme.palette.customColors.mainText
            backgroundColor: theme.palette.secondary.dark
          },

          padding: theme.spacing(5),
          '& + .MuiDialogContent-root': {
            paddingTop: 0
          },

          '& + .MuiDialogActions-root': {
            paddingTop: 0
          }
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(5),
          '&.dialog-actions-dense': {
            padding: theme.spacing(2.5),
            paddingTop: 0
          }
        })
      }
    }
  }
}

export default Dialog
