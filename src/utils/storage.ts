import { isUndef } from './tools'

// token
export const TOKEN = 'ADMIN_TOKEN'
export const USER_INFO = 'ADMIN_USER_INFO'
export const IS_DARK_MODE = 'ADMIN_IS_DARK_MODE'

export default {
  get: (key: string): any => {
    const data: string | null = window.localStorage.getItem(key)
    try {
      return data === null ? data : JSON.parse(data)
    } catch {
      return data
    }
  },
  set: (key: string, data: unknown): void => {
    if (!isUndef(key) && !isUndef(data)) {
      let payload = <string>data

      if (typeof data !== 'string') {
        payload = JSON.stringify(data)
      }

      window.localStorage.setItem(key, payload)
    }
  },
  remove: (key: string): void => window.localStorage.removeItem(key),
}
