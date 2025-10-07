export function getToken() {
  const obj = typeof sessionStorage != 'undefined' ? sessionStorage.getItem('tokenData') : null
  const token = obj ? JSON.parse(obj) : null

  return token
}
export function setSessionStorage(key: any, value: any, isJson: boolean) {
  const obj = typeof window !== 'undefined' ? sessionStorage.setItem(key, isJson ? JSON.stringify(value) : value) : null

  return obj ? true : false
}

export function getObjectKeyVal(object: any, value: any) {
  return object.find((o: any) => o.id === value)
}
export function convertToTitleCase(str: string) {
  const words = str.split('_')
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  const result = capitalizedWords.join(' ')

  return result
}
export const calculateSerialNumber = (index: any, page: any, pageSize: any) => {
  return page * pageSize + index + 1
}

export const getOrderCount = (a: number) => {
  return Array.from({ length: a }).map((_, index) => {
    return { label: index + 1, value: index + 1 }
  })
}

export const getOrderCountArray = (a: number) => {
  return Array.from({ length: a }).map((_, index) => {
    return index + 1
  })
}

export function findMainObject(array: any, subStageId: string): any {
  for (let i = 0; i < array.length; i++) {
    const mainObj = array[i]
    const foundSubStage = mainObj.sub_lead.find((subStage: any) => subStage._id === subStageId)
    if (foundSubStage) {
      return { mainObject: mainObj, index: i }
    }
  }

  return null
}
export function getObjectKeyValSlug(object: any, value: any) {
  return object.find((o: any) => o.value === value)
}

export function findDifference(filteredValues: any, stageSelection: any) {
  // Find objects in array1 that are not present in array2
  const addedObjects = filteredValues.filter((obj1: any) => !stageSelection.some((obj2: any) => obj1.id === obj2.id))

  // Find objects in stageSelection that are not present in filteredValues
  const removedObjects = stageSelection.filter((obj2: any) => !filteredValues.some((obj1: any) => obj1.id === obj2.id))

  return { addedObjects, removedObjects }
}

export function validateSlug(slug: any) {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

  return slugRegex.test(slug)
}

export function getTokenValue() {
  const token = typeof localStorage != 'undefined' ? localStorage.getItem('token') : null

  return token
}

console.log(validateSlug('valid-slug')) // true
