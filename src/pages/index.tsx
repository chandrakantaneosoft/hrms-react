import { postRequest } from 'src/services/apiService'
import { AutoLogoutUser } from 'src/services/authService'
import { getSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'

const Home = (props: any) => {
  const { session } = props

  // if (!session) {
  //   toast.error('There Is An Internal Error.')
  //   AutoLogoutUser()
  // }

  return (
    <div>
      <h1>Home Page</h1>
      {session ? <p>Welcome, {session.user?.name}</p> : <p>You are not logged in</p>}
    </div>
  )
}

export async function getServerSideProps(context: any) {
  if (process.env.NODE_ENV != 'development') {
    const session: any = await getSession(context)

    if (!session) {
      return {
        redirect: {
          destination: '/signIn',
          permanent: false
        }
      }
    }

    const params = {
      url: 'marketing/auth/validate/key-cloak',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`
      },
      serviceURL: 'marketing'
    }
    const response = await postRequest(params)
    if (response.status && response.data.status) {
      return {
        props: { session }
      }
    } else {
      return {
        redirect: {
          destination: '/signIn',
          permanent: false
        }
      }
    }
  } else {
    // In development mode, you can return a dummy session or handle accordingly
    const dummySession = { user: { name: 'Developer' }, accessToken: 'dummyToken' }

    return {
      props: { session: dummySession }
    }
  }
}

export default Home
