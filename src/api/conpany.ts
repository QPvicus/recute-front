/*
 * @Author: Taylor Swift
 * @Date: 2021-07-01 10:10:29
 * @LastEditTime: 2021-07-03 08:56:45
 * @Description:
 */

import request from '@/utils/request'

/**
 *  根据id 获取 公司信息
 * @param id
 * @param nowPage
 * @param sumPage
 * @returns
 */
export const getCompanyInfoById = (id: string, nowPage = 1, sumPage = 1) => {
  return request({
    url: '/show/companyShowPage',
    method: 'POST',
    data: {
      keyWord: id,
      nowPage,
      sumPage,
    },
  })
}
/**
 * 获取所有的公司列表
 * @param nowPage
 * @param sumPage
 * @param keyWord
 * @returns
 */
export const getAllCompanyList = (
  nowPage: number,
  sumPage: number,
  keyWord = ''
) => {
  return request({
    url: '/show/companyShowPage',
    method: 'POST',
    data: {
      keyWord,
      nowPage,
      sumPage,
    },
  })
}
