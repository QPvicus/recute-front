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
