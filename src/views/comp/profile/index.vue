<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-10 09:08:58
 * @LastEditTime: 2021-07-12 08:51:38
 * @Description:
-->

<template>
  <div class="wrapper">
    <el-tabs tab-position="left" style="margin-top: 20px">
      <el-tab-pane label="职位管理"><CompanyPost /></el-tab-pane>
      <el-tab-pane label="投递记录">投递记录</el-tab-pane>
      <el-tab-pane label="公司信息"><CompInfo /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompanyPost from '../post/index.vue'
import CompInfo from '../info/index.vue'
export default defineComponent({
  name: 'CompProfile',
  components: {
    CompanyPost,
    CompInfo,
  },
})
</script>
