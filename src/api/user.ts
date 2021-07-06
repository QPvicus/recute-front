/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 10:44:18
 * @LastEditTime: 2021-07-06 21:30:38
 * @Description:
 */

import request from '@/utils/request'

export interface UserData {
  code: string
  email: string
  password: string
  role: string
  telephone: string
  username: string
}

/**
 * 大学生注册接口
 * @param data
 * @returns
 */
export const registerPost = (data: UserData) => {
  return request({
    url: '/studentRegister',
    method: 'POST',
    data,
  })
}

/**
 * 获取验证码
 * @param email
 * @returns
 */
export const getCodePost = (email: string) => {
  return request({
    url: '/sendCode',
    method: 'POST',
    params: {
      email,
    },
  })
}

/**
 *  大学生登录接口
 * @param username
 * @param password
 * @returns
 */
export const loginPost = (username: string, password: string) => {
  return request({
    url: '/studentLogin',
    method: 'POST',
    data: {
      username,
      password,
    },
  })
}
