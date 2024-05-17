import React, { useEffect } from 'react'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { logoutUser } from '../../services/authService'
import { useSession } from 'next-auth/react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Page: React.FC = () => {
  const session = useSession()

  const handleSignout = async () => {
    if (session?.data) {
      console.log(session.data, 'session>>')
      await logoutUser(session)
    } else {
      window.location.href = '/signout'
    }
  }

  useEffect(() => {
    // Add any side effects or initializations here
  }, [])

  return (
    <>
      <p>Welcome</p>
      <button
        onClick={() => {
          handleSignout()
        }}
      >
        Logout
      </button>
      <Box sx={{ flexGrow: 1 }}>
        <p>Dashboard Page</p>
      </Box>
    </>
  )
}

export default Page
