/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:05:38
 * @LastEditTime: 2021-06-22 19:05:53
 * @Description:
 */

const createState = () => {
  const state = {}
  return state
}

const actions = {}

export type UserState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  actions,
}
