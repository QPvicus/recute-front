/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:05:38
 * @LastEditTime: 2021-07-01 10:41:31
 * @Description:
 */

const createState = () => {
  const state = {
    id: '0a93d4c1-974e-4d12-aa29-a9e79d996beb',
    username: '44',
    token: '7e1321c9-9700-4f00-9241-57d85f379caf',
  }
  return state
}

const getters = {
  getUser(state: UserState) {
    return state
  },
}

const mutations = {
  setToken(state: UserState, payload: string): void {
    state.token = payload
    localStorage.setItem('TOKEN', payload)
  },
}

const actions = {}

export type UserState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions,
}
