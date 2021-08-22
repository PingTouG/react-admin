import type { RouteConfigMeta } from '@/@types'
import { lazy } from 'react'
import { TeamOutlined } from '@/antd/icon'

const userRoutes: Array<RouteConfigMeta> = [
  {
    path: '/user',
    meta: {
      menu: {
        text: '用户管理',
        icon: TeamOutlined,
      },
    },
    routes: [
      {
        path: '/user/list',
        meta: {
          menu: {
            text: '用户列表',
          },
        },
        component: lazy(() => import('@/pages/user/list')),
      },
      {
        path: '/user/roles',
        meta: {
          menu: {
            text: '权限管理',
          },
        },
        component: lazy(() => import('@/pages/user/roles')),
      },
    ],
  },
]

export default userRoutes
