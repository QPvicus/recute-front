/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:00:52
 * @LastEditTime: 2021-06-22 21:38:07
 * @Description:
 */

import { addEditResume, EditData } from '@/api/resume'
import { RESUME_EDIT } from '@/store/constants'
import { ElMessage } from 'element-plus'
import { ActionContext } from 'vuex'

const createState = () => {
  const state = {}
  return state
}

const mutations = {}

const actions = {
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
}

export type ResumeState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  mutations,
  actions,
}
