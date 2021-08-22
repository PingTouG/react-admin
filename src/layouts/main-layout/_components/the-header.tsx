import React, { createElement } from 'react'
import type { ReactElement } from 'react'
import classes from '../index.module.less'
import { Layout } from '@/antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@/antd/icon'
import { collapsedAtom } from '@/store/app'
import { useRecoilState } from 'recoil'

const { Header } = Layout

const TheHeader = (): ReactElement => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedAtom)
  const onCollapsedTrigger = () => setCollapsed((status) => !status)

  return (
    <Header className={classes.header}>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: classes.collapsedTrigger,
        onClick: onCollapsedTrigger,
      })}
    </Header>
  )
}

export default TheHeader
