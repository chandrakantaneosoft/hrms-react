// ** Type Import
import { margin } from '@mui/system'
import { OwnerStateThemeType } from './'

// const List = () => {
//   return {
//     MuiListItemIcon: {
//       styleOverrides: {
//         root: ({ theme }: OwnerStateThemeType) => ({
//           minWidth: '0 !important',
//           marginRight: theme.spacing(3),
//           color: theme.palette.text.secondary
//         })
//       }
//     },
//     MuiListItemAvatar: {
//       styleOverrides: {
//         root: ({ theme }: OwnerStateThemeType) => ({
//           minWidth: 0,
//           marginRight: theme.spacing(4)
//         })
//       }
//     },
//     MuiListItemText: {
//       styleOverrides: {
//         dense: ({ theme }: OwnerStateThemeType) => ({
//           '& .MuiListItemText-primary': {
//             color: theme.palette.text.primary
//           },
//           '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
//             lineHeight: 1.43
//           }
//         })
//       }
//     },
//     MuiListSubheader: {
//       styleOverrides: {
//         root: ({ theme }: OwnerStateThemeType) => ({
//           fontWeight: 600,
//           textTransform: 'uppercase',
//           color: theme.palette.text.primary
//         })
//       }
//     }
//   }
// }
const List = () => {
  return {
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '& .MuiListItemButton-root': {
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '& .MuiListItemAvatar-root': {
              minWidth: 0,
              marginRight: theme.spacing(4),
              marginTop: '-30px',
              '& .MuiAvatar-circular': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0.15px'
              }
            },
            '& .MuiListItemAvatar-root.Mui-center': {
              marginTop: '0px'
            },
            '& . MuiListItemText-root': {
              '& .MuiListItemText-primary': {
                color: theme.palette.customColors.text7,
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.5px'
              },
              '& .MuiListItemText-secondary': {
                color: theme.palette.customColors.textLabel,
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.25px'
              }
            }
          },
          '& .MuiListItemSecondaryAction-root': {
            top: '28% !important'
          },
          '& .MuiRadio-root': {
            marginTop: '-37px'
          },
          '& .MuiSvgIcon-root': {
            marginTop: '-39px'
          },
          '& .MuiSvgIcon-root.Mui-center': {
            marginTop: '0px'
          },
          '& .MuiSwitch-root': {
            marginRight: '10px !important',
            marginTop: '-35px'
          },
          '& .MuiSwitch-root.Mui-center': {
            marginRight: '10px !important',
            marginTop: '0px'
          }
        })
      }
    }

    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       minWidth: '0 !important',
    //       marginRight: theme.spacing(3),
    //       color: theme.palette.text.secondary,
    //       '& .MuiListItemSecondaryAction-root': {
    //         color: theme.palette.customColors.textLabel
    //       }
    //     })
    //   }
    // },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       color: theme.palette.customColors.textLabel
    //     })
    //   }
    // },
    // MuiListItemAvatar: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       minWidth: 0,
    //       marginRight: theme.spacing(4),
    //       '& .MuiAvatar-circular': {
    //         backgroundColor: theme.palette.primary.main,
    //         color: theme.palette.common.white,
    //         fontSize: '16px',
    //         fontWeight: 500,
    //         lineHeight: '24px',
    //         letterSpacing: '0.15px'
    //       }
    //     })
    //   }
    // },
    // MuiListItemText: {
    //   styleOverrides: {
    //     dense: ({ theme }: OwnerStateThemeType) => ({
    //       '& .MuiListItemText-primary': {
    //         color: theme.palette.customColors.text7,
    //         fontWeight: 400,
    //         fontSize: '16px',
    //         lineHeight: '24px',
    //         letterSpacing: '0.5px'
    //       },
    //       '& .MuiListItemText-secondary': {
    //         color: theme.palette.customColors.textLabel,
    //         fontWeight: 400,
    //         fontSize: '14px',
    //         lineHeight: '20px',
    //         letterSpacing: '0.25px'
    //       }
    //     })
    //   }
    // },
    // MuiListSubheader: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       fontWeight: 600,
    //       textTransform: 'uppercase',
    //       color: theme.palette.text.primary
    //     })
    //   }
    // }
  }
}

export default List
