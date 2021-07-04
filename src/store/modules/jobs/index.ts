/*
 * @Author: Taylor Swift
 * @Date: 2021-07-01 09:10:49
 * @LastEditTime: 2021-07-04 15:00:11
 * @Description:
 */

import { getJobDetailById, getJobList, getJobsListSearch } from '@/api/job'
import {
  GET_JOBS_DETAIL,
  GET_JOBS_LIST,
  GET_JOBS_SELECT,
} from '@/store/constants'
import { ActionContext } from 'vuex'
import { JobsColumn, RectProps, RectScanProps } from '../types'

const createState = () => {
  return {
    jobsList: [] as JobsColumn[],
    jobDetail: {} as JobsColumn,
    total: 100,
  }
}

const mutations = {
  [GET_JOBS_LIST](
    state: JobsState,
    payload: { list: JobsColumn[]; cont: number }
  ) {
    state.jobsList = payload.list
    state.total = payload.cont
  },
  [GET_JOBS_DETAIL](state: JobsState, payload: JobsColumn) {
    sessionStorage.setItem('job_detail', JSON.stringify(payload))
    state.jobDetail = payload
  },
}

const actions = {
  async [GET_JOBS_LIST](
    { commit }: ActionContext<JobsState, unknown>,
    { nowPage, sumPage, keyword }: RectProps
  ) {
    console.log(nowPage, sumPage, keyword)
    const { data } = await getJobList(nowPage, sumPage, keyword)
    const list = data.message.positionVOList as JobsColumn[]
    const cont = data.message.cont
    console.log('cont', cont)
    commit(GET_JOBS_LIST, { list, cont })
  },
  async [GET_JOBS_DETAIL](
    { commit }: ActionContext<JobsState, unknown>,
    payload: string
  ) {
    const { data } = await getJobDetailById(payload)
    const detail = data.message.companyPositionList[0]
    console.log(detail, 'action get jobs detail')
    commit(GET_JOBS_DETAIL, detail)
  },
  async [GET_JOBS_SELECT](
    { commit }: ActionContext<JobsState, unknown>,
    {
      nowPage,
      sumPage,
      informationScaleKeyWord,
      positionRemunerationKeyWord,
    }: RectScanProps
  ) {
    const { data } = await getJobsListSearch(
      positionRemunerationKeyWord,
      informationScaleKeyWord,
      nowPage,
      sumPage
    )
    const list = data.message.positionVOList as JobsColumn[]
    const cont = data.message.cont
    commit(GET_JOBS_LIST, { list, cont })
  },
}

export type JobsState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  mutations,
  actions,
}
