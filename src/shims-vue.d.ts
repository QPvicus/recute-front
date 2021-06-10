/* eslint-disable */
declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const component: typeof defineComponent
  export default component
}
