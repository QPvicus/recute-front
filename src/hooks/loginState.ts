/*
 * @Author: Taylor Swift
 * @Date: 2021-07-09 14:00:56
 * @LastEditTime: 2021-07-09 14:32:55
 * @Description:
 */

import { reactive } from 'vue'

export const LoginStateProvideKey = Symbol()

export const LoginState = reactive({
  isLogin: false,
  isStudent: true,
})

export interface LoginStateContext {
  isLogin: boolean
  isStudent: boolean
}
