'use client'
import KeycloakProvider from 'next-auth/providers/keycloak'
import NextAuth from 'next-auth'

export const authOptions: any = {
  providers: [
    KeycloakProvider({
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENTID || '',
      clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET || '',
      issuer: `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}`
    })
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.id
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.idToken = token.idToken

      return session
    },
    async jwt({ token, user, account }: any) {
      if (user) {
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.idToken = account.id_token
      }

      return token
    }
  }
}

export default NextAuth(authOptions)
