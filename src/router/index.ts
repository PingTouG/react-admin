import type { RouteConfigMeta } from '@/@types'
import { lazy } from 'react'
import MainLayout from '@/layouts/main-layout'
import { mainRoutes } from './routes'

export { BrowserRouter } from 'react-router-dom'
export { mainRoutes } from './routes'
export { default as AuthRoute } from './AuthRoute'
export const routes: Array<RouteConfigMeta> = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('@/pages/user/login')),
  },
  {
    path: '/',
    component: MainLayout,
    routes: mainRoutes,
  },
]
