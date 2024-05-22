'use client'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import styled from '../enquiryType.module.css'
import { ThemeProvider } from '@mui/material'
import { Button, MenuItem, FormControl, InputLabel, Select as _select, FormControlLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import { getRequest, postRequest } from '../../../services/apiService'
import { useRouter } from 'next/router'
import { Switch, Grid, TextField } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import { putRequest } from '../../../services/apiService'
import { getObjectKeyValSlug, getOrderCount } from '../../../utils/helper'
import { useGlobalContext } from '../../../@core/global/GlobalContext'
import { Controller, useForm } from 'react-hook-form'
import { AutoCompleteSearch, ListObject } from '../../../components/AutoCompleteSearch'

interface FormData {
  typeName: string
  slug: string
  description: string
  enquiryOrder: string
  enquiryForm: any
  status: boolean
  sourceType: string
  sourceForm: any
  sourceUrl: string
}
export default function EditEnquiry() {
  const router = useRouter()
  const { id } = router.query
  const [count, setCount] = useState(0)
  const { setGlobalState, setPagePaths } = useGlobalContext()
  const [isSlugValid, setIsSlugValid] = useState(true)
  const [selectedForm, setSelectedForm] = useState({})
  const [formOptions, setFormOptions] = useState<any>([])

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
      description: '',
      enquiryForm: '',
      status: ''
    }
  })
  const [inputFields, setInputFields] = useState<any>([
    {
      sourceType: '',
      sourceForm: '',
      sourceUrl: ''
    }
  ])
  const [sources, setSources] = useState<any>([])
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
    setValue
  } = useForm<FormData>()
  const formDataVal = watch()

  const getTypeData = async () => {
    setGlobalState({
      isLoading: true
    })
    const params = {
      url: `/marketing/enquiry-type/${id}`
    }
    const response = await getRequest(params)
    if (response.status) {
      const data = response.data?.enquiry_sources?.map((val: any) => {
        return {
          sourceType: val.source_type,
          sourceForm: val.form_id,
          sourceUrl: val.url
        }
      })
      setInputFields(data)
      reset({
        typeName: response.data.enquiry_type_name,
        slug: response.data.enquiry_type_slug,
        description: response.data.description,
        enquiryOrder: response.data.enquiry_order,
        enquiryForm: getObjectKeyValSlug(formOptions, response.data.enquiry_form),
        status: response.data.status == 'active' ? true : false
      })
      setFormInp({
        ...formInp,
        formValues: {
          ...formInp.formValues,
          typeName: response.data.enquiry_type_name,
          slug: response.data.enquiry_type_slug,
          description: response.data.description,
          enquiryOrder: response.data.enquiry_order,
          enquiryForm: response.data.enquiry_form,
          status: response.data.status == 'active' ? true : false
        }
      })
    }
    const paylaod = {
      url: `/marketing/enquiry-type/subsource-list`
    }
    const resp = await getRequest(paylaod)
    if (resp.status) {
      const data = resp.data.map((val: any) => {
        return {
          label: val.subSourceName,
          value: val.subSourceId
        }
      })
      setSources(data)
    }
    setGlobalState({
      isLoading: false
    })
  }
  useEffect(() => {
    if (id) {
      getTypeData()
    }
  }, [id])

  const [message, setMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  const isFormInValid = () => {
    return Object.values(formInp.error).some(error => {
      return error != '' || error != null
    })
  }

  const feildsEmpty = () => {
    for (const key in formInp.formValues) {
      if (key !== 'description' && formInp.formValues.hasOwnProperty(key) && formInp.formValues[key] === '') {
        return true
      }
    }

    return false
  }
  const enquiryOrderOptions = [...getOrderCount(count)]

  const getDropDownData = async () => {
    const params = {
      url: 'marketing/enquiry-type/get-dropdowns'
    }
    const resp = await getRequest(params)
    const enquiryData = resp.data.enquiryForm.map((val: any, index: any) => {
      return { label: val.name, value: val._id, slug: val.slug }
    })
    setFormOptions(enquiryData)
    const enquiryTypeCount = resp.data.enquiryType.length
    setCount(enquiryTypeCount)
  }

  useEffect(() => {
    setPagePaths([
      {
        title: 'Edit Enquiry Type',
        path: ''
      }
    ])
    getDropDownData()
  }, [])

  const handleSave = async () => {
    try {
      console.log('FORMDATA', formDataVal)
      setGlobalState({
        isLoading: true
      })
      const formSlug: any = getObjectKeyValSlug(formOptions, formDataVal?.enquiryForm)
      const dynamicRequestBody = inputFields?.map((obj: any) => {
        return {
          source_type: obj.sourceType,
          form_id: obj.sourceForm,
          url: obj.sourceUrl
        }
      })
      const params = {
        url: `/marketing/enquiry-type/${id}`,
        data: {
          enquiry_type_name: formDataVal?.typeName,
          description: formDataVal?.description,
          enquiry_order: formDataVal?.enquiryOrder,
          enquiry_form: formDataVal?.enquiryForm.value,
          status: formDataVal?.status ? 'active' : 'inactive',
          enquiry_type_slug: formDataVal?.slug,
          enquiry_form_slug: formSlug?.slug,
          enquiry_sources: []
        }
      }
      const response = await putRequest(params)
      if (response.status) {
        setMessage(response.message)
        setShowToast(true)
        router.push(`/enquiry-type/map-stage/edit/${id}`)
      } else {
        setMessage(response.error.errorMessage)
        setShowToast(true)
      }
      setGlobalState({
        isLoading: false
      })
    } catch (e) {
      console.log('ERROR....', e)
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
    console.log('value', value)
    const feilds = [...inputFields]
    feilds[index][name] = value
    setInputFields(feilds)
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
      } else {
        setIsSlugValid(false)
      }
    }
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
              margin: '20px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          ></div>
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
                    error={!!errors.slug || !isSlugValid}
                    helperText={errors?.slug?.message || !isSlugValid ? 'Invalid Slug' : null}
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
              <div className={styled.dropWidth}>
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
                  {errors?.enquiryOrder && (
                    <span className={styled.errorFeild}>{errors['enquiryOrder']['message']}</span>
                  )}
                </FormControl>
              </div>
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
                    options={formOptions}
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
                            options={formOptions}
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
          </div>
        </Card>
        <div className={styled.flexContainer}>
          <div className={styled.col1}>
            <Button
              color='primary'
              size='medium'
              variant='contained'
              disabled={isFormInValid() && feildsEmpty()}
              onClick={handleSave}
              sx={{ mr: 2 }}
            >
              Update
            </Button>
            <Button
              color='primary'
              size='medium'
              variant='contained'
              onClick={() => {
                router.push('/enquiry-types')
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
