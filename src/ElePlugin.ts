/*
 * @Author: Taylor Swift
 * @Date: 2021-06-09 21:56:30
 * @LastEditTime: 2021-06-13 08:53:38
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
  ElAvatar,
  ElSelect,
  ElOption,
  ElCascader,
  ElCarousel,
  ElCarouselItem,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
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
  ElAvatar,
  ElSelect,
  ElOption,
  ElCascader,
  ElCarousel,
  ElCarouselItem,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
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
