<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 10:50:45
 * @LastEditTime: 2021-07-10 09:14:39
 * @Description:
-->

<template>
  <div class="wrapper"></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'CompIndex',
  setup() {
    const router = useRouter()
    onBeforeMount(() => {
      try {
        const isLogin = localStorage.getItem('isLogin')
        if (!isLogin) {
          router.push('/')
        }
      } catch {
        router.push('/')
      }
    })
  },
})
</script>
