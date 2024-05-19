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
import FileUploaderMultiple from './FileUploaderMultiple'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

type customModal = {
  title: string
  subTitle?: string
  openModal: boolean
  closeModal?: () => void
  handleSubmitClose?: () => void
}

function DropZoneDialog({ title, subTitle, openModal, closeModal, handleSubmitClose }: customModal) {
  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [maxWidths, setMaxWidths] = useState<any>('md')

  return (
    <>
      <Dialog maxWidth={maxWidths} open={openModal} onClose={closeModal} aria-labelledby='customized-dialog-title'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DialogTitle sx={{ color: '#313030', lineHeight: '24px' }} id='customized-dialog-title'>
            {title} <br />
            <span>{subTitle}</span>
          </DialogTitle>
          <IconButton disableFocusRipple disableRipple onClick={closeModal}>
            <HighlightOffIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <FileUploaderMultiple />
        </DialogContent>
        <DialogActions
          className='dialog-actions-dense'
          sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InsertDriveFileIcon sx={{ color: '#292D32' }} />
            <Typography sx={{ textTransform: 'capitalize' }} variant='button' color='primary.main'>
              Download Template
            </Typography>
          </Box>
          <Box>
            <Button variant='outlined' color='primary' onClick={closeModal}>
              Cancel
            </Button>
            <Button sx={{ ml: 3 }} variant='contained' color='primary' onClick={handleSubmitClose}>
              Submit
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DropZoneDialog
