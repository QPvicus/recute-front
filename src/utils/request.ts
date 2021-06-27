/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 10:42:16
 * @LastEditTime: 2021-06-27 18:36:21
 * @Description:
 */

import axios from 'axios'
import store from '@/store'
/**
 *  @description 项目初始化
 */
const instance = axios.create({
  baseURL: 'http://47.98.44.98:5253/Recruit',
})

/**
 * @description 请求拦截器  请求之前携带 token
 *
 */
instance.interceptors.request.use(
  (config) => {
    const token = store.getters['user/getUser'].token
    if (token) {
      config.headers.token = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * @description 响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      //  重定向 登录页面
    } else if (error.response.status === 500) {
      // 服务器出错
    }

    return Promise.reject(error)
  }
)

export default instance
