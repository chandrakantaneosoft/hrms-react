// ** Type Import
import { fontSize, fontWeight, lineHeight } from '@mui/system'
import { OwnerStateThemeType } from './'

const Breadcrumbs = () => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiBreadcrumbs-ol': {
            '& .MuiBreadcrumbs-li': {
              '& .MuiTypography-root.MuiLink-root': {
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                color: theme.palette.customColors.mainText
              }
            }
          }
        })
      }
    }
  }
}

export default Breadcrumbs
