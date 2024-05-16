// ** Type Imports
import { color, fontSize, fontWeight, lineHeight, maxHeight, padding, width } from '@mui/system'
import { OwnerStateThemeType } from './'
import { Skin } from 'src/@core/layouts/types'

const Menu = (skin: Skin) => {
  const boxShadow = (theme: OwnerStateThemeType['theme']) => {
    if (skin === 'bordered') {
      return theme.shadows[0]
    } else if (theme.palette.mode === 'light') {
      return theme.shadows[8]
    } else return theme.shadows[9]
  }

  return {
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiMenu-paper': {
            borderRadius: 8,
            padding:"8px 0px",
            minWidth:'121px',
            maxHeight:'304px',
            boxShadow: boxShadow(theme),
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          },
          '& .MuiListItemText-primary':{
            color:theme.palette.customColors.mainText,
            fontWeight:500,
            fontSize:'16px',
            lineHeight:'24px',
            letterSpacing:'0.5px',
          },
          '&.MuiMenu-papercolor':{
            '& .MuiMenu-paper':{
              backgroundColor:'#F3F0F0',
            },
            '& .MuiMenuItem-root:hover':{
              color:theme.palette.common.white,
              backgroundColor:theme.palette.customColors.disable,
            },
            '& .MuiListItemText-primary':{
              color:theme.palette.customColors.menuItemTextColor,
              fontSize:'16px',
              fontWeight:500,
              lineHeight:'24px',
              letterSpacing:'0.5px',
            },
          },
        })
      }
    },
    MuiListItemText: {
      styleOverrides: {
        dense: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiListItemText-primary':{
            color:theme.palette.customColors.mainText,
            fontWeight:500,
            fontSize:'16px',
            lineHeight:'24px',
            letterSpacing:'0.5px',
          }
        
        })
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          minWidth: '0 !important',
          width:'20px',
          height:'19px',
          marginRight: theme.spacing(3),
        })
      }
    },
    MuiSvgIcon:{
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.customColors.disable,
        })
      }
    },
  }
}

export default Menu
