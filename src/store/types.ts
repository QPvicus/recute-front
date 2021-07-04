/*
 * @Author: Taylor Swift
 * @Date: 2021-06-22 19:22:48
 * @LastEditTime: 2021-07-01 09:14:15
 * @Description:
 */

import { CompanyState } from './modules/company'
import { JobsState } from './modules/jobs'
import { ResumeState } from './modules/resume'
import { UserState } from './modules/user'
export type GlobalState = {
  resume: ResumeState
  user: UserState
  jobs: JobsState
  company: CompanyState
}
