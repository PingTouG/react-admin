import type { ReactElement } from 'react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { collapsedAtom, isDarkModeAtom } from '@/store/app'
import LogoImg from '@/favicon.svg'
import classes from '@/layouts/main-layout/index.module.less'
import classNames from 'classnames'

const appName = import.meta.env.VITE_APP_NAME

const TheLogo = (): ReactElement => {
  const collapsed = useRecoilValue(collapsedAtom)
  const isDarkMode = useRecoilValue(isDarkModeAtom)

  return (
    <div className={classes.logo}>
      <img className={classes.logoImg} src={LogoImg} />
      <div
        className={classNames([classes.logoText, { [classes.logoTextDark]: isDarkMode }])}
        hidden={collapsed}
      >
        {appName}
      </div>
    </div>
  )
}

export default TheLogo
