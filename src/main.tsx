import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { BrowserRouter } from '@/router'
import mockStart from '@/mocks'
import { RecoilRoot } from 'recoil'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from '@/antd'

// 开发环境才启动mock
import.meta.env.DEV && mockStart()

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </ConfigProvider>,
  document.getElementById('root')
)
