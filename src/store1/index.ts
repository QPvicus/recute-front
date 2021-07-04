/*
 * @Author: Taylor Swift
 * @Date: 2021-07-03 21:31:34
 * @LastEditTime: 2021-07-03 21:32:27
 * @Description:
 */

import type { App } from 'vue'

import { createPinia } from 'pinia'

const store = createPinia()

export function setStore(app: App) {
  app.use(store)
}
export { store }
