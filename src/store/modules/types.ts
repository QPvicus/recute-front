/*
 * @Author: Taylor Swift
 * @Date: 2021-07-03 09:30:32
 * @LastEditTime: 2021-07-04 18:44:05
 * @Description:
 */

export interface RectProps {
  nowPage: number
  sumPage: number
  keyword?: string
}

export interface RectScanProps extends RectProps {
  informationScaleKeyWord: string
  positionRemunerationKeyWord: string
}

export interface CompanyColumn {
  company: string
  companytype: string
  email: string
  icon: null | string
  id: string
  scale: string
  synopsis: string
  telephone: string
}

export interface JobsColumn extends CompanyColumn {
  classify: string
  companyId: string
  education: string
  icon: null
  id: string
  people: string
  positionName: string
  remuneration: string
  safeguard: string
  information: string
  demand: string
}
