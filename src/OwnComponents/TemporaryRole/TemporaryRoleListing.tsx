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
import TableDialog from '../ManageRequest/Dialog/TableDialog'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import { useGlobalContext } from 'src/@core/global/GlobalContext'

// table for Lob Assigned Modal
// table for Lob Assigned Modal
const columnsUserAssign: GridColDef[] = [
  {
    field: 'empCode',
    headerName: 'Employee Code',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  },
  {
    field: 'empName',
    headerName: 'Employee Name',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  },
  {
    field: 'board',
    headerName: 'Board',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  },
  {
    field: 'section',
    headerName: 'Section',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  },
  {
    field: 'department',
    headerName: 'Department',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  },
  {
    field: 'subDepartment',
    headerName: 'Sub Department',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  },
  {
    field: 'subSubDepartment',
    headerName: 'Sub Sub Department',
    align: 'left',
    headerAlign: 'left',
    minWidth: 180,
    flex: 1
  }
]
const rowsUserAssign = [
  {
    id: 1,
    empCode: 'E123',
    empName: 'Priyanka',
    board: 'ICSE',
    section: 'Primary',
    department: 'Academics',
    subDepartment: 'NA',
    subSubDepartment: 'NA'
  },
  {
    id: 2,
    empCode: 'E124',
    empName: 'Maulika',
    board: 'CBSE',
    section: 'Primary',
    department: 'Academics',
    subDepartment: 'NA',
    subSubDepartment: 'NA'
  },
  {
    id: 3,
    empCode: 'E125',
    empName: 'Yash',
    board: 'CIE',
    section: 'MiddleSchool',
    department: 'Academics',
    subDepartment: 'NA',
    subSubDepartment: 'NA'
  }
]

// type AdditionalDutyRoleType = {
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

function TemporaryRoleListing() {
  const router = useRouter()

  //Rows and column of data grid with status obj and click event
  const statusObj: StatusObj = {
    1: { title: 'Active', color: 'success' },
    2: { title: 'In-active', color: 'error' }
  }

  const handleEdit = (params: GridRenderCellParams) => {
    console.log(params, 'edit')
    router.push('/temporary-role-listing/create-new-temporary-role')
  }

  const columns: GridColDef[] = [
    {
      flex: 0.275,
      minWidth: 150,
      field: 'tempErpRole',
      headerName: 'Temp ERP Role'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'roleType',
      headerName: 'Role Type'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'roleCreatedFor',
      headerName: 'Role Created For'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'userAssigned',
      headerName: 'User Assigned',
      renderCell: params => {
        return (
          <div style={{ color: '#444A6D', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleUserAssign}>
            {params.value}
          </div>
        )
      }
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'uniqueRole',
      headerName: 'HRIS Unique Role'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'uniqueRoleTo',
      headerName: 'HRIS Unique Role To'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'startDate',
      headerName: 'Start Date'
    },
    {
      flex: 0.275,
      minWidth: 150,
      field: 'endDate',
      headerName: 'End Date'
    },
    {
      flex: 0.2,
      minWidth: 100,
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
            {/* <IconButton disableFocusRipple disableRipple onClick={() => handleDelete(params)}>
              <DeleteIcon />
            </IconButton> */}
          </>
        )
      }
    }
  ]

  const rows = [
    {
      id: 1,
      tempErpRole: 'ERP Manager',
      roleType: 'Same as Permanent Role',
      roleCreatedFor: 'User',
      userAssigned: 'E123-Nittal',
      uniqueRole: 'CBSE Primary Primary NA NA...',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 2,
      tempErpRole: 'Center In-charge',
      roleType: 'Predefined Temp Role',
      roleCreatedFor: 'Multiple Users',
      userAssigned: '3',
      uniqueRole: 'NA',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 3,
      tempErpRole: 'Center In-charge',
      roleType: 'Custom Rights',
      roleCreatedFor: 'Role',
      userAssigned: 'NA',
      uniqueRole: 'NA',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 4,
      tempErpRole: 'Teaching Faculty',
      roleType: 'Same as Permanent Role',
      roleCreatedFor: 'Users',
      userAssigned: 'E123-Nittal',
      uniqueRole: 'NA',
      uniqueRoleTo: 'Principal',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 5,
      tempErpRole: 'ERP Manager',
      roleType: 'Same as Permanent Role',
      roleCreatedFor: 'User',
      userAssigned: 'E123-Nittal',
      uniqueRole: 'CBSE Primary Primary NA NA...',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 6,
      tempErpRole: 'Center In-charge',
      roleType: 'Predefined Temp Role',
      roleCreatedFor: 'Multiple Users',
      userAssigned: '3',
      uniqueRole: 'NA',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 7,
      tempErpRole: 'Center In-charge',
      roleType: 'Custom Rights',
      roleCreatedFor: 'Role',
      userAssigned: 'NA',
      uniqueRole: 'NA',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 8,
      tempErpRole: 'Teaching Faculty',
      roleType: 'Same as Permanent Role',
      roleCreatedFor: 'Users',
      userAssigned: 'E123-Nittal',
      uniqueRole: 'NA',
      uniqueRoleTo: 'Principal',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 9,
      tempErpRole: 'ERP Manager',
      roleType: 'Same as Permanent Role',
      roleCreatedFor: 'User',
      userAssigned: 'E123-Nittal',
      uniqueRole: 'CBSE Primary Primary NA NA...',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 10,
      tempErpRole: 'Center In-charge',
      roleType: 'Predefined Temp Role',
      roleCreatedFor: 'Multiple Users',
      userAssigned: '3',
      uniqueRole: 'NA',
      uniqueRoleTo: 'NA',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 11,
      tempErpRole: 'Center In-charge',
      roleType: 'Custom Rights',
      roleCreatedFor: 'Role',
      userAssigned: 'NA',
      uniqueRole: 'NA',
      uniqueRoleTo: 'Co-ordinator',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    },
    {
      id: 12,
      tempErpRole: 'Teaching Faculty',
      roleType: 'Same as Permanent Role',
      roleCreatedFor: 'Users',
      userAssigned: 'E123-Nittal',
      uniqueRole: 'NA',
      uniqueRoleTo: 'Vice Principal',
      startDate: '04-05-2024',
      endDate: '20-05-2024',
      status: 1
    }
  ]

  //All states here

  const [searhRole, setSearchRole] = useState<string>('')
  const [data] = useState(rows)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [userAssign, setUserAssign] = useState(false)
  const { setPagePaths } = useGlobalContext()

  const handleChange = () => {
    // handleRoleDialog(true)
    router.push('/temporary-role-listing/create-new-temporary-role')
  }

  //Hanlder for dialog box in mui datagrid

  const handleUserAssign = () => setUserAssign(true)
  const handleCloseUserAssign = () => setUserAssign(false)

  //Passing Breadcrumbs
  useEffect(() => {
    setPagePaths([
      {
        title: 'Temporary Role',
        path: '/temporary-role-listing'
      }
    ])
  }, [])

  return (
    <>
      <Box sx={{ background: '#fff', borderRadius: '10px' }}>
        <Grid container>
          {/* {!openRoleDialog && (
            <Grid item xs={12} className='breadcrumb-container'>
              <CommonHeader
                buttonTitle='Create Role'
                onPush={handleRoleDialog}
                title='Permanent Role'
                isButton={true}
                infoIcon={false}
              />
            </Grid>
          )} */}

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
                placeholder='Search Role'
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
                onClick={() => handleChange()}
                disableFocusRipple
                disableTouchRipple
                startIcon={<AddIcon />}
              >
                Create
              </Button>
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
        </Grid>

        {userAssign && (
          <TableDialog
            openModal={userAssign}
            closeModal={handleCloseUserAssign}
            header='Multiple Users Assigned'
            columnsRolCode={columnsUserAssign}
            rowsRoleCode={rowsUserAssign}
          />
        )}
      </Box>
    </>
  )
}

export default TemporaryRoleListing
