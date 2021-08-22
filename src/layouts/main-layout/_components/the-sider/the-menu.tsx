import type { MenuItem, RouteConfigMeta } from '@/@types'
import React from 'react'
import type { ReactElement } from 'react'
import { Menu } from '@/antd'
import _compact from 'lodash/compact'

const { SubMenu } = Menu

// 获取菜单项
const getMenuItem = ({ path, text, icon: Icon }: MenuItem): ReactElement => (
  <Menu.Item key={path}>
    {Icon && <Icon />}
    <span>{text || ''}</span>
  </Menu.Item>
)

// 获取多级菜单
const getMenu = ({ path, routes, meta }: RouteConfigMeta) => {
  let MenuComponent = null
  const isRender = meta && !!meta.menu && !meta.menu.noRender

  if (isRender) {
    const {
      menu: { text, icon: Icon },
    } = meta

    // 递归获取多级菜单
    if (routes && routes.length > 0) {
      const menuChild = _compact(routes.map(getMenu))

      if (menuChild.length > 0) {
        MenuComponent = (
          <SubMenu key={path as string} icon={Icon && <Icon />} title={text || ''}>
            {menuChild}
          </SubMenu>
        )
      } else {
        MenuComponent = getMenuItem({ path: path as string, text, icon: Icon })
      }
    } else {
      MenuComponent = getMenuItem({ path: path as string, text, icon: Icon })
    }
  }

  return MenuComponent
}

const TheMenu = (props: any): ReactElement => {
  return <Menu {...props}>{props.routes.map((menu: RouteConfigMeta) => getMenu(menu))}</Menu>
}

export default TheMenu
