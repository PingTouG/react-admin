import Mock from 'mockjs'

export default (): void => {
  Mock.mock('/api/login', 'post', ({ body }: any) => {
    const { username, password } = JSON.parse(body)

    if (username === 'admin' && password === '123456') {
      return {
        code: 1,
        data: {
          id: Mock.Random.id(),
          name: 'admin',
          avatar: Mock.Random.image('600x600', '#50B347', 'A'),
          token: Mock.Random.guid(),
        },
      }
    } else {
      return {
        code: 0,
        msg: '账号或密码错误',
      }
    }
  })
}
