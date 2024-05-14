import { useGlobalContext } from 'src/context/store'
import Error401 from 'src/pages/401'

export const Can = (props: any) => {
  const checkMatch = (userPermissions: any, permissions: any) => {
    let match = false
    const permissionsArr = Array.isArray(permissions) ? permissions : [permissions]
    if (permissionsArr.length === 0) {
      match = false
    } else {
      match = permissionsArr.some(p => userPermissions && userPermissions.includes(p))
    }

    return match
  }

  const { children, action, pagePermission } = props
  const { userPermissions } = useGlobalContext()
  const match = checkMatch(userPermissions, pagePermission)
  if (match) {
    return <>{children}</>
  } else {
    switch (action) {
      case 'HIDE':
        return null // Return null instead of undefined
      case 'REDIRECT':
        return <Error401 />
      default:
        return null
    }
  }
}
