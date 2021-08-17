import { LoginParams, PromiseAxios } from '@/@types'
import { UserModel } from '@/models/user'
import axios from './axios'

/**
 * 登录
 * @param payload LoginParams
 */
export const login = (payload: LoginParams): PromiseAxios<UserModel> =>
  axios.post('/login', payload)
