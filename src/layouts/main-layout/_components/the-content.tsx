import type { ReactElement } from 'react'
import type { RouteConfigMeta } from '@/@types'
import React, { Suspense } from 'react'
import classes from '../index.module.less'
import { renderRoutes } from 'react-router-config'
import { Layout } from '@/antd'
import PageLoading from '@/components/page-loading'

const { Content } = Layout

const flattenRoute = (routes: Array<RouteConfigMeta>) => {
  const routeList = routes.reduce((pre: Array<RouteConfigMeta>, next) => {
    const children: Array<RouteConfigMeta> = next?.routes ? flattenRoute(next.routes) : [next]
    return [...pre, ...children]
  }, [])

  return routeList
}

const TheContent = (props: { routes: Array<RouteConfigMeta> }): ReactElement => {
  const routes = flattenRoute(props.routes)
  return (
    <Suspense fallback={<PageLoading />}>
      <Content className={classes.content}>{renderRoutes(routes)}</Content>
    </Suspense>
  )
}

export default TheContent
