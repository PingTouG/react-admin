import type { ReactElement } from 'react'
import type { RouteConfigMeta } from '@/@types'
import React, { useEffect, useState } from 'react'
import { Layout } from '@/antd'
import { collapsedAtom } from '@/store/app'
import { useRecoilValue } from 'recoil'
import TheLogo from './the-logo'
import TheMenu from './the-menu'
import { mainRoutes } from '@/router'
import { withRouter } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { activePathAtom } from '@/store/app'

const { Sider } = Layout

// 获取openKeys
const getOpenKeys = (path: string, routes: Array<RouteConfigMeta>): Array<string> => {
  for (const item of routes) {
    if (item?.routes) {
      if (item.routes.find((route: RouteConfigMeta) => route.path === path)) {
        return [item.path as string]
      }

      const paths = getOpenKeys(path, item.routes)
      return paths.length > 0 ? [item.path as string, ...paths] : paths
    }
  }

  return []
}

const TheSider = withRouter((props: any): ReactElement => {
  const collapsed = useRecoilValue(collapsedAtom)
  const { location, history } = props
  const [activePath, setActivePath] = useRecoilState(activePathAtom(location.pathname))
  const [selectedKeys, sekectSelectedKeys] = useState([activePath])
  const [openKeys, setOpenKeys] = useState<Array<string>>([])

  const onMenuClick = ({ key }: { key: string }) => {
    setActivePath(key)
    history.push(key)
  }

  useEffect(() => {
    // 设置当前打开菜单组
    const openKeys = getOpenKeys(location.pathname, mainRoutes)
    setOpenKeys(openKeys)
    sekectSelectedKeys(location.pathname)
  }, [location, collapsed])

  return (
    <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
      <TheLogo />
      <TheMenu
        mode="inline"
        theme="dark"
        routes={mainRoutes}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={onMenuClick}
        onOpenChange={setOpenKeys}
      />
    </Sider>
  )
})

export default TheSider
