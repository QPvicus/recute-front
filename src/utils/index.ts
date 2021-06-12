/*
 * @Author: Taylor Swift
 * @Date: 2021-06-12 17:50:35
 * @LastEditTime: 2021-06-12 18:16:09
 * @Description:
 */

export function validatorMobile(
  rule: any,
  value: string,
  callback: (...args: any[]) => void
) {
  if (
    !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
      value
    )
  ) {
    return callback(new Error('手机格式不正确'))
  }
  callback()
}

export function validatorEmail(
  rule: any,
  value: string,
  callback: (...args: any[]) => void
) {
  if (
    !/^([a-zA-Z0-9]+[_|_|\-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
      value
    )
  ) {
    return callback(new Error('邮箱格式不正确'))
  }
  callback()
}
