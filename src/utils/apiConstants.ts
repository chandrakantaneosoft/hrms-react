import { getRequest } from '../services/apiService'

export const FOLLOWUP_TYPES = '/marketing/student-enquiries/followupType'
export const DROPDOWN_DATA = 'marketing/enquiry-type/get-dropdowns'

export const getFollowupTypes = async () => {
  const params = {
    url: FOLLOWUP_TYPES
  }
  const response = await getRequest(params)

  return response
}

export const getDropDownData = async () => {
  const params = {
    url: DROPDOWN_DATA
  }
  const resp = await getRequest(params)

  return resp
}
