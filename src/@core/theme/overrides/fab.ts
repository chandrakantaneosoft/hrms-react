import { borderRadius, height, lineHeight } from '@mui/system'
import { OwnerStateThemeType } from './'

const Button = () => {
  return {
    MuiFab: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[0],

          // width: '56px',
          // height: '56px',
          borderRadius: '16px',
          backgroundColor: theme.palette.customColors.chipTonalBackground,
          color: theme.palette.customColors.mainText,
          '&:hover': {
            boxShadow: theme.shadows[1],
            backgroundColor: theme.palette.customColors.chipTonalBackground,
            color: theme.palette.customColors.mainText
          },
          '&.MuiFab-primary': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white
            }
          },
          '&.MuiFab-secondary': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.dark,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.dark
            }
          },
          '&.Mui-info': {
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.dark,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.info.main,
              color: theme.palette.info.dark
            }
          },
          '&.Mui-error': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.dark,
            '&:hover': {
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.dark
            }
          },
          '&.MuiFab-sizeSmall': {
            borderRadius: '12px'
          },
          '&.MuiFab-sizeLarge': {
            // borderRadius: '28px'
          },
          '&.MuiFab-extended.MuiFab-sizeLarge': {
            borderRadius: '16px',
            lineHeight: '20px'
          }
        })
      }
    }
  }
}

export default Button
