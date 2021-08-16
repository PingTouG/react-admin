import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import storage, { TOKEN, USER_INFO } from '@/utils/storage'
import { message } from '@/antd'
import { isUndef } from '@/utils/tools'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = storage.get(TOKEN)
    !isUndef(token) && (config.headers['token'] = token)

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.code === 0) {
      message.error(response.data.msg)
      return Promise.reject(response.data.msg)
    }

    if (response?.data?.code === 401 || response?.data?.code === '401') {
      storage.remove(TOKEN)
      storage.remove(USER_INFO)
      return Promise.reject(response.data)
    }

    return response.data
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401 || error?.data?.code === '401') {
        storage.remove(TOKEN)
        storage.remove(USER_INFO)
      }

      if (error.response.status === 404) {
        message.error(`未找到接口：${error.response.config.url}`)
      }

      if (error.response.status === 500) {
        message.error(`接口：${error.response.config.url}在服务端发生未知错误`)
      }

      return Promise.reject(error.response.data)
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance
