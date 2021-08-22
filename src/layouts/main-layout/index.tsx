import React, { useCallback, useEffect } from 'react'
import type { ReactElement } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from '@/antd'
import TheSider from './_components/the-sider'
import TheHeader from './_components/the-header'
import TheContent from './_components/the-content'
import { useWindowSize } from 'react-use'
import { collapsedAtom } from '@/store/app'
import { useSetRecoilState } from 'recoil'

const MainLayout = withRouter((props: any): ReactElement => {
  const { width } = useWindowSize()
  const setCollapsed = useSetRecoilState(collapsedAtom)

  const setCollapsedCallback = useCallback(() => setCollapsed(width <= 1200), [width, setCollapsed])
  useEffect(setCollapsedCallback, [setCollapsedCallback])

  return (
    <Layout>
      <TheSider />
      <Layout>
        <TheHeader />
        <TheContent routes={props.route.routes} />
      </Layout>
    </Layout>
  )
})

export default MainLayout
