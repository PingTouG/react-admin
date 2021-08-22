import type { RouteConfigMeta } from '@/@types'
import { lazy } from 'react'
import { RadarChartOutlined } from '@/antd/icon'
import userRoutes from './user'

export const mainRoutes: Array<RouteConfigMeta> = [
  {
    path: '/',
    exact: true,
    meta: {
      menu: {
        text: '仪表盘',
        icon: RadarChartOutlined,
      },
    },
    component: lazy(() => import('@/pages/dashboard')),
  },
  ...userRoutes,
]
