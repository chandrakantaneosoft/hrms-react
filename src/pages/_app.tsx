// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports

import { defaultACLObj } from 'src/configs/acl'
import themeConfig from 'src/configs/themeConfig'

// ** Fake-DB Import
// import 'src/@fake-db'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import AclGuard from 'src/@core/components/auth/AclGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Contexts
import { AuthProvider } from 'src/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import '../../styles/globals.css'
import '../../styles/style.css'
import { SessionProvider } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { GlobalContextProvider } from 'src/context/store'
import { GlobalProvider } from '../@core/global/GlobalContext'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  // if (guestGuard) {
  //   return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  // } else if (!guestGuard && !authGuard) {
  //   return <>{children}</>
  // } else {
  //   return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  // }

  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [authGuard, setAuthGuard] = useState<boolean>(false)
  const [guestGuard, setguestGuard] = useState<boolean>(true)

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false
  const getLayout =
    Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  // const authGuard = Component.authGuard ?? true

  // const guestGuard = Component.guestGuard ?? false

  const aclAbilities = Component.acl ?? defaultACLObj

  useEffect(() => {
    if (props.pageProps.session?.accessToken) {
      localStorage.setItem('token', props.pageProps.session?.accessToken)
      localStorage.setItem('refreshToken', props.pageProps.session?.refreshToken)
      localStorage.setItem('idToken', props.pageProps.session?.idToken)

      localStorage.setItem('userDetails', JSON.stringify(props.pageProps.session?.user))
      setAuthGuard(true)
      setguestGuard(false)
    } else {
      setAuthGuard(false)
      setguestGuard(true)
    }

    // Example of accessing localStorage on the client side
    const token = localStorage.getItem('token')
    if (token) {
      setAuthGuard(true)
      setguestGuard(false)
    }
    console.log('authGuard', authGuard, guestGuard)
  }, [props.pageProps.session?.user])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Ampersand`}</title>
        <meta name='description' content={`${themeConfig.templateName} Ampersand`} />
        <meta name='keywords' content='Ampersand' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <GlobalProvider>
        <GlobalContextProvider>
          <AuthProvider>
            <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <SessionProvider session={pageProps.session}>
                      <ThemeComponent settings={settings}>
                        <Guard authGuard={authGuard} guestGuard={guestGuard}>
                          {/* <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}> */}
                          {guestGuard ? <Component {...pageProps} /> : getLayout(<Component {...pageProps} />)}
                          {/* </AclGuard> */}
                        </Guard>
                        <ReactHotToast>
                          <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                        </ReactHotToast>
                      </ThemeComponent>
                    </SessionProvider>
                  )
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </AuthProvider>
        </GlobalContextProvider>
      </GlobalProvider>
    </CacheProvider>
  )
}

export default App
