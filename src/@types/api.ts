export type PromiseAxios<T = unknown> = Promise<ApiOptions<T>>
export interface ApiOptions<T> {
  code: number
  data: T
  msg: string
}

export interface LoginParams {
  username: string
  password: string
}
