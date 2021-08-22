import type { ReactElement } from 'react'
import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { routes, AuthRoute } from '@/router'
import '@/assets/styles/app.less'
import PageLoading from '@/components/page-loading'

const App = (): ReactElement => {
  return (
    <Suspense fallback={<PageLoading />}>
      <AuthRoute>{renderRoutes(routes)}</AuthRoute>
    </Suspense>
  )
}

export default App
