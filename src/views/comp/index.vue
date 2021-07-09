<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 10:50:45
 * @LastEditTime: 2021-07-09 15:23:38
 * @Description:
-->

<template>h1ssdf</template>

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
