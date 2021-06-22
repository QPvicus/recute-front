/*
 * @Author: Taylor Swift
 * @Date: 2021-06-09 21:56:30
 * @LastEditTime: 2021-06-22 19:11:40
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
  ElTag,
  ElPagination,
  ElLink,
  ElRadio,
  ElRadioGroup,
  ElNotification,
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
  ElTag,
  ElPagination,
  ElLink,
  ElRadio,
  ElRadioGroup,
]
const plugins = [ElMessage, ElNotification]
function RegisterComponent(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export { RegisterComponent }
