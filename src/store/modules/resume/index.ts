/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:00:52
 * @LastEditTime: 2021-06-27 20:50:04
 * @Description:
 */

import { addEditResume, EditData, getProfileResumeById } from '@/api/resume'
import {
  GET_PROFILE_RESUME,
  RESUME_EDIT,
  SET_PROFILE_RESUME,
} from '@/store/constants'
import { ElMessage } from 'element-plus'
import { ActionContext } from 'vuex'

const createState = () => {
  const state = {
    name: '',
    age: '',
    gender: '',
    telephone: '',
    email: '',
    educational: '',
    major: '',
    school: '',
    specialty: '',
    certificate: '',
    selfevaluation: '',
    gmtModified: '',
  }
  return state
}

const getters = {
  getResume(state: ResumeState) {
    return state
  },
}
const mutations = {
  /**
   * 保存简历信息
   * @param state
   * @param payload 简历信息
   */
  [SET_PROFILE_RESUME](state: ResumeState, payload: Partial<ResumeState>) {
    state = Object.assign(state, payload)
  },
}

const actions = {
  /**
   * 编辑简历
   * @param _
   * @param payload 简历信息
   * @returns
   */
  async [RESUME_EDIT](
    _: ActionContext<ResumeState, unknown>,
    payload: EditData
  ) {
    try {
      const { data } = await addEditResume(payload)
      return data
    } catch (err) {
      ElMessage({
        message: '保存简历失败',
        type: 'error',
      })
    }
  },
  async [GET_PROFILE_RESUME](
    _: ActionContext<ResumeState, unknown>,
    id: string
  ) {
    try {
      const { data } = await getProfileResumeById(id)
      return data
    } catch (err) {
      ElMessage({
        message: '接口错误',
        type: 'error',
      })
    }
  },
  async [SET_PROFILE_RESUME](
    { commit }: ActionContext<ResumeState, unknown>,
    payload: Partial<ResumeState>
  ) {
    commit(SET_PROFILE_RESUME, payload)
  },
}
export type ResumeState = ReturnType<typeof createState>
export default {
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions,
}
