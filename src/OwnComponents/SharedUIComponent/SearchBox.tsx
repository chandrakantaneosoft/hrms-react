import React, { useState } from 'react'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

type SearchBoxType = {
  placeHolderTitle: string
  searchText: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClearSearch: () => void
}

const SearchBox = ({ placeHolderTitle, searchText, handleClearSearch, handleInputChange }: SearchBoxType) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant='outlined'
        value={searchText}
        onChange={handleInputChange}
        placeholder={placeHolderTitle}
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
