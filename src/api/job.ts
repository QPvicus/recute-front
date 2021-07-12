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

/**
 * 根据最新时间排序职位
 * @returns
 */
export const getNewJobs = () => {
  return request({
    url: '/show/timePositionShowPage',
    method: 'POST',
  })
}

/**
 * 根据类别搜索 职位列表
 * @param nowPage
 * @param sumPage
 * @param keyWord
 * @returns
 */
export const getAllJobsByCate = (
  nowPage: number,
  sumPage: number,
  keyWord = ''
) => {
  return request({
    url: '/show/homeFiltrateShowPage',
    method: 'POST',
    data: {
      keyWord,
      nowPage,
      sumPage,
    },
  })
}

export interface JobColumn {
  classify: string
  company: string
  demand: string
  education: string
  information: string
  people: string
  positionName: string
  remuneration: string
  safeguard: string
  id?: string
}

/**
 *  发布职位
 * @param data
 * @returns
 */
export const saveJob = (data: JobColumn) => {
  return request({
    url: '/company/savePosition',
    method: 'POST',
    data,
  })
}

/**
 *  更新职位信息
 * @param data
 * @returns
 */
export const updateJob = (data: JobColumn) => {
  return request({
    url: '/company/updatePosition',
    method: 'POST',
    data,
  })
}

/**
 *  公司职位删除
 * @param id
 * @returns
 */
export const deleteJob = (id: string) => {
  return request({
    url: '/company/deletePosition',
    method: 'POST',
    params: {
      id,
    },
  })
}
