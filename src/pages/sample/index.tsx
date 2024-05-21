import React, { useState } from 'react'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

const SearchBox: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchText('')
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant='outlined'
        value={searchText}
        onChange={handleInputChange}
        placeholder='Search By fee type'
        className='custom-search'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchText ? (
            <InputAdornment position='end'>
              <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={handleClearSearch}>
                <CancelOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ) : null
        }}
      />
    </Box>
  )
}

export default SearchBox
