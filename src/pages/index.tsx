// pages/index.tsx
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { postRequest } from 'src/services/apiService'
import { logoutUserData } from 'src/services/authService'
import { useRouter } from 'next/navigation'

const Home = (props: any) => {
  console.log('props', props)

  const { session } = props
  const router = useRouter()
  const reciredtNewPortal = () => {
    console.log('session details before redirect')
    console.log(session)

    window.open(
      `http://localhost:3004/sso-login?token=${session.accessToken}`,
      '_blank' // <- This is what makes it open in a new window.
    )
  }

  return (
    <div>
      <h1>Home Page</h1>
      {session ? <p>Welcome, {session.user?.name}</p> : <p>You are not logged in</p>}

      <button onClick={reciredtNewPortal}>Login to new portal</button>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const session: any = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      props: {
        session: null
      }
    }
  }

  if (session) {
    const params = {
      url: 'marketing/auth/validate/key-cloak',
      headers: {
        Authorization: `Bearer ${session.accessToken}`
      }
    }
    const response = await postRequest(params)
    Object.keys(session).forEach(key => session[key] === undefined && delete session[key])
    Object.keys(session.user).forEach(key => session.user[key] === undefined && delete session.user[key])
    console.log('session-response', session, response)

    if (response.status && response.data.status) {
      return {
        props: {
          session: session || null
        }
      }
    } else {
      const logoutPath = logoutUserData(session)

      return {
        redirect: {
          destination: logoutPath?.url,
          permanent: false
        },
        props: {
          session: null
        }
      }
    }
  }
}

export default Home
