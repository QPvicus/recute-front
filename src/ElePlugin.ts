/*
 * @Author: Taylor Swift
 * @Date: 2021-06-09 21:56:30
 * @LastEditTime: 2021-06-10 08:59:40
 * @Description:
 */

import type { App } from 'vue'

import {
  ElButton,
  ElCard,
  ElMessage,
  ElForm,
  ElFormItem,
  ElInput,
  ElIcon,
  ElCol,
  ElRow,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
} from 'element-plus'

const components = [
  ElButton,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElIcon,
  ElRow,
  ElCol,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
]
const plugins = [ElMessage]
function RegisterComponent(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export { RegisterComponent }
