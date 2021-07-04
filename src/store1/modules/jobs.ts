/*
 * @Author: Taylor Swift
 * @Date: 2021-07-03 21:33:27
 * @LastEditTime: 2021-07-03 21:36:38
 * @Description:
 */

import { getJobDetailById, getJobList } from '@/api/job'
import { GET_JOBS_DETAIL, GET_JOBS_LIST } from '@/store/constants'
import { JobsColumn, RectProps } from '@/store/modules/types'
import { stringToArr } from '@/utils'
import { defineStore } from 'pinia'

export const useJobsStore = defineStore({
  id: 'app-jobs',
  state: () => ({
    jobsList: [] as JobsColumn[],
    jobDetail: {} as JobsColumn,
    total: 100,
  }),
  actions: {
    async [GET_JOBS_LIST]({ nowPage, sumPage, keyword }: RectProps) {
      const { data } = await getJobList(nowPage, sumPage, keyword)
      const list = data.message.positionVOList as JobsColumn[]
      const cont = data.message.cont
      this.jobsList = list
      this.total = cont
      console.log('cont', cont)
    },
    async [GET_JOBS_DETAIL](payload: string) {
      const { data } = await getJobDetailById(payload)
      const detail = data.message.companyPositionList[0]
      console.log(detail)
      this.jobDetail = detail
    },
  },
})
