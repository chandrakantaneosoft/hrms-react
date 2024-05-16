// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { FormControl, InputLabel, Select, MenuItem, Divider } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import { Autocomplete, Chip, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import UserIcon from 'src/layouts/components/UserIcon'
import TreeViewCheckbox from '../ManageRequest/TreeViewCheckbox'
import SuccessDialog from '../ManageRequest/Dialog/SuccessDialog'
import { useRouter } from 'next/navigation'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginLeft: 0,
  '& .MuiSwitch-root': {
    width: 42,
    height: 26,
    padding: 0,
    marginRight: theme.spacing(3),
    '& .MuiSwitch-switchBase': {
      padding: 1,
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + .MuiSwitch-track': {
          opacity: 1,
          border: 'none',
          backgroundColor: '#3635C9'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      width: 24,
      height: 24
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      borderRadius: 13,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.action.selected : theme.palette.grey[50],
      border: `1px solid ${theme.palette.grey[400]}`,
      transition: theme.transitions.create(['background-color', 'border'])
    }
  }
}))

// type AddiionalCreateRoleType = {
//   handleRoleDialog: (a: boolean) => void
// }
type Autocomplete = {
  title: string
}

export const Auto1: Autocomplete[] = [
  { title: 'CBSE Primary NA NA Coordinator' },
  { title: 'CBSE Primary NA NA Coordinator' },
  { title: 'CBSE Primary NA NA Coordinator' },
  { title: 'CBSE Primary NA NA Coordinator' }
]

// Define a styled FormControl component
// const FormControl = styled(FormControl)<any>(({ theme, hasValue }) => ({
//   '& .MuiOutlinedInput-root': {
//     borderColor: hasValue ? 'black' : 'default', // Change border color when value is added
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#C6C8D2' // Border color when hovering
//     },
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#C6C8D2' // Border color when focused
//     }
//   },
//   '& .MuiInputLabel-root': {
//     color: hasValue ? 'black' : 'default', // Change label color when value is added
//     '&.Mui-focused': {
//       color: 'black' // Label color when focused
//     }
//   }
// }))

const steps = ['Create Role', 'Assign Role']

const AddiionalCreateRole = () => {
  const router = useRouter()

  // ** States
  const [dutyRoleName, setDutyRoleName] = useState<string>('Teaching Faculty')
  const [activeStep, setActiveStep] = useState<number>(0)
  const [selectedItems1, setSelectedItems1] = useState([])
  const [selectedItems2, setSelectedItems2] = useState([])
  const [selectedItems3, setSelectedItems3] = useState([])
  const [selectedItems4, setSelectedItems4] = useState([])
  const [openDialog, setOpenDialog] = useState(false)

  //Handler for multi select option
  const handleChange1 = (e: any) => {
    setSelectedItems1(e.target.value)
  }
  const handleChange2 = (e: any) => {
    setSelectedItems2(e.target.value)
  }
  const handleChange3 = (e: any) => {
    setSelectedItems3(e.target.value)
  }
  const handleChange4 = (e: any) => {
    setSelectedItems4(e.target.value)
  }
  const handleDelete = (itemToDelete: string) => () => {
    setSelectedItems1(selectedItems => selectedItems.filter(item => item !== itemToDelete))
    setSelectedItems2(selectedItems => selectedItems.filter(item => item !== itemToDelete))
    setSelectedItems3(selectedItems => selectedItems.filter(item => item !== itemToDelete))
    setSelectedItems4(selectedItems => selectedItems.filter(item => item !== itemToDelete))
  }

  //Handler for dialog box
  const handleCloseDialog = () => {
    setOpenDialog(false)
    router.push('/additional-duty-role-listing')

    // handleRoleDialog(false)
  }

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleClose = () => {
    // handleRoleDialog(false)
    router.push('/additional-duty-role-listing')
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  const handleSubmit = () => {
    if (activeStep === steps.length - 1) {
      setOpenDialog(true)
    }
  }

  // const handleReset = () => {
  //   setErpRoleName('')
  //   setActiveStep(0)
  // }

  //   const getStepContent = (step: number) => {
  //     switch (step) {
  //       case 0:
  //         return (
  //           <Fragment>
  //             <Grid item xs={12} sm={6}>
  //               <TextField
  //                 fullWidth
  //                 label='Additional Duty Role Name'
  //                 value={dutyRoleName}
  //                 placeholder='Additional Duty Role Name'
  //                 onChange={e => setDutyRoleName(e.target.value)}
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <FormControl
  //                 fullWidth

  //                 // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
  //               >
  //                 <InputLabel
  //                   style={{
  //                     marginTop: '0px',
  //                     background: 'white',
  //                     padding: '0 4px'
  //                   }}
  //                   id='demo-mutiple-chip-label'
  //                 >
  //                   School Categories{' '}
  //                 </InputLabel>
  //                 <Select
  //                   labelId='demo-mutiple-chip-label'
  //                   id='demo-mutiple-chip'
  //                   multiple
  //                   value={selectedItems1}
  //                   onChange={handleChange1}
  //                   renderValue={selected => (
  //                     <div
  //                       style={{
  //                         display: 'flex',
  //                         flexWrap: 'wrap',
  //                         overflowY: 'auto'
  //                       }}
  //                       className='scroller-hide'
  //                     >
  //                       {selected.map(value => (
  //                         <Chip
  //                           key={value}
  //                           label={value}
  //                           onDelete={handleDelete(value)}
  //                           deleteIcon={<UserIcon icon={'mdi:close'} />}
  //                           style={{ margin: 2 }}
  //                         />
  //                       ))}
  //                     </div>
  //                   )}
  //                 >
  //                   <MenuItem value='500'>500</MenuItem>
  //                   <MenuItem value='500-1000'>500-1000</MenuItem>
  //                   <MenuItem value='1000-1500'>1000-1500</MenuItem>
  //                   <MenuItem value='2000'>2000</MenuItem>
  //                 </Select>
  //               </FormControl>
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <div className='toggle-select'>
  //                 <span className='toggle-status'>Active</span>
  //                 <FormControlLabel label='' control={<Switch defaultChecked />} />
  //               </div>
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <FormControl
  //                 fullWidth

  //                 // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
  //               >
  //                 <InputLabel
  //                   style={{
  //                     marginTop: '0px',
  //                     background: 'white',
  //                     padding: '0 4px'
  //                   }}
  //                   id='demo-mutiple-chip-label'
  //                 >
  //                   Business Vertical (LOB segment2 parent 2)
  //                 </InputLabel>
  //                 <Select
  //                   labelId='demo-mutiple-chip-label'
  //                   id='demo-mutiple-chip'
  //                   multiple
  //                   value={selectedItems2}
  //                   onChange={handleChange2}
  //                   renderValue={selected => (
  //                     <div
  //                       style={{
  //                         display: 'flex',
  //                         flexWrap: 'wrap',

  //                         overflowY: 'auto'
  //                       }}
  //                       className='scroller-hide'
  //                     >
  //                       {selected.map(value => (
  //                         <Chip
  //                           key={value}
  //                           label={value}
  //                           onDelete={handleDelete(value)}
  //                           deleteIcon={<UserIcon icon={'mdi:close'} />}
  //                           style={{ margin: 2 }}
  //                         />
  //                       ))}
  //                     </div>
  //                   )}
  //                 >
  //                   <MenuItem value='9901'>9901</MenuItem>
  //                   <MenuItem value='9902'>9902</MenuItem>
  //                   <MenuItem value='9903'>9903</MenuItem>
  //                   <MenuItem value='>9904'>9904</MenuItem>
  //                 </Select>
  //               </FormControl>
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <FormControl
  //                 fullWidth

  //                 // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
  //               >
  //                 <InputLabel
  //                   style={{
  //                     marginTop: '0px',
  //                     background: 'white',
  //                     padding: '0 4px'
  //                   }}
  //                   id='demo-mutiple-chip-label'
  //                 >
  //                   Business Sub Vertical (LOB Segment2 Parent1)
  //                 </InputLabel>
  //                 <Select
  //                   labelId='demo-mutiple-chip-label'
  //                   id='demo-mutiple-chip'
  //                   multiple
  //                   value={selectedItems3}
  //                   onChange={handleChange3}
  //                   renderValue={selected => (
  //                     <div
  //                       style={{
  //                         display: 'flex',
  //                         flexWrap: 'wrap',

  //                         overflowY: 'auto'
  //                       }}
  //                       className='scroller-hide'
  //                     >
  //                       {selected.map(value => (
  //                         <Chip
  //                           key={value}
  //                           label={value}
  //                           onDelete={handleDelete(value)}
  //                           deleteIcon={<UserIcon icon={'mdi:close'} />}
  //                           style={{ margin: 2 }}
  //                         />
  //                       ))}
  //                     </div>
  //                   )}
  //                 >
  //                   <MenuItem value='2300'>2300</MenuItem>
  //                   <MenuItem value='2301'>2301</MenuItem>
  //                   <MenuItem value='2302'>2302</MenuItem>
  //                   <MenuItem value='2303'>2303</MenuItem>
  //                 </Select>
  //               </FormControl>
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <FormControl
  //                 fullWidth

  //                 // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
  //               >
  //                 <InputLabel
  //                   style={{
  //                     marginTop: '0px',
  //                     background: 'white',
  //                     padding: '0 4px'
  //                   }}
  //                   id='demo-mutiple-chip-label'
  //                 >
  //                   Business Sub Sub Vertical(LOB Segment2 Child)
  //                 </InputLabel>
  //                 <Select
  //                   labelId='demo-mutiple-chip-label'
  //                   id='demo-mutiple-chip'
  //                   multiple
  //                   value={selectedItems4}
  //                   onChange={handleChange4}
  //                   renderValue={selected => (
  //                     <div
  //                       style={{
  //                         display: 'flex',
  //                         flexWrap: 'wrap',

  //                         overflowY: 'auto'
  //                       }}
  //                       className='scroller-hide'
  //                     >
  //                       {selected.map(value => (
  //                         <Chip
  //                           key={value}
  //                           label={value}
  //                           onDelete={handleDelete(value)}
  //                           deleteIcon={<UserIcon icon={'mdi:close'} />}
  //                           style={{ margin: 2 }}
  //                         />
  //                       ))}
  //                     </div>
  //                   )}
  //                 >
  //                   <MenuItem value='2300'>2001</MenuItem>
  //                   <MenuItem value='2301'>2002</MenuItem>
  //                   <MenuItem value='2302'>2003</MenuItem>
  //                   <MenuItem value='2303'>2004</MenuItem>
  //                 </Select>
  //               </FormControl>
  //             </Grid>
  //             <Grid item xs={12} sm={12}>
  //               <Divider />
  //             </Grid>
  //             <Grid item xs={12} sm={12}>
  //               <Typography variant='body1'>
  //                 LOBs will appear based on the selected school category
  //                 <br />
  //                 If School Category is marked as NA then LOB selection will be allowed and
  //                 <br />
  //                 if school category is value then LOB will be preselected as per the selected category.
  //               </Typography>
  //             </Grid>
  //           </Fragment>
  //         )
  //       case 1:
  //         return (
  //           <Fragment key={step}>
  //             <Box sx={{ width: '100%', padding: '10px 10px' }}>
  //               <Box>
  //                 <Grid container>
  //                   <Grid item xs={12} md={6}>
  //                     <TextField
  //                       fullWidth
  //                       label='Additional Duty Role Name'
  //                       value={dutyRoleName}
  //                       placeholder='Additional Duty Role Name'
  //                       onChange={e => setDutyRoleName(e.target.value)}
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} md={5} sx={{ marginLeft: '50px' }}>
  //                     <div className='toggle-select'>
  //                       <span className='toggle-status'>Active</span>
  //                       <FormControlLabel label='' control={<Switch defaultChecked />} />
  //                     </div>
  //                   </Grid>
  //                 </Grid>
  //               </Box>
  //               <Divider sx={{ mt: 6 }} />

  //               <Box sx={{ mt: 2, mb: 2 }}>
  //                 <Typography
  //                   variant='h6'
  //                   sx={{
  //                     flexGrow: 1,
  //                     color: '#1D2939',
  //                     fontWeight: 'bold'
  //                   }}
  //                 >
  //                   Set Rights
  //                 </Typography>
  //                 <TreeViewCheckbox />
  //               </Box>
  //             </Box>
  //           </Fragment>
  //         )
  //     }
  //   }

  //   const renderContent = () => {
  //     return (
  //       <form onSubmit={e => e.preventDefault()}>
  //         <Grid container spacing={5}>
  //           <Grid item xs={12}>
  //             <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
  //               {/* {steps[activeStep]?.title} */}
  //             </Typography>
  //             <Typography variant='caption' component='p'>
  //               {/* {steps[activeStep].subtitle} */}
  //             </Typography>
  //           </Grid>

  //           {getStepContent(activeStep)}
  //           <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  //             <Button
  //               size='large'
  //               variant='outlined'
  //               color='secondary'
  //               sx={{ mr: 2 }}
  //               onClick={() => (activeStep === 0 ? handleClose() : handleBack())}
  //             >
  //               Cancel
  //             </Button>
  //             <Button size='large' variant='outlined' color='secondary' sx={{ mr: 2 }} onClick={handleBack}>
  //               Save As Draft
  //             </Button>
  //             <Button
  //               size='large'
  //               variant='contained'
  //               onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
  //               startIcon={<SkipNextIcon />}
  //             >
  //               Next
  //             </Button>
  //           </Grid>
  //         </Grid>
  //       </form>
  //     )
  //   }

  return (
    <Fragment>
      {/* <Card sx={{ mt: 4, width: '100%' }}> */}
      <Box sx={{ background: '#fff', borderRadius: '10px', padding: '20px 10px' }}>
        <Box sx={{ width: '100%', mt: 5, display: 'flex', justifyContent: 'space-around', alignItems: 'start' }}>
          <Box sx={{ width: '95%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {}

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </Box>
          <Box sx={{ width: '5%', mt: 4 }}>
            <InfoIcon style={{ color: '#FA5A7D' }} />
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          {activeStep === 0 && (
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Additional Duty Role Name'
                  value={dutyRoleName}
                  placeholder='Additional Duty Role Name'
                  onChange={e => setDutyRoleName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth

                  // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
                >
                  <InputLabel
                    style={{
                      marginTop: '0px',
                      background: 'white',
                      padding: '0 4px'
                    }}
                    id='demo-mutiple-chip-label'
                  >
                    School Categories{' '}
                  </InputLabel>
                  <Select
                    labelId='demo-mutiple-chip-label'
                    id='demo-mutiple-chip'
                    multiple
                    value={selectedItems1}
                    onChange={handleChange1}
                    renderValue={selected => (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          overflowY: 'auto'
                        }}
                        className='scroller-hide'
                      >
                        {selected.map(value => (
                          <Chip
                            variant='filled'
                            color='default'
                            key={value}
                            label={value}
                            onDelete={handleDelete(value)}
                            deleteIcon={<UserIcon icon={'mdi:close'} />}
                            style={{ margin: 2 }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value='500'>500</MenuItem>
                    <MenuItem value='500-1000'>500-1000</MenuItem>
                    <MenuItem value='1000-1500'>1000-1500</MenuItem>
                    <MenuItem value='2000'>2000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='toggle-select'>
                  <span className='toggle-status'>Active</span>
                  <FormControlLabel label='' control={<Switch defaultChecked />} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth

                  // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
                >
                  <InputLabel
                    style={{
                      marginTop: '0px',
                      background: 'white',
                      padding: '0 4px'
                    }}
                    id='demo-mutiple-chip-label'
                  >
                    Business Vertical (LOB segment2 parent 2)
                  </InputLabel>
                  <Select
                    labelId='demo-mutiple-chip-label'
                    id='demo-mutiple-chip'
                    multiple
                    value={selectedItems2}
                    onChange={handleChange2}
                    renderValue={selected => (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',

                          overflowY: 'auto'
                        }}
                        className='scroller-hide'
                      >
                        {selected.map(value => (
                          <Chip
                            variant='filled'
                            color='default'
                            key={value}
                            label={value}
                            onDelete={handleDelete(value)}
                            deleteIcon={<UserIcon icon={'mdi:close'} />}
                            style={{ margin: 2 }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value='9901'>9901</MenuItem>
                    <MenuItem value='9902'>9902</MenuItem>
                    <MenuItem value='9903'>9903</MenuItem>
                    <MenuItem value='>9904'>9904</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth

                  // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
                >
                  <InputLabel
                    style={{
                      marginTop: '0px',
                      background: 'white',
                      padding: '0 4px'
                    }}
                    id='demo-mutiple-chip-label'
                  >
                    Business Sub Vertical (LOB Segment2 Parent1)
                  </InputLabel>
                  <Select
                    labelId='demo-mutiple-chip-label'
                    id='demo-mutiple-chip'
                    multiple
                    value={selectedItems3}
                    onChange={handleChange3}
                    renderValue={selected => (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',

                          overflowY: 'auto'
                        }}
                        className='scroller-hide'
                      >
                        {selected.map(value => (
                          <Chip
                            variant='filled'
                            color='default'
                            key={value}
                            label={value}
                            onDelete={handleDelete(value)}
                            deleteIcon={<UserIcon icon={'mdi:close'} />}
                            style={{ margin: 2 }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value='2300'>2300</MenuItem>
                    <MenuItem value='2301'>2301</MenuItem>
                    <MenuItem value='2302'>2302</MenuItem>
                    <MenuItem value='2303'>2303</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth

                  // hasValue={selectedItems.length > 0} // Pass whether there is a value to the styled FormControl
                >
                  <InputLabel
                    style={{
                      marginTop: '0px',
                      background: 'white',
                      padding: '0 4px'
                    }}
                    id='demo-mutiple-chip-label'
                  >
                    Business Sub Sub Vertical(LOB Segment2 Child)
                  </InputLabel>
                  <Select
                    labelId='demo-mutiple-chip-label'
                    id='demo-mutiple-chip'
                    multiple
                    value={selectedItems4}
                    onChange={handleChange4}
                    renderValue={selected => (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',

                          overflowY: 'auto'
                        }}
                        className='scroller-hide'
                      >
                        {selected.map(value => (
                          <Chip
                            variant='filled'
                            color='default'
                            key={value}
                            label={value}
                            onDelete={handleDelete(value)}
                            deleteIcon={<UserIcon icon={'mdi:close'} />}
                            style={{ margin: 2 }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value='2300'>2001</MenuItem>
                    <MenuItem value='2301'>2002</MenuItem>
                    <MenuItem value='2302'>2003</MenuItem>
                    <MenuItem value='2303'>2004</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant='body2' sx={{ lineHeight: '20px', color: '#5D5FEF' }}>
                  LOBs will appear based on the selected school category
                  <br />
                  If School Category is marked as NA then LOB selection will be allowed and
                  <br />
                  if school category is value then LOB will be preselected as per the selected category.
                </Typography>
              </Grid>
            </Grid>
          )}
          {activeStep === 1 && (
            <>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Additional Duty Role Name'
                    value={dutyRoleName}
                    placeholder='Additional Duty Role Name'
                    onChange={e => setDutyRoleName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={5} sx={{ marginLeft: '50px' }}>
                  <div className='toggle-select'>
                    <span className='toggle-status'>Active</span>
                    <FormControlLabel label='' control={<Switch defaultChecked />} />
                  </div>
                </Grid>
              </Grid>

              <Divider sx={{ mt: 6 }} />

              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: '#1D2939',
                    fontWeight: 'bold'
                  }}
                >
                  Set Rights
                </Typography>
                <TreeViewCheckbox />
              </Box>
            </>
          )}
        </Box>
        <SuccessDialog openDialog={openDialog} handleClose={handleCloseDialog} />
        <Box sx={{ mt: 5, mb: 5 }}>
          <Divider />
        </Box>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            size='large'
            variant='contained'
            color='inherit'
            sx={{ mr: 2 }}
            onClick={() => (activeStep === 0 ? handleClose() : handleBack())}
          >
            Cancel
          </Button>
          <Button size='large' variant='contained' color='inherit' sx={{ mr: 2 }} onClick={handleBack}>
            Save As Draft
          </Button>
          <Button
            size='large'
            variant='contained'
            color='secondary'
            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
            startIcon={<SkipNextIcon />}
          >
            Next
          </Button>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default AddiionalCreateRole
