// pages/index.tsx
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { postRequest } from 'src/services/apiService'

const Home = (props: any) => {
  console.log('props', props)
  const { session } = props

  return (
    <div>
      <h1>Home Page</h1>
      {session ? <p>Welcome, {session.user?.name}</p> : <p>You are not logged in</p>}
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
      return {
        props: {
          session: null
        }
      }
    }
  }
}

export default Home
