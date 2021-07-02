/*
 * @Author: Taylor Swift
 * @Date: 2021-07-01 10:10:29
 * @LastEditTime: 2021-07-02 18:38:58
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
