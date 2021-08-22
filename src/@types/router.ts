import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { RouteConfig } from 'react-router-config'

export interface MenuItem {
  path: string
  text?: string
  icon?: ForwardRefExoticComponent<AntdIconProps & RefAttributes<HTMLSpanElement>>
}

export interface RouteConfigMeta extends RouteConfig {
  meta?: any
}
