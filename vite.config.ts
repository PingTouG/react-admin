import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      // 处理通过"~"引入Antd问题
      { find: /^~/, replacement: '' },
      { find: '@', replacement: '/src' },
    ],
  },
  // 处理引入Antd样式报错问题
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
