<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 09:02:19
 * @LastEditTime: 2021-06-10 09:06:29
 * @Description:
-->

<template>
  <div class="header">
    <div class="logo"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      handleSelect,
    }
  },
})
</script>
