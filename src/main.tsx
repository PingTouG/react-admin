import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { BrowserRouter } from '@/router'
import mockStart from '@/mocks'

// 开发环境才启动mock
import.meta.env.DEV && mockStart()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
