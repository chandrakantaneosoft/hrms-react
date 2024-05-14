import { useEffect } from 'react'
import { signOut } from 'next-auth/react'

export default function Signout() {
  useEffect(() => {
    const clearSession = async () => {
      // Clear session cookies
      document.cookie = 'next-auth.session-token=; Max-Age=0; Path=/;'
      document.cookie = '__Secure-next-auth.session-token=; Max-Age=0; Path=/;'

      // Clear session storage
      if (typeof window !== 'undefined') {
        sessionStorage.clear()
      }

      // Sign out the user
      await signOut({ callbackUrl: '/', redirect: true })
    }

    clearSession()
  }, [])

  return null
}
