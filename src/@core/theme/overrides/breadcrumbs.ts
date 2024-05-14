// ** Type Import
import { OwnerStateThemeType } from './'

const Breadcrumbs = () => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '18px',
          '& a': {
            textDecoration: 'none',
            color: theme.palette.customColors.inactive
          }
        }),

        li: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.customColors.inactive,
          '& a': {
            color: theme.palette.customColors.inactive
          },
          '& > .MuiLink-root': {
            textDecoration: 'none'
          },
          '& .MuiTypography-root': {
            color: theme.palette.customColors.mainText
          }
        })
      }
    }
  }
}

export default Breadcrumbs
