<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 10:50:45
 * @LastEditTime: 2021-07-09 11:23:56
 * @Description:
-->

<template>
  <Header />
  <h1>企业网站</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header.vue'
export default defineComponent({
  name: 'CompIndex',
  components: {
    Header,
  },
})
</script>
