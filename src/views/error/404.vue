<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-12 12:25:28
 * @LastEditTime: 2021-06-12 12:37:15
 * @Description:
-->

<template>
  <div class="fourPage">
    <img src="@/assets/3.png" alt="" />
    <p>你正在寻找的页面不存在</p>
    <el-button type="primary" @click="back">返回首页</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Error-404',
  setup() {
    const router = useRouter()
    const back = () => {
      router.replace('/')
    }
    return {
      back,
    }
  },
})
</script>

<style lang="scss" scoped>
.fourPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  p {
    margin: 20px 0;
    font-size: 30px;
    color: #1f2329;
    font-weight: 500;
  }
}
</style>
