// ** Type Import
import { OwnerStateThemeType } from './'

const badge = () => {
  return {
    MuiBadge: {
      styleOverrides: {
        badge: ({ theme }: OwnerStateThemeType) => ({
          fontSize: '11px',
          lineHeight: '16px',
          fontWeight: 500,
          boxShadow: '0px !important',
          backgroundColor: 'transperent',
          '&.MuiBadge-dot': {
            width: '6px',
            height: '6px',
            minWidth: '6px',
            borderRadius: '50px',
            backgroundColor: theme.palette.customColors.badgeColorDefault,
            color: theme.palette.common.white,
            '&.MuiBadge-colorPrimary': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.common.white
            },
            '&.MuiBadge-colorSecondary': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white
            },
            '&.MuiBadge-colorInfo': {
              backgroundColor: theme.palette.info.main,
              color: theme.palette.common.white
            },
            '&.MuiBadge-colorSuccess': {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.dark
            },
            '&.MuiBadge-colorError': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white
            }
          },
          '&.MuiBadge-standard': {
            width: '18px',
            height: '18px',
            minWidth: '18px',
            borderRadius: '50px',
            padding: '0px 4px',
            backgroundColor: theme.palette.customColors.badgeColorDefault,
            color: theme.palette.common.white,
            '&.MuiBadge-colorPrimary': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.common.white
            },
            '&.MuiBadge-colorSecondary': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white
            },
            '&.MuiBadge-colorInfo': {
              backgroundColor: theme.palette.info.main,
              color: theme.palette.common.white
            },
            '&.MuiBadge-colorSuccess': {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.dark
            },
            '&.MuiBadge-colorError': {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.common.white
            }
          }
        })
      }
    }
  }
}

export default badge
