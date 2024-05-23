'use client'
import { useRouter } from 'next/router'
import styled from '../enquiryType.module.css'
import {
  Switch,
  Card,
  Typography,
  Snackbar,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select as _select,
  Button,
  FormControlLabel
} from '@mui/material'
import { useEffect, useState } from 'react'
import { getOrderCount, validateSlug } from '../../../utils/helper'
import { AutoCompleteSearch, ListObject } from '../../../components/AutoCompleteSearch'
import { Controller, useForm, useFieldArray } from 'react-hook-form'
import { Can } from 'src/components/Can'
import { getRequest, postRequest } from 'src/services/apiService'
import { useGlobalContext } from '../../../@core/global/GlobalContext'

interface FormData {
  typeName: string
  slug: string
  description: string
  enquiryOrder: string
  enquiryForm: any
  status: boolean
  enquiry_sources: any
  sourceType: string
  sourceForm: any
  sourceUrl: string
}
type GlobalState = {
  isLoading: boolean
}

export default function CreateEnquiry() {
  const router = useRouter()
  const [input, setInput] = useState<ListObject>()
  const [count, setCount] = useState(0)
  const [isSlugValid, setIsSlugValid] = useState(true)
  const [sources, setSources] = useState<any>([])
  const { setPagePaths } = useGlobalContext()

  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
    setValue
  } = useForm<FormData>()

  const formDataVal = watch()
  const [inputFields, setInputFields] = useState<any>([
    {
      sourceType: '',
      sourceForm: '',
      sourceUrl: ''
    }
  ])

  const [formInp, setFormInp] = useState<any>({
    formValues: {
      typeName: '',
      slug: '',
      description: '',
      enquiryOrder: '',
      enquiryForm: '',
      status: true
    },
    error: {
      typeName: '',
      slug: '',
      enquiryOrder: '',
      enquiryForm: '',
      status: ''
    }
  })
  const [message, setMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [enquiryForm, setEnquiryForm] = useState<ListObject[]>([])
  const { setGlobalState } = useGlobalContext()

  const getDropDownData = async () => {
    setGlobalState({
      isLoading: true
    })
    const params = {
      url: 'marketing/enquiry-type/get-dropdowns'
    }
    const resp = await getRequest(params)
    if (resp.status) {
      setGlobalState({
        isLoading: false
      })
      const enquiryData = resp.data.enquiryForm.map((val: any, index: any) => {
        return { label: val.name, value: val._id, slug: val.slug }
      })
      setEnquiryForm(enquiryData)
      const enquiryTypeCount = resp.data.enquiryType.length
      setCount(enquiryTypeCount)
    }
    const paylaod = {
      url: `/marketing/enquiry-type/subsource-list`
    }
    const response = await getRequest(paylaod)
    if (response.status) {
      setGlobalState({
        isLoading: false
      })
      const data = response.data.map((val: any) => {
        return {
          label: val.subSourceName,
          value: val.subSourceId
        }
      })
      setSources(data)
    }
  }
  useEffect(() => {
    setPagePaths([
      {
        title: 'Create Enquiry',
        path: 'enquiry-type/create'
      }
    ])
    getDropDownData()
  }, [])

  const enquiryOrderOptions = [...getOrderCount(count)]

  const handleSave = async () => {
    try {
      const dynamicRequestBody = inputFields.map((obj: any) => {
        return {
          source_type: obj.sourceType,
          form_id: obj.sourceForm?.value,
          url: obj.sourceUrl
        }
      })
      const params = {
        url: 'marketing/enquiry-type/create',
        data: {
          enquiry_type_name: formDataVal.typeName,
          description: formDataVal?.description,
          enquiry_order: formDataVal?.enquiryOrder,
          enquiry_form: formDataVal?.enquiryForm,
          status: formDataVal?.status ? 'active' : 'inactive',
          enquiry_type_slug: formDataVal?.slug,
          stage: [],
          enquiry_actions: [],
          enquiry_sources: dynamicRequestBody
        }
      }
      const response = await postRequest(params)
      if (response.status && response?.data) {
        setMessage(response.message)
        setShowToast(true)
      } else {
        setMessage(response.error.errorMessage)
        setShowToast(true)
      }
    } catch (error: any) {
      console.error('ERROR:', error)
    }
  }

  const handleBlur = async (e: any) => {
    const { value, name } = e.target
    if (value && formInp.error[name] !== 'Please enter valid slug') {
      const params = {
        url: '/marketing/enquiry-type/checkSlugName',
        data: {
          slug: value
        }
      }
      const response = await postRequest(params)
      if (response.status) {
        setIsSlugValid(response.data.isUnique)
      }
    }
  }
  const addFields = () => {
    const newfield = {
      sourceType: '',
      sourceForm: '',
      sourceUrl: ''
    }
    setInputFields([...inputFields, newfield])
  }

  const handleDeleteInput = (index: number) => {
    const newArray = [...inputFields]
    newArray.splice(index, 1)
    setInputFields(newArray)
  }

  const handleFeildChange = (e: any, index: number) => {
    const { value, name } = e.target
    const feilds = [...inputFields]
    feilds[index][name] = value
    setInputFields(feilds)
  }

  const handleSelectFeildChange = (e: any, val: any, index: number) => {
    const { value, name } = e.target
    const feilds = [...inputFields]
    feilds[index]['sourceForm'] = val
    setInputFields(feilds)
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={showToast}
        onClose={() => setShowToast(false)}
        message={message}
        autoHideDuration={1000}
        key={'top' + 'right'}
      />
      <form onSubmit={handleSubmit(handleSave)} noValidate>
        <Card variant='outlined' style={{ padding: '14px' }}>
          <div
            style={{
              //margin: "20px",
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <Typography variant='h5'>Create Enquiry Type</Typography>
            <Can pagePermission={['create_types_edit']} action='HIDE'>
              <Button
                color='primary'
                size='medium'
                variant='contained'
                onClick={() => router.push('/enquiry-types')}
                type='button'
              >
                Back
              </Button>
            </Can>
          </div>

          <div className={styled.flexContainer}>
            <div className={styled.col1}>
              <Controller
                name='typeName'
                control={control}
                defaultValue=''
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <TextField
                    sx={{ mt: 0 }}
                    {...field}
                    label='Enquiry Type Name'
                    fullWidth
                    variant='outlined'
                    margin='normal'
                    error={!!errors.typeName}
                    helperText={errors.typeName ? errors.typeName.message : null}
                  />
                )}
              />
            </div>
            <div className={styled.col2}>
              <Controller
                name='slug'
                control={control}
                defaultValue=''
                rules={{ pattern: { value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/, message: '' } }}
                render={({ field }) => (
                  <TextField
                    sx={{ mt: 0 }}
                    {...field}
                    label='Enquiry type-slug'
                    fullWidth
                    variant='outlined'
                    margin='normal'
                    error={!!errors.slug}
                    helperText={errors.slug ? errors.slug.message : null}
                    onBlur={e => {
                      handleBlur(e)
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className={styled.flexContainer}>
            <div className={styled.col1}>
              <FormControl fullWidth>
                <InputLabel id='followupType'>Follow up type</InputLabel>
                <Controller
                  name='enquiryOrder'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Follow up type is required' }}
                  render={({ field }) => (
                    <_select {...field} labelId='followupType' id='followupType' label='Follow up type'>
                      {enquiryOrderOptions.map((option: any, index: number) => (
                        <MenuItem key={index} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </_select>
                  )}
                />
                {errors?.enquiryOrder && <span className={styled.errorFeild}>{errors['enquiryOrder']['message']}</span>}
              </FormControl>
            </div>
            <div className={styled.col1}>
              <Controller
                name='enquiryForm'
                control={control}
                defaultValue=''
                rules={{ required: 'Enquiry Form is required' }}
                render={({ field }) => (
                  <AutoCompleteSearch
                    {...field}
                    onChange={(e, newVal) => {
                      setValue('enquiryForm', newVal.value)
                    }}
                    options={enquiryForm}
                    selectedValue={formDataVal.enquiryForm as ListObject}
                    TextFieldLabel='Enquiry Form'
                    TextFieldName='enquiryForm'
                  />
                )}
              />
            </div>
          </div>
          <div className={styled.flexContainer}>
            <div className={styled.fullCol}>
              <Controller
                name='description'
                control={control}
                defaultValue=''
                rules={{ required: 'Enquiry Form is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Description'
                    type='text'
                    id='description'
                    helperText={`Enter description`}
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
          <div className={styled.flexContainer}>
            <div className={styled.col1}>
              <Controller
                name='status'
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        size='small'
                        {...field}
                        checked={field.value}
                        onChange={e => field.onChange(e.target.checked)}
                      />
                    }
                    label='Status'
                  />
                )}
              />
            </div>
          </div>
          <Grid container spacing={2}>
            {inputFields?.map((val: any, index: number) => {
              return (
                <>
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel id='followupType'>Follow up type</InputLabel>
                      <Controller
                        name='sourceType'
                        control={control}
                        defaultValue=''
                        rules={{ required: 'Follow up type is required' }}
                        render={({ field }) => (
                          <_select
                            {...field}
                            labelId='followupTypel'
                            label='Follow up type'
                            onChange={(e: any) => {
                              handleFeildChange(e, index)
                            }}
                            value={val.sourceType}
                          >
                            {sources.map((option: any, index: any) => (
                              <MenuItem key={index} value={option.value} data-label={option.label}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </_select>
                        )}
                      />
                      {errors?.enquiryOrder && (
                        <span className={styled.errorFeild}>{errors['enquiryOrder']['message']}</span>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <Controller
                      name='sourceForm'
                      control={control}
                      defaultValue=''
                      rules={{ required: 'Enquiry Form is required' }}
                      render={({ field }) => (
                        <AutoCompleteSearch
                          {...field}
                          onChange={(e, newVal) => {
                            setValue('sourceForm', newVal.value)
                          }}
                          options={enquiryForm}
                          selectedValue={formDataVal.sourceForm as ListObject}
                          TextFieldLabel='Enquiry Form'
                          TextFieldName='enquiryForm'
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Controller
                      name='sourceUrl'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          sx={{ mt: 0 }}
                          {...field}
                          label='Source Url'
                          fullWidth
                          variant='outlined'
                          margin='normal'
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    {inputFields.length > 1 && (
                      <Button
                        color='primary'
                        size='medium'
                        startIcon={''}
                        variant='contained'
                        sx={{ mr: 2 }}
                        onClick={() => handleDeleteInput(index)}
                      >
                        Delete
                      </Button>
                    )}
                    {index === inputFields.length - 1 && (
                      <Button
                        color='primary'
                        size='medium'
                        variant='contained'
                        sx={{ mr: 2 }}
                        onClick={() => {
                          addFields()
                        }}
                      >
                        Add
                      </Button>
                    )}
                  </Grid>
                </>
              )
            })}
          </Grid>

          <div className={styled.flexContainer}>
            <div className={styled.col1}>
              <Button
                type='submit'
                color='primary'
                size='medium'
                variant='contained'
                sx={{ mr: 2 }}
                onClick={handleSave}
              >
                Save & Next
              </Button>
              <Button
                color='primary'
                variant='contained'
                onClick={() => {
                  router.push('/enquiry-types')
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </>
  )
}
