import { atom, atomFamily } from 'recoil'

// 菜单是否折叠
export const collapsedAtom = atom({
  key: 'collapsedAtom',
  default: false,
})
// 当前路径
export const activePathAtom = atomFamily({
  key: 'activePathAtom',
  default: (path: string) => path,
})
// 是否为深色模式
export const isDarkModeAtom = atom({
  key: 'isDarkModeAtom',
  default: false,
})
