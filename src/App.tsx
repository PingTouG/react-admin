import React, { Suspense } from 'react'
import type { ReactElement } from 'react'
import { renderRoutes } from 'react-router-config'
import { routes, AuthRoute } from '@/router'

const App = (): ReactElement => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AuthRoute>{renderRoutes(routes)}</AuthRoute>
    </Suspense>
  )
}

export default App
