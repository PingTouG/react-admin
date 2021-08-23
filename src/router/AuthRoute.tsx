import type { ReactElement } from 'react'
import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import storage, { TOKEN } from '@/utils/storage'

const AuthRoute = ({ children }: { children: ReactElement }): ReactElement => {
  const location = useLocation()
  const token = storage.get(TOKEN)

  if (location.pathname !== '/login' && !token) {
    return <Redirect to="/login" />
  }

  return children
}

export default AuthRoute
