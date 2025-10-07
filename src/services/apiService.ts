import { getToken, getTokenValue } from '../utils/helper'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AutoLogoutUser } from '../services/authService'
import { toast } from 'react-hot-toast'

const serviceURLList: any = {
  api: process.env.NEXT_PUBLIC_API_ENDPOINT
}
const token = getToken()
const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
  headers: {
    ...(token && { Authorization: `Bearer ${token.accessToken}` })
  }
})

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

const handleSignout = async () => {
  // const storageToken = localStorage.getItem('token')
  AutoLogoutUser()
}

const handleResponseError = (error: any) => {
  const res = {
    data: null,
    error: null
  }

  // if (error.response) {
  //   console.error('Response error:', error.response.data)
  //   console.error('Status code:', error.response.status)
  // } else if (error.request) {
  //   console.error('No response received:', error.request)
  // } else {
  //   console.error('Request error:', error.message)
  // }

  if (error?.response?.status === 401) {
    // If status code is 401 (Unauthorized), redirect to login page
    // window.location.href = '/401'
    toast.error('Unauthenticated Logging out')
    handleSignout()

    // throw new Error('Unauthorized')
  } else if (error?.response?.status === 403) {
    // If status code is 401 (Unauthorized), redirect to login page
    toast.error('Unauthorized')
    window.location.href = '/403'

    // throw new Error('Unauthorized')
  } else if (error?.response?.status === 500) {
    // alert(JSON.stringify(response))
    toast.error('There Is An Internal Error')
  } else {
    // For other status codes, throw an error
    toast.error('There Is An Internal Error')
  }

  if (error?.response?.data) {
    res.error = error.response.data
  } else {
    res.error = error
  }

  return res
}

async function httpRequest(
  method: HttpMethod,
  endpoint: string,
  data?: any,
  headers: Record<string, string> = {},
  params?: any,
  serviceURL?: string
): Promise<any> {
  // const res = {
  //   data: null,
  //   error: null
  // }

  try {
    let token = null
    if (process.env.NODE_ENV == 'development') {
      token = getTokenValue()
    } else {
      // const session: any = await getSession()
      // token = session?.accessToken //|| tokenCookie
      token = getTokenValue()
    }

    const url = serviceURL ? serviceURLList[serviceURL] + endpoint : axiosInstance.defaults.baseURL + endpoint
    console.log('url', url, serviceURL, serviceURLList, process.env)

    const modifiedHeaders = {
      ...(token != undefined && endpoint != 'finance/auth/validate' && { Authorization: `Bearer ${token}` }),
      ...headers
    }

    const config: AxiosRequestConfig = {
      method: method,
      url: url,
      data: data,
      headers: {
        ...modifiedHeaders
      },
      params: params
    }
    const response: AxiosResponse = await axios(config)
    const jsonData = response.data

    return jsonData

    // return (res.data = response.data)
  } catch (err: any) {
    return handleResponseError(err)
  }
}

export const postRequest = async (params: any) => {
  return httpRequest('POST', `${params.url}`, params?.data, params.headers, null, params?.serviceURL)
}

export const getRequest = async (params: any) => {
  return httpRequest('GET', `${params.url}`, null, params.headers, params?.params, params.serviceURL)
}

export const deleteRequest = async (params: any) => {
  return httpRequest('DELETE', `${params.url}`, null, params.headers, null, params?.serviceURL)
}

export const putRequest = async (params: any) => {
  return httpRequest('PUT', `${params.url}`, params.data, params.headers, null, params?.serviceURL)
}
