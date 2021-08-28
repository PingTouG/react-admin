/**
 * 判断是否未定义
 * @param v 变量
 * @returns 如果变量定义则返回true,否则返回false
 */
export const isUndef = (v: unknown): boolean => v === undefined || v === null
