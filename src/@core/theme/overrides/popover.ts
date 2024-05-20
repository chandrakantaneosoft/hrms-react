// ** Type Imports

import { fontSize, fontWeight, lineHeight } from '@mui/system'
import { OwnerStateThemeType } from './'
import { Skin } from 'src/@core/layouts/types'

const Popover = (skin: Skin) => {
  return {
    MuiPopover: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '8px 16px',
            textDecoration: 'none',
            boxShadow: theme.shadows[skin === 'bordered' ? 0 : 6],
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),

            '& .MuiTypography-root': {
              fontSize: '14px !important',
              fontWeight: 400,
              lineHeight: '20px',
              '& a': {
                textDecoration: 'none',
                color: theme.palette.primary.main
              }
            },
            '& .MuiDivider-root ': {
              borderWidth: '0px'
            }
          }
        })
      }
    }
  }
}

export default Popover
