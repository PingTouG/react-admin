import type { RouteConfigMeta } from '@/@types'
import type { ReactElement } from 'react'
import React, { useState, useEffect } from 'react'
import classes from '@/layouts/main-layout/index.module.less'
import { Breadcrumb } from '@/antd'
import { useLocation } from 'react-router-dom'
import { mainRoutes } from '@/router'

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

const TheBreadcrumb = (): ReactElement => {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<string>>([])
  const location = useLocation()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbs(location.pathname, mainRoutes)
    setBreadcrumbs(breadcrumbs)
  }, [location, setBreadcrumbs])

  return (
    <div className={classes.breadcrumb}>
      <Breadcrumb>
        {breadcrumbs.map((item) => (
          <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default TheBreadcrumb
