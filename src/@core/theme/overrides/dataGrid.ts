// ** Type Import

import { borderRadius, color, fontSize, fontWeight, lineHeight, padding, textAlign } from '@mui/system'
import { OwnerStateThemeType } from './'

const DataGrid = () => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          border: 0,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[2],
          position: 'relative',

          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none'
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: theme.palette.customColors.bodyBg,

            '& .MuiDataGrid-columnHeaderDraggableContainer': {
              borderRadius: '0px',
              '& .MuiDataGrid-columnHeaderTitleContainer': {
                '& .MuiDataGrid-columnHeaderTitleContainerContent': {
                  '& .MuiDataGrid-columnHeaderTitle': {
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0.25px',
                    color: theme.palette.customColors.mainText,
                    textTransform: 'capitalize',
                    textAlign: 'center'
                  },
                  '& .MuiCheckbox-root': {
                    borderRadius: '2px',
                    color: theme.palette.grey[100],
                    '&:hover': {
                      backgroundColor: theme.palette.customColors.disabled,
                      borderRadius: '100%'
                    },
                    '&.Mui-disabled': {
                      color: theme.palette.customColors.chipBorder
                    },
                    '&.Mui-disabled.Mui-checked': {
                      color: theme.palette.grey[100]
                    }
                  }
                }
              }
            },

            '& .MuiDataGrid-iconButtonContainer': {
              '& .MuiIconButton-root': {
                color: theme.palette.customColors.text3,
                '&:hover': {
                  // backgroundColor: theme.palette.customColors.dividerColor
                }
              }
            },
            '&:not(.MuiDataGrid-columnHeader--sorted):hover .MuiDataGrid-sortIcon': {
              opacity: 1
            },
            '&:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon': {
              opacity: `${1} !important`,
              visibility: 'visible !important'
            }
          },

          '& .MuiDataGrid-menuIcon': {
            // opacity: `${1} !important`,
            // visibility: 'visible !important',

            '& .MuiIconButton-root': {
              color: theme.palette.customColors.inactive
            }
          },
          '& .MuiDataGrid-cell': {
            '& .MuiDataGrid-cellContent': {
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '21px',
              color: theme.palette.customColors.mainText,
              textTransform: 'capitalize'
            },
            '& .MuiCheckbox-root': {
              borderRadius: '2px',
              color: theme.palette.grey[100],
              '&:hover': {
                backgroundColor: theme.palette.customColors.disabled,
                borderRadius: '100%'
              },
              '&.Mui-disabled': {
                color: theme.palette.customColors.chipBorder
              },
              '&.Mui-disabled.Mui-checked': {
                color: theme.palette.grey[100]
              }
            }
          },
          '& .MuiDataGrid-virtualScroller': {
            '& .MuiDataGrid-virtualScrollerContent': {
              '& .MuiChip-root': {
                height: '34px',
                borderRadius: '100px',
                padding: '6px 0px',

                '& .MuiChip-label': {
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: 500,
                  textAlign: 'center'
                },
                '&.MuiChip-colorSuccess': {
                  color: theme.palette.success.dark,
                  backgroundColor: theme.palette.success.main
                },
                '&.MuiChip-colorError': {
                  color: theme.palette.secondary.dark,
                  backgroundColor: theme.palette.secondary.main
                },
                '&:hover': {
                  border: '0px'
                }
              }
            }
          }

          // '& .MuiDataGrid-cell:first-of-type, & .MuiDataGrid-columnHeader:first-of-type': {
          //   position: 'sticky',
          //   left: 0,
          //   zIndex: 1
          // },
          // '& .MuiDataGrid-cell:last-of-type, & .MuiDataGrid-columnHeader:last-of-type': {
          //   position: 'sticky',
          //   right: 0,
          //   zIndex: 1
          // }

          // '& .MuiDataGrid-footerContainer': {
          //   '& .MuiTablePagination-root': {
          //     width: '100%',
          //     '& .MuiToolbar-root': {
          //       display: 'flex',
          //       justifyContent: 'space-between',
          //       '& .MuiTablePagination-spacer': {
          //         display: 'none'
          //       },
          //       '& .MuiTablePagination-selectLabel': {
          //         fontSize: '14px',
          //         fontWeight: 400,
          //         lineHeight: '20px',
          //         letterSpacing: '0.25px',
          //         color: theme.palette.customColors.title
          //       },
          //       '& .MuiInputBase-root': {
          //         '& .MuiSelect-select': {
          //           fontSize: '14px',
          //           fontWeight: 400,
          //           lineHeight: '20px',
          //           letterSpacing: '0.25px',
          //           color: theme.palette.customColors.title

          //           // marginRight: '62% !important'
          //         },
          //         '& .MuiSvgIcon-root': {
          //           color: theme.palette.customColors.title
          //         }
          //       },
          //       '& .MuiTablePagination-displayedRows': {
          //         display: 'none'
          //       }
          //     }
          //   }
          // }
        }),
        toolbarContainer: ({ theme }: OwnerStateThemeType) => ({
          paddingRight: `${theme.spacing(5)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`
        }),

        columnHeaders: ({ theme }: OwnerStateThemeType) => ({
          backgroundColor: '#F5F5F7',
          borderRadius: '0px'
        }),
        columnHeader: ({ theme }: OwnerStateThemeType) => ({
          backgroundColor: '#F5F5F7',
          '&:not(.MuiDataGrid-columnHeaderCheckbox)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(5)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(5)
          }
        }),
        columnHeaderCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        columnHeaderTitleContainer: {
          padding: 0
        },
        columnHeaderTitle: {
          fontSize: '0.75rem',
          letterSpacing: '0.17px',
          textTransform: 'uppercase'
        },
        columnSeparator: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.divider
        }),
        row: {
          '&:last-child': {
            '& .MuiDataGrid-cell': {
              borderBottom: 0
            }
          }
        },
        cell: ({ theme }: OwnerStateThemeType) => ({
          border: 0,
          '&:not(.MuiDataGrid-cellCheckbox)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(5)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(5)
          },
          '&:focus, &:focus-within': {
            outline: 'none'
          }
        }),
        cellCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        editInputCell: ({ theme }: OwnerStateThemeType) => ({
          padding: 0,
          color: theme.palette.text.primary,
          '& .MuiInputBase-input': {
            padding: 0
          }
        }),
        footerContainer: ({ theme }: OwnerStateThemeType) => ({
          borderTop: `1px solid ${theme.palette.divider}`,
          '& .MuiTablePagination-root': {
            width: '100%',
            '& .MuiToolbar-root': {
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              '& .MuiTablePagination-spacer': {
                display: 'none'
              },
              '& .MuiTablePagination-selectLabel': {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.25px',
                color: theme.palette.customColors.title
              },
              '& .MuiInputBase-root': {
                '& .MuiTablePagination-select': {
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: theme.palette.customColors.title,
                  marginRight: '62% !important'
                },
                '& .MuiSvgIcon-root': {
                  color: theme.palette.customColors.mainText
                }
              },
              '& .MuiTablePagination-displayedRows': {
                display: 'none'
              },
              '& .MuiPagination-root': {
                width: 'calc(100% - 22%)',
                display: 'flex',
                justifyContent: 'end',
                '& .MuiPaginationItem-root': {
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '21px !important',
                  color: theme.palette.customColors.title
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  borderRadius: '4px',
                  padding: '0px 8px',
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.primary.dark
                }
              }
            }
          }
        }),
        selectedRowCount: ({ theme }: OwnerStateThemeType) => ({
          margin: 0,
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4)
        })
      }
    }
  }
}

export default DataGrid
