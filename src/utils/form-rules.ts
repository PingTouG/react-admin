const validateTrigger = 'onBlur'

/**
 * @method isRequired
 * @description 必填项
 * @param message 提示信息
 * @returns 校验规则
 */
export const isRequired = (message = '必填项') => ({
  required: true,
  validateTrigger,
  message,
})
