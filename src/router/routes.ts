import { lazy } from 'react'
import type { RouteConfig } from 'react-router-config'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/pages/home')),
  },
  {
    path: '/login',
    component: lazy(() => import('@/pages/user/login')),
  },
]

export default routes
