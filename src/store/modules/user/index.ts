/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:05:38
 * @LastEditTime: 2021-06-27 18:33:42
 * @Description:
 */

const createState = () => {
  const state = {
    id: '56154516',
    username: 'hhhh',
    token: '088986e6-85eb-494d-85d9-a25e5dd4c70e',
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
