export function logoutUser(session: any) {
  const { data, status } = session
  if (status == 'authenticated') {
    const basePath = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${
      process.env.NEXT_PUBLIC_KEYCLOAK_REALM
    }/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/signout?logout=true`
    )}`

    const path = data.id_token
      ? `${basePath}&id_token_hint=${data.id_token}`
      : `${basePath}&client_id=${process.env.NEXT_PUBLIC_KEYCLOAK_CLIENTID}`

    window.open(path, '_self')
  }
}

export function AutoLogoutUser() {
  const basePath = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${
    process.env.NEXT_PUBLIC_KEYCLOAK_REALM
  }/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/signout?logout=true`
  )}`
  const path = `${basePath}&client_id=${process.env.NEXT_PUBLIC_KEYCLOAK_CLIENTID}`

  window.open(path, '_self')
}
