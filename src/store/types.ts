/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:22:48
 * @LastEditTime: 2021-06-22 19:23:10
 * @Description:
 */

import { ResumeState } from './modules/resume'
import { UserState } from './modules/user'
export type GlobalState = {
  resume: ResumeState
  user: UserState
}
