import type { ReactElement } from 'react'
import type { LoginParams } from '@/@types'
import React, { useState } from 'react'
import classes from './index.module.less'
import bg from '@/assets/images/user/login-bg.png'
import { Form, Input, Button, message } from '@/antd'
import { UserOutlined, LockOutlined } from '@/antd/icon'
import { login } from '@/api/user'
import { isRequired } from '@/utils/form-rules'
import storage, { TOKEN, USER_INFO } from '@/utils/storage'
import { useHistory } from 'react-router-dom'

const appName = import.meta.env.VITE_APP_NAME
const rules = {
  username: [isRequired('请输入账号')],
  password: [isRequired('请输入密码')],
}

const Login = (): ReactElement => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const onLogin = async (values: LoginParams) => {
    try {
      setLoading(true)
      const { data } = await login(values)
      storage.set(USER_INFO, data)
      storage.set(TOKEN, data.token)
      setLoading(false)
      message.success('登录成功')
      history.push('/')
    } catch {
      setLoading(false)
    }
  }
  return (
    <div className={classes.page}>
      <img className={classes.pageRight} src={bg} />
      <Form className={classes.pageForm} onFinish={onLogin}>
        <Form.Item>
          <h3 className={classes.pageFormTitle}>{appName}登录</h3>
        </Form.Item>
        <Form.Item name="username" rules={rules.username}>
          <Input
            prefix={<UserOutlined className={classes.pageFormIcon} />}
            placeholder="请输入账号"
          />
        </Form.Item>
        <Form.Item name="password" rules={rules.password}>
          <Input.Password
            prefix={<LockOutlined className={classes.pageFormIcon} />}
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
