import { defineConfig, loadEnv } from 'vite'
import type { UserConfigExport, ConfigEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { injectHtml } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    plugins: [
      reactRefresh(),
      injectHtml({
        injectData: {
          title: loadEnv(mode, process.cwd()).VITE_APP_NAME,
        },
      }),
    ],
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
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
  })
}
