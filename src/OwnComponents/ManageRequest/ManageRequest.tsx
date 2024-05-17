import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'

import { Button, Fab, IconButton, InputAdornment, TextField } from '@mui/material'
import UserIcon from 'src/layouts/components/UserIcon'
import Card from '@mui/material/Card'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import MuiPagination from '@mui/material/Pagination'
import { TablePaginationProps } from '@mui/material/TablePagination'
import { ThemeColor } from 'src/@core/layouts/types'
import { useRouter } from 'next/navigation'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import TableDialog from './Dialog/TableDialog'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useGlobalContext } from 'src/@core/global/GlobalContext'

// table for PS Code Modal
const columnsRolCode: GridColDef[] = [
  {
    field: 'uniqueCode',
    headerName: 'Unique Code',
    align: 'left',
    headerAlign: 'left',
    minWidth: 100,
    flex: 1
  },
  {
    field: 'board',
    headerName: 'Board',
    align: 'left',
    headerAlign: 'left',
    minWidth: 120,
    flex: 1
  },
  {
    field: 'section',
    headerName: 'Section',
    align: 'left',
    headerAlign: 'left',
    minWidth: 114,
    flex: 1
  },
  {
    field: 'department',
    headerName: 'Department',
    align: 'left',
    headerAlign: 'left',
    minWidth: 145,
    flex: 1
  },
  {
    field: 'subDepartment',
    headerName: 'Sub Department',
    align: 'left',
    headerAlign: 'left',
    minWidth: 100,
    flex: 1
  },
  {
    field: 'subSubDepartment',
    headerName: 'Sub Sub Department',
    align: 'left',
    headerAlign: 'left',
    minWidth: 135,
    flex: 1
  },
  {
    field: 'hrRole',
    headerName: 'HR Role',
    flex: 8,
    align: 'left',
    headerAlign: 'left',
    minWidth: 100
  }
]
const rowsRoleCode = [
  {
    id: 1,
    uniqueCode: '201PT037',
    board: 'ICSE',
    section: 'Primary',
    department: 'Academics',
    subDepartment: 'NA',
    subSubDepartment: 'NA',
    hrRole: 'Teacher'
  },
  {
    id: 2,
    uniqueCode: '201PT037',
    board: 'CBSE',
    section: 'Primary',
    department: 'Academics',
    subDepartment: 'NA',
    subSubDepartment: 'NA',
    hrRole: 'Coordinator'
  },
  {
    id: 3,
    uniqueCode: '201PT037',
    board: 'CBSE',
    section: 'Primary',
    department: 'Academics',
    subDepartment: 'NA',
    subSubDepartment: 'NA',
    hrRole: 'Coordinator'
  }
]

// table for Lob Assigned Modal
const columnsLobAssign: GridColDef[] = [
  {
    field: 'businessVertical',
    headerName: 'Business Vertical (LOB segment2 parent 2)',
    align: 'left',
    headerAlign: 'left',
    minWidth: 250,
    flex: 1
  },
  {
    field: 'businessSubVertical',
    headerName: 'Business Sub Vertical (LOB Segment2Parent1)',
    align: 'left',
    headerAlign: 'left',
    minWidth: 290,
    flex: 1
  },
  {
    field: 'businessSubSubvertical',
    headerName: 'Business sub sub vertical(LOB segment2 child)',
    align: 'left',
    headerAlign: 'left',
    minWidth: 290,
    flex: 1
  }
]
const rowsLobAssign = [
  {
    id: 1,
    businessVertical: '9901',
    businessSubVertical: '1801',
    businessSubSubvertical: '1003'
  },
  {
    id: 2,
    businessVertical: null,
    businessSubVertical: null,
    businessSubSubvertical: '1004'
  },
  {
    id: 3,
    businessVertical: null,
    businessSubVertical: '1802',
    businessSubSubvertical: '1005'
  },
  {
    id: 4,
    businessVertical: null,
    businessSubVertical: '1803',
    businessSubSubvertical: '1006'
  }
]

// type ManageRequestType = {
//   handleRoleDialog: (a: boolean) => void
//   openRoleDialog: boolean
// }

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

function Pagination({
  page,
  onPageChange,
  className
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
  const apiRef = useGridApiContext()
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <MuiPagination
      color='primary'
      className={className}
      count={pageCount}
      page={page + 1}
      shape='rounded'
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1)
      }}
    />
  )
}

function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={Pagination} {...props} />
}

function ManageRequest() {
  const router = useRouter()

  //Rows and column of data grid with status obj and click event
  const statusObj: StatusObj = {
    1: { title: 'Active', color: 'success' },
    2: { title: 'In-active', color: 'error' }
  }

  const handleEdit = (params: GridRenderCellParams) => {
    console.log(params, 'edit')
    router.push('/permanent-role/create-role/')
  }
  const handleDelete = (params: GridRenderCellParams) => {
    console.log(params, 'delete')
  }

  const columns: GridColDef[] = [
    {
      flex: 0.275,
      minWidth: 150,
      field: 'erpRole',
      headerName: 'ERP Role'
    },
    {
      flex: 0.275,
      minWidth: 190,
      field: 'uniqueRole',
      headerName: 'HRIS Unique Role',
      renderCell: params => {
        return (
          <div style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClickOpen}>
            {params.value}
          </div>
        )
      }
    },
    {
      flex: 0.275,
      minWidth: 200,
      field: 'schoolCategories',
      headerName: 'School Categories'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'lobAssigned',
      headerName: 'LOB Assigned',
      renderCell: params => {
        return (
          <div style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleOpenLob}>
            {params.value}
          </div>
        )
      }
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'hrRole',
      headerName: 'HR Role'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'userAssigned',
      headerName: 'User Assigned',
      renderCell: params => {
        return (
          <div
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => router.push('/permanent-role/view-assign-user/')}
          >
            {params.value}
          </div>
        )
      }
    },

    // {
    //   flex: 0.2,
    //   type: 'date',
    //   minWidth: 120,
    //   headerName: 'Date',
    //   field: 'start_date',
    //   valueGetter: params => new Date(params.value),
    //   renderCell: (params: GridRenderCellParams) => (
    //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
    //       {params.row.start_date}
    //     </Typography>
    //   )
    // },
    // {
    //   flex: 0.2,
    //   minWidth: 110,
    //   field: 'salary',
    //   headerName: 'Salary',
    //   renderCell: (params: GridRenderCellParams) => (
    //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
    //       {params.row.salary}
    //     </Typography>
    //   )
    // },
    // {
    //   flex: 0.125,
    //   field: 'age',
    //   minWidth: 80,
    //   headerName: 'Age',
    //   renderCell: (params: GridRenderCellParams) => (
    //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
    //       {params.row.age}
    //     </Typography>
    //   )
    // },
    {
      flex: 0.2,
      minWidth: 110,
      field: 'status',
      headerName: 'Status',
      renderCell: (params: GridRenderCellParams) => {
        const status = statusObj[params.row.status]

        return (
          <CustomChip
            size='small'
            skin='light'
            color={status.color}
            label={status.title}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'action',
      headerName: 'Action',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <IconButton disableFocusRipple disableRipple onClick={() => handleEdit(params)}>
              <EditIcon />
            </IconButton>
            <IconButton disableFocusRipple disableRipple onClick={() => handleDelete(params)}>
              <DeleteIcon />
            </IconButton>
          </>
        )
      }
    }
  ]

  const rows = [
    {
      id: 1,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 1
    },
    {
      id: 2,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 1
    },
    {
      id: 3,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 2
    },
    {
      id: 4,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 2
    },
    {
      id: 5,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 2
    },
    {
      id: 6,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 2
    },
    {
      id: 7,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 2
    },
    {
      id: 8,
      erpRole: 'ERP Manager',
      uniqueRole: '02',
      schoolCategories: 'NA',
      lobAssigned: "All LOB's",
      hrRole: 'Principal',
      userAssigned: '20',
      status: 2
    }
  ]

  //All states here

  const [searhRole, setSearchRole] = useState<string>('')
  const [data] = useState(rows)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [openPSCodeModal, setOpenPSCodeModal] = useState(false)
  const [openLobModal, setOpenLobModal] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { setPagePaths } = useGlobalContext()

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    // handleRoleDialog(true)
    router.push('/permanent-role/create-role')

    // setAnchorEl(event?.currentTarget)
  }

  //Hanlder for dialog box in mui datagrid
  const handleClickOpen = () => setOpenPSCodeModal(true)
  const handleClickClose = () => setOpenPSCodeModal(false)
  const handleOpenLob = () => setOpenLobModal(true)
  const handleCloseLob = () => setOpenLobModal(false)

  //handler for Menu Collapse create role button
  const open = Boolean(anchorEl)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //Passing Breadcrumbs
  useEffect(() => {
    setPagePaths([
      {
        title: 'Permanant Role',
        path: '/permanent-role'
      }
    ])
  }, [])

  return (
    <>
      <Box sx={{ background: '#fff', borderRadius: '10px' }}>
        <Grid container>
          <>
            <Grid item xs={12}>
              <Box
                sx={{
                  mt: 3,
                  ml: 3,
                  padding: '0px 10px',
                  display: 'flex',
                  justifyContent: { sm: 'flex-start', lg: 'flex-end' },
                  alignItems: 'center'
                }}
              >
                <TextField
                  className='custom-textfield'
                  value={searhRole}
                  placeholder='Search Invoice'
                  onChange={e => setSearchRole(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <UserIcon icon='mdi:magnify' />
                      </InputAdornment>
                    )
                  }}
                />
                <Fab
                  size='small'
                  sx={{
                    mr: 3,
                    '@media (max-width: 910px)': {
                      ml: 3
                    }
                  }}
                >
                  <SimCardDownloadOutlinedIcon />
                </Fab>
                <Button
                  variant='contained'
                  color='inherit'
                  sx={{
                    mr: 3,
                    '@media (max-width: 910px)': {
                      ml: 3
                    }
                  }}
                  startIcon={<FilterAltIcon />}
                >
                  filter
                </Button>

                <Button
                  variant='contained'
                  color='secondary'
                  onClick={e => handleChange(e)}
                  disableFocusRipple
                  disableTouchRipple
                  startIcon={<AddIcon />}
                >
                  Create
                </Button>
                {/* <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                >
                  <MenuItem color='primary' onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem color='primary' onClick={handleClose}>
                    My account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu> */}
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '25px' }}>
              {/* <TableFilter /> */}
              {/* <CardHeader title='Quick Filter' /> */}

              <DataGrid
                autoHeight
                columns={columns}
                pagination
                pageSizeOptions={[7, 10, 25, 50]}
                paginationModel={paginationModel}
                slots={{ pagination: CustomPagination }}
                onPaginationModelChange={setPaginationModel}
                rows={data}
                className='dataTable'
              />
            </Grid>
          </>
        </Grid>

        {openPSCodeModal && (
          <TableDialog
            openModal={openPSCodeModal}
            closeModal={handleClickClose}
            header='Total HRIS Unique Role Code'
            columnsRolCode={columnsRolCode}
            rowsRoleCode={rowsRoleCode}
          />
        )}
        {openLobModal && (
          <TableDialog
            openModal={openLobModal}
            closeModal={handleCloseLob}
            header='LOBs Assigned'
            columnsRolCode={columnsLobAssign}
            rowsRoleCode={rowsLobAssign}
          />
        )}
      </Box>
    </>
  )
}

export default ManageRequest
