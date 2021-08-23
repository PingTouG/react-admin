import type { ReactElement } from 'react'
import React from 'react'
import classes from '@/layouts/main-layout/index.module.less'
import { Breadcrumb } from '@/antd'

const TheBreadcrumb = ({ data }: { data: Array<string> }): ReactElement => {
  return (
    <div className={classes.breadcrumb}>
      <Breadcrumb>
        {data.map((item) => (
          <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default TheBreadcrumb
