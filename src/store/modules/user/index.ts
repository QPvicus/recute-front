/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:05:38
 * @LastEditTime: 2021-07-04 14:26:46
 * @Description:
 */

const createState = () => {
  const state = {
    id: 'f2f0c1f0-da71-49ab-910e-5332c931b0b5',
    username: '11',
    token: '1bb82405-9eb3-4945-aa29-35a9100872d0',
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
