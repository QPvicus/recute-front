/*
 * @Author: Taylor Swift
 * @Date: 2021-07-03 08:53:02
 * @LastEditTime: 2021-07-03 21:00:36
 * @Description:
 */

import { getAllCompanyList, getCompanyInfoById } from '@/api/conpany'
import { GET_COMPANY_DETAIL, GET_COMPANY_LIST } from '@/store/constants'
import { ActionContext } from 'vuex'
import { CompanyColumn, RectProps } from '../types'

const createState = () => {
  const state = {
    companyList: [] as CompanyColumn[],
    companyDetail: {} as CompanyColumn,
  }
  return state
}

const getters = {
  getCompanyDetail(state: CompanyState) {
    console.log(sessionStorage.getItem('comp_detail'))
    if (sessionStorage.getItem('comp_detail')) {
      return JSON.parse(sessionStorage.getItem('comp_detail') as string)
    }
    return state.companyDetail
  },
}

const mutations = {
  [GET_COMPANY_LIST](state: CompanyState, payload: CompanyColumn[]) {
    console.log(payload)
    state.companyList = payload
  },
  [GET_COMPANY_DETAIL](state: CompanyState, payload: CompanyColumn) {
    sessionStorage.setItem('comp_detail', JSON.stringify(payload))
    state.companyDetail = payload
  },
}

const actions = {
  async [GET_COMPANY_LIST](
    { commit }: ActionContext<CompanyState, unknown>,
    { nowPage, sumPage, keyword }: RectProps
  ) {
    const { data } = await getAllCompanyList(nowPage, sumPage, keyword)
    const payload = data.message.companyInformationList as CompanyColumn[]
    commit(GET_COMPANY_LIST, payload)
  },
  async [GET_COMPANY_DETAIL](
    { commit }: ActionContext<CompanyState, unknown>,
    payload: string
  ) {
    const { data } = await getCompanyInfoById(payload)
    const detail = data.message.companyInformationList[0] as CompanyColumn
    commit(GET_COMPANY_DETAIL, detail)
  },
}

export type CompanyState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions,
}
