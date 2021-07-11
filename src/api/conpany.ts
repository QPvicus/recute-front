/*
 * @Author: Taylor Swift
 * @Date: 2021-07-01 10:10:29
 * @LastEditTime: 2021-07-11 21:40:12
 * @Description:
 */

import { CompanyColumn } from '@/store/modules/types'
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

/**
 *  根据输入框得值搜素哦
 * @param keyWord
 * @param nowPage
 * @param sumPage
 * @returns
 */
export const getAllCompanyBySearch = (
  keyWord: string,
  nowPage: number,
  sumPage: number
) => {
  return request({
    url: '/show/companyNameShowPage',
    method: 'POST',
    data: {
      keyWord,
      nowPage,
      sumPage,
    },
  })
}

/**
 *  公司信息保存
 * @param data
 * @returns
 */
export const saveCompanyInfo = (data: CompanyColumn) => {
  return request({
    url: '/company/saveInformation',
    method: 'POST',
    data,
  })
}
