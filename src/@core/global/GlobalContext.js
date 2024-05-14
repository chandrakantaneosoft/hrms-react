import { createContext, useContext, useState } from 'react'

// import Spinner from '../../@core/components/spinner'
import SpinnerBackdrop from '../../@core/components/backdrop-spinner'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    isLoading: false
  })

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <>
        {globalState.isLoading ? <SpinnerBackdrop /> : ''}
        {children}
      </>
    </GlobalContext.Provider>
  )
}
