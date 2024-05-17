// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogContent from '@mui/material/DialogContent'
import { Button, DialogActions, DialogTitle, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

type customModal = {
  openModal: boolean
  closeModal?: () => void
  handleSubmitClose?: () => void
}

function DeleteDialog({ openModal, closeModal, handleSubmitClose }: customModal) {
  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'))
  const [maxWidths, setMaxWidths] = useState<any>('lg')

  return (
    <>
      <Dialog open={openModal} onClose={closeModal} aria-labelledby='customized-dialog-title'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DialogTitle id='customized-dialog-title'>Delete Role</DialogTitle>
          <IconButton disableFocusRipple disableRipple onClick={closeModal}>
            {/* <UserIcon icon='mdi:close-circle-outline' /> */}
            <HighlightOffIcon />
          </IconButton>
        </Box>
        <DialogContent dividers>
          <Typography variant='body2'>Are You Sure You Want To Delete This Role?</Typography>
        </DialogContent>
        <DialogActions className='dialog-actions-dense' sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='outlined' color='primary' onClick={closeModal}>
            Cancel
          </Button>
          <Button variant='contained' color='primary' onClick={handleSubmitClose}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteDialog
