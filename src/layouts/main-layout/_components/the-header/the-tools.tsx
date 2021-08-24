import type { ReactElement } from 'react'
import React from 'react'
import { Avatar, Dropdown, Menu, Modal } from '@/antd'
import classes from '@/layouts/main-layout/index.module.less'
import storage, { TOKEN, USER_INFO } from '@/utils/storage'
import { useHistory } from 'react-router'
import { ExportOutlined, LockOutlined, UserOutlined } from '@/antd/icon'

const TheTools = (): ReactElement => {
  const userInfo = storage.get(USER_INFO)
  const history = useHistory()

  const onLogout = () => {
    Modal.confirm({
      title: '警告',
      type: 'warning',
      content: '此操作将退出系统，是否继续？',
      onOk: () => {
        storage.remove(TOKEN)
        storage.remove(USER_INFO)
        history.push('/login')
      },
    })
  }
  const menu = (
    <Menu>
      <Menu.Item key="info" icon={<UserOutlined />}>
        个人信息
      </Menu.Item>
      <Menu.Item key="password" icon={<LockOutlined />}>
        修改密码
      </Menu.Item>
      <Menu.Item key="logout" icon={<ExportOutlined />} onClick={onLogout}>
        退出
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={classes.tools}>
      <Dropdown overlay={menu}>
        <div className={classes.user}>
          <Avatar src={userInfo.avatar} />
          <span className={classes.username}>{userInfo.name}</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default TheTools
