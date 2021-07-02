/*
 * @Author: Taylor Swift
 * @Date: 2021-07-01 09:10:49
 * @LastEditTime: 2021-07-01 09:16:48
 * @Description:
 */

const createState = () => {
  const state = {
    jobDetail: {} as any,
  }
  return state
}

const actions = {}

export type JobsState = ReturnType<typeof createState>

export default {
  namespaced: true,
  state: createState(),
  actions,
}
