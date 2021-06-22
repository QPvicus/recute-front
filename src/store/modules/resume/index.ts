/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:00:52
 * @LastEditTime: 2021-06-22 19:48:11
 * @Description:
 */

import { addEditResume, EditData } from '@/api/resume'
import { RESUME_EDIT } from '@/store/constants'
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
    const data = await addEditResume(payload)
    console.log(data)
  },
}

export type ResumeState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  mutations,
  actions,
}
