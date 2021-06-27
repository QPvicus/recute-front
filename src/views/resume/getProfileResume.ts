/*
 * @Author: Taylor Swift
 * @Date: 2021-06-27 20:12:54
 * @LastEditTime: 2021-06-27 20:50:47
 * @Description:
 */

import store from '@/store'
import { GET_PROFILE_RESUME, SET_PROFILE_RESUME } from '@/store/constants'

const id = store.getters['user/getUser'].id
export const getProfileResume = () => {
  store.dispatch(`resume/${GET_PROFILE_RESUME}`, id).then((res) => {
    store.dispatch(
      `resume/${SET_PROFILE_RESUME}`,
      res.message.studentResumeList[0]
    )
  })
}
