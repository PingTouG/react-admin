import React from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import storage, { TOKEN } from '@/utils/storage'

const AuthRoute = withRouter((props: any) => {
  const { children, history } = props

  const token = storage.get(TOKEN)

  if (history.location.pathname !== '/login' && !token) {
    return <Redirect to="/login" />
  }

  return children
})

export default AuthRoute
