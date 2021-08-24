import type { ReactElement } from 'react'
import React, { createElement } from 'react'
import classes from '@/layouts/main-layout/index.module.less'
import { Badge, Layout, Switch } from '@/antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined } from '@/antd/icon'
import { collapsedAtom, isDarkModeAtom } from '@/store/app'
import { useRecoilState } from 'recoil'
import TheBreadcrumb from './the-breadcrumb'
import TheTools from './the-tools'
import storage, { IS_DARK_MODE } from '@/utils/storage'
import { isUndef } from '@/utils/tools'
import { useEffectOnce } from 'react-use'

const { Header } = Layout

const getDarkMode = (): boolean => {
  const isDarkMode = storage.get(IS_DARK_MODE)
  if (!isUndef(isDarkMode)) {
    return isDarkMode
  }
  const nowHours = new Date().getHours()
  return nowHours > 19 || nowHours < 6
}

const TheHeader = (): ReactElement => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedAtom)
  const onCollapsedTrigger = () => setCollapsed((status) => !status)
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeAtom)
  const onTriggerDarkMode = (val: boolean) => {
    storage.set(IS_DARK_MODE, val)
    setIsDarkMode(val)
  }
  useEffectOnce(() => setIsDarkMode(getDarkMode()))

  return (
    <Header className={classes.header}>
      <div className={classes.headerLeft}>
        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: classes.collapsedTrigger,
          onClick: onCollapsedTrigger,
        })}
        <TheBreadcrumb />
      </div>
      <div className={classes.headerRight}>
        <div className={classes.themeMode}>
          <Switch
            checked={isDarkMode}
            checkedChildren="🌜"
            unCheckedChildren="🌞"
            onChange={onTriggerDarkMode}
          />
        </div>
        <Badge count={1}>
          <BellOutlined className={classes.message} />
        </Badge>
        <TheTools />
      </div>
    </Header>
  )
}

export default TheHeader
