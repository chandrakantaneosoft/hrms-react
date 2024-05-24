import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, Grid, styled } from '@mui/material'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'firstName', headerName: 'First name', width: 350 },
  { field: 'lastName', headerName: 'Last name', width: 350 },
  { field: 'age', headerName: 'Age', width: 310 },
  { field: 'fullName', headerName: 'Full name', width: 160 }
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'Jon Snow' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: 'Cersei Lannister' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, fullName: 'Jaime Lannister' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, fullName: 'Arya Stark' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, fullName: 'Daenerys Targaryen' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, fullName: 'Melisandre' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, fullName: 'Ferrara Clifford' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, fullName: 'Rossini Frances' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: 'Harvey Roxie' }
]

const StyledBox = styled(Box)({
  display: 'flex',
  '& .MuiDataGrid-root': {
    '& .MuiDataGrid-cell': {
      '&:nth-of-type(1)': {
        position: 'sticky',
        left: 0,
        background: '#fff',
        zIndex: 1
      },
      '&:nth-of-type(5)': {
        position: 'sticky',
        right: 0,
        background: '#fff',
        zIndex: 1
      }
    },
    '& .MuiDataGrid-columnHeaders': {
      position: 'sticky',
      top: 0,
      zIndex: 2
    },
    '& .MuiDataGrid-columnHeader': {
      '&:nth-of-type(1)': {
        position: 'sticky',
        left: 0,
        background: '#fff',
        zIndex: 3
      },
      '&:nth-of-type(5)': {
        position: 'sticky',
        right: 0,
        background: '#fff',
        zIndex: 3
      }
    }
  }
})

export default function FixedColumnsGrid() {
  return (
    <StyledBox>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid rows={rows} columns={columns} autoHeight />
        </Grid>
      </Grid>
    </StyledBox>
  )
}

// import * as React from 'react'
// import { DataGrid } from '@mui/x-data-grid'
// import { styled } from '@mui/system'

// const CustomScrollbarDataGrid = styled(DataGrid)`
//   & .MuiDataGrid-root {
//     &::-webkit-scrollbar {
//       width: 12px; /* for vertical scrollbars */
//       height: 12px; /* for horizontal scrollbars */
//     }

//     &::-webkit-scrollbar-track {
//       background: #00000;
//     }

//     &::-webkit-scrollbar-thumb {
//       background-color: #888;
//       border-radius: 10px;
//       border: 3px solid #3333;
//     }

//     &::-webkit-scrollbar-thumb:hover {
//       background-color: #323232;
//     }
//   }
// `

// const columns = [
//   { field: 'id', headerName: 'ID', width: 300 },
//   { field: 'firstName', headerName: 'First name', width: 350 },
//   { field: 'lastName', headerName: 'Last name', width: 350 },
//   { field: 'age', headerName: 'Age', width: 310 },
//   { field: 'fullName', headerName: 'Full name', width: 160 }
// ]

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'Jon Snow' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: 'Cersei Lannister' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, fullName: 'Jaime Lannister' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, fullName: 'Arya Stark' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, fullName: 'Daenerys Targaryen' },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150, fullName: 'Melisandre' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, fullName: 'Ferrara Clifford' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, fullName: 'Rossini Frances' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: 'Harvey Roxie' }
// ]

// export default function CustomDataGrid() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <CustomScrollbarDataGrid rows={rows} columns={columns} />
//     </div>
//   )
// }
