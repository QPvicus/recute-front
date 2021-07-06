/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 18:57:20
 * @LastEditTime: 2021-07-06 13:20:52
 * @Description:
 */

import request from '@/utils/request'

export interface EditData {
  age?: string
  certificate?: string
  educational: string
  email: string
  gender?: string
  major: string
  name: string
  school: string
  selfevaluation?: string
  specialty?: string
  telephone: string
  portrait?: string
}

/**
 * 编辑学生简历
 * @param data 学生简历对象
 * @returns
 */
export const addEditResume = (data: EditData) => {
  console.log(data)
  return request({
    url: '/student/saveResume',
    method: 'POST',
    data,
  })
}

/**
 * 根据用户id 获取 个人简历
 * @param id 用户Id
 * @param nowPage 当前页码
 * @param sumPage 页数大小
 * @returns
 */
export const getProfileResumeById = (id: string, nowPage = 1, sumPage = 1) => {
  return request({
    url: '/show/studentShowPage',
    method: 'POST',
    data: {
      keyWord: id,
      nowPage,
      sumPage,
    },
  })
}

/**
 * 简历发送邮箱
 * @param companyEmail
 * @returns
 */
export const submitPost = (companyEmail: string) => {
  return request({
    url: '/student/giveResume',
    method: 'GET',
    params: {
      companyEmail,
    },
  })
}
