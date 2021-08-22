import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { BrowserRouter } from '@/router'
import mockStart from '@/mocks'
import { RecoilRoot } from 'recoil'

// 开发环境才启动mock
import.meta.env.DEV && mockStart()

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
)
