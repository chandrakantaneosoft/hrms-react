import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import {
  Button,
  Divider,
  Fab,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
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
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import { useGlobalContext } from 'src/@core/global/GlobalContext'
import DeleteDialog from '../CommonDialogBox/DeleteDialog'
import SuccessDialog from '../ManageRequest/Dialog/SuccessDialog'
import Link from 'next/link'
import DropZoneDialog from '../CommonDialogBox/DropZoneDialog'

// table for Lob Assigned Modal
const columnsLobAssign: GridColDef[] = [
  {
    field: 'parent2',
    headerName: 'Parent 2',
    align: 'left',
    headerAlign: 'left',
    minWidth: 250,
    flex: 1
  },
  {
    field: 'parent1',
    headerName: 'Parent 1',
    align: 'left',
    headerAlign: 'left',
    minWidth: 290,
    flex: 1
  },
  {
    field: 'childLOB',
    headerName: 'Child LOBs',
    align: 'left',
    headerAlign: 'left',
    minWidth: 290,
    flex: 1
  }
]
const rowsLobAssign = [
  {
    id: 1,
    parent2: '9901',
    parent1: '1801',
    childLOB: '1003'
  },
  {
    id: 2,
    parent2: null,
    parent1: null,
    childLOB: '1004'
  },
  {
    id: 3,
    parent2: null,
    parent1: '1802',
    childLOB: '1005'
  },
  {
    id: 4,
    parent2: null,
    parent1: '1803',
    childLOB: '1006'
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

function AdditionalDutyRoleListing() {
  const router = useRouter()

  //Rows and column of data grid with status obj and click event
  const statusObj: StatusObj = {
    1: { title: 'Active', color: 'success' },
    2: { title: 'In-active', color: 'error' }
  }

  const handleEdit = (params: GridRenderCellParams) => {
    console.log(params, 'edit')
    router.push('/additional-duty-role-listing/create-new-additional-duty-role')
  }

  const columns: GridColDef[] = [
    {
      flex: 0.275,
      minWidth: 150,
      field: 'dutyRolename',
      headerName: 'Additional duty role name'
    },
    {
      flex: 0.275,
      minWidth: 150,
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
          <div style={{ color: '#444A6D', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleOpenLob}>
            {params.value}
          </div>
        )
      }
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
            <Tooltip title='Edit'>
              <IconButton disableFocusRipple disableRipple onClick={() => handleEdit(params)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete'>
              <IconButton disableFocusRipple disableRipple onClick={() => handleDelete(params)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )
      }
    }
  ]

  const rows = [
    {
      id: 1,
      dutyRolename: 'ERP Manager',
      schoolCategories: 'NA',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 2,
      dutyRolename: 'Center In-charge',
      schoolCategories: '< 500',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 3,
      dutyRolename: 'ERP Manager',
      schoolCategories: '< 500',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 4,
      dutyRolename: 'Teaching Faculty',
      schoolCategories: '500 < 1000',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 5,
      dutyRolename: 'Center Academic In-charge',
      schoolCategories: '1000 < 1500',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 5,
      dutyRolename: 'Co-ordinator',
      schoolCategories: '2000',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 5,
      dutyRolename: 'ERP Manager',
      schoolCategories: 'NA',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 6,
      dutyRolename: 'ERP Manager',
      schoolCategories: 'NA',
      lobAssigned: '4',
      status: 1
    },
    {
      id: 7,
      dutyRolename: 'ERP Manager',
      schoolCategories: 'NA',
      lobAssigned: '4',
      status: 1
    }
  ]

  //All states here

  const [searhInvoice, setSearchInvoice] = useState<string>('')
  const [data] = useState(rows)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [openLobModal, setOpenLobModal] = useState(false)
  const { setPagePaths } = useGlobalContext()
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false)
  const [deleteRoleDialog, setDeleteRoleDialog] = useState<boolean>(false)
  const [openDropzone, setOpenDropzone] = useState<boolean>(false)
  const [openDropzoneSuccess, setOpenDropzoneSuccess] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  //Delete dialog funactionality
  //enable delete dialog
  const handleDelete = (params: GridRenderCellParams) => {
    setDeleteDialog(true)
  }

  //disable Delet Dialog
  const handleDeleteDialog = () => {
    setDeleteDialog(false)
  }

  //close delete and enable succes dialog
  const handleDeleteCloseDialog = () => {
    setDeleteDialog(false)
    setDeleteRoleDialog(true)
  }

  //close success dialog
  const handleDeleteRoleDialog = () => {
    setDeleteRoleDialog(false)
  }

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    // handleRoleDialog(true)
    // router.push('/additional-duty-role-listing/create-new-additional-duty-role')
    setAnchorEl(event?.currentTarget)
  }

  //Hanlder for dialog box in mui datagrid

  const handleOpenLob = () => setOpenLobModal(true)
  const handleCloseLob = () => setOpenLobModal(false)

  //Passing Breadcrumbs
  useEffect(() => {
    setPagePaths([
      {
        title: 'Additional Duty Listing',
        path: '/additional-duty-role-listing'
      }
    ])
  }, [])

  //handler for Menu Collapse create role button
  const open = Boolean(anchorEl)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //Handler for dropxzone
  const handleCloseDropzone = () => {
    setOpenDropzone(false)
  }

  const handleSubmitDropzone = () => {
    setOpenDropzone(false)
    setOpenDropzoneSuccess(true)
  }

  const handleSuccessClose = () => {
    setOpenDropzoneSuccess(false)
  }

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
                value={searhInvoice}
                placeholder='Search Invoice'
                onChange={e => setSearchInvoice(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <UserIcon icon='mdi:magnify' />
                    </InputAdornment>
                  )
                }}
              />
              <Tooltip title='Download Role List'>
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
              </Tooltip>
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
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
              >
                <Typography variant='body2'>
                  <Link href='/additional-duty-role-listing/create-new-additional-duty-role'>Create Role</Link>
                </Typography>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Divider />
                </Box>
                <Typography variant='body2'>
                  <Link href='#' onClick={() => setOpenDropzone(true)}>
                    Bulk Upload
                  </Link>
                </Typography>
              </Popover>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '25px' }}>
            {/* <TableFilter /> */}

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

        {openLobModal && (
          <TableDialog
            openModal={openLobModal}
            closeModal={handleCloseLob}
            header='LOBs Assigned'
            columnsRolCode={columnsLobAssign}
            rowsRoleCode={rowsLobAssign}
          />
        )}
        {deleteDialog && (
          <DeleteDialog
            openModal={deleteDialog}
            handleSubmitClose={handleDeleteCloseDialog}
            closeModal={handleDeleteDialog}
          />
        )}
        {deleteRoleDialog && (
          <SuccessDialog
            openDialog={deleteRoleDialog}
            title='Deleted Successfully'
            handleClose={handleDeleteRoleDialog}
          />
        )}
        {openDropzone && (
          <DropZoneDialog
            title='Bulk Upload Data'
            subTitle='Upload your data through csv or xls. file'
            openModal={openDropzone}
            closeModal={handleCloseDropzone}
            handleSubmitClose={handleSubmitDropzone}
          />
        )}
        {openDropzoneSuccess && (
          <SuccessDialog
            openDialog={openDropzoneSuccess}
            title='File Uploaded Successfully'
            handleClose={handleSuccessClose}
          />
        )}
      </Box>
    </>
  )
}

export default AdditionalDutyRoleListing
