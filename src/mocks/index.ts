import Mock from 'mockjs'
import user from './modules/user'

const mockStart = (): void => {
  Mock.setup({
    timeout: '200-3000',
  })

  user()
}

export default mockStart
