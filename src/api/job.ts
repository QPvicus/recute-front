import request from '@/utils/request'

export const getJobList = (nowPage: number, sumPage: number, keyWord = '') => {
  return request({
    url: '/show/positionAndCompanyShowPage',
    method: 'POST',
    data: {
      keyWord,
      nowPage,
      sumPage,
    },
  })
}

export const getJobDetailById = (id: string, nowPage = 1, sumPage = 1) => {
  return request({
    url: '/show/positionShowPage',
    method: 'POST',
    data: {
      keyWord: id,
      nowPage,
      sumPage,
    },
  })
}

export const getJobsListSearch = (
  salary: string,
  scale: string,
  nowPage: number,
  sumPage: number
) => {
  return request({
    url: '/show/payFiltrateShowPage',
    method: 'POST',
    data: {
      informationScaleKeyWord: scale,
      positionRemunerationKeyWord: salary,
      nowPage,
      sumPage,
    },
  })
}

/**
 * 根据公司id 查询 所有职位
 * @param keyWord
 * @param nowPage
 * @param sumPage
 * @returns
 */
export const getAllJobsByCompanyId = (
  keyWord: string,
  nowPage = 1,
  sumPage = 30
) => {
  return request({
    url: '/show/companyIDShowPage',
    method: 'POST',
    data: {
      keyWord,
      nowPage,
      sumPage,
    },
  })
}
