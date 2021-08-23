import { ReactElement, useEffect, useState } from 'react'
import type { RouteConfigMeta } from '@/@types'
import React, { createElement } from 'react'
import classes from '@/layouts/main-layout/index.module.less'
import { Layout } from '@/antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@/antd/icon'
import { collapsedAtom } from '@/store/app'
import { useRecoilState } from 'recoil'
import TheBreadcrumb from './the-breadcrumb'
import { useLocation } from 'react-router-dom'
import { mainRoutes } from '@/router'

const { Header } = Layout

const getBreadcrumbs = (path: string, routes: Array<RouteConfigMeta>): Array<string> => {
  for (const item of routes) {
    if (item.path === path) {
      return [item?.meta?.menu?.text]
    }
    if (item?.routes) {
      const target = item.routes.find((route: RouteConfigMeta) => route.path === path)
      if (target) {
        return [item?.meta?.menu?.text, target?.meta?.menu?.text]
      }

      const names = getBreadcrumbs(path, item.routes)
      return names.length > 0 ? [item?.meta?.menu?.text, ...names] : names
    }
  }

  return []
}

const TheHeader = (): ReactElement => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedAtom)
  const onCollapsedTrigger = () => setCollapsed((status) => !status)
  const [breadcrumbs, setBreadcrumbs] = useState<Array<string>>([])
  const location = useLocation()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbs(location.pathname, mainRoutes)
    setBreadcrumbs(breadcrumbs)
  }, [location, setBreadcrumbs])

  return (
    <Header className={classes.header}>
      <div className={classes.headerLeft}>
        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: classes.collapsedTrigger,
          onClick: onCollapsedTrigger,
        })}
        <TheBreadcrumb data={breadcrumbs} />
      </div>
    </Header>
  )
}

export default TheHeader
