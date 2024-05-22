import { createContext, useContext, useState, useEffect } from 'react'
import SpinnerBackdrop from '../../@core/components/backdrop-spinner'

export const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    isLoading: false
  })
  const [pagePaths, setPagePaths] = useState([])
  const [userPermissions, setUserPermissions] = useState([])
  useEffect(() => {
    const savedState = localStorage.getItem('userPermissionsState')
    if (savedState) {
      setUserPermissions(JSON.parse(savedState))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userPermissionsState', JSON.stringify(userPermissions))
  }, [userPermissions])

  return (
    <GlobalContext.Provider
      value={{ globalState, setGlobalState, pagePaths, setPagePaths, userPermissions, setUserPermissions }}
    >
      <>
        {globalState.isLoading ? <SpinnerBackdrop /> : ''}
        {children}
      </>
    </GlobalContext.Provider>
  )
}
