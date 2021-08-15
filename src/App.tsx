import React, { Suspense } from 'react'
import type { ReactElement } from 'react'
import { renderRoutes } from 'react-router-config'
import { routes, AuthRoute } from '@/router'
import '@/assets/styles/app.less'
import { Spin } from '@/antd'

const App = (): ReactElement => {
  const Loading = () => {
    return (
      <div className="page-loading">
        <Spin />
      </div>
    )
  }
  return (
    <Suspense fallback={<Loading />}>
      <AuthRoute>{renderRoutes(routes)}</AuthRoute>
    </Suspense>
  )
}

export default App
