import type { ReactElement } from 'react'
import React from 'react'
import { Spin } from '@/antd'

const PageLoading = (): ReactElement => {
  return (
    <div className="page-loading">
      <Spin />
    </div>
  )
}

export default PageLoading
