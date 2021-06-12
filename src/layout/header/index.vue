<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 09:02:19
 * @LastEditTime: 2021-06-12 09:46:51
 * @Description:
-->

<template>
  <div class="header">
    <div class="wrapper header-wrapper">
      <div class="left-header">
        <div class="logo">
          <a href="javascript:;">College Recruit</a>
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/index"> 首页 </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/jobs"> 职位 </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/company"> 公司 </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right-header">
        <p>张大彪</p>
        <el-avatar></el-avatar>
      </div>
    </div>
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

<style lang="scss" scoped>
$primary-color: #409eff;
.header {
  height: 50px;
  box-sizing: border-box;
  width: 100%;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-header {
    display: flex;
    align-items: center;

    .logo {
      display: block;
      width: 120px;
      height: 50px;
      line-height: 50px;
      > a {
        font-size: 16px;
      }
    }
  }

  .right-header {
    display: flex;
    align-items: center;
    p {
      color: $red;
    }
  }
}
.el-menu-item {
  height: 50px;
  line-height: 50px;
}

.el-menu-item > a {
  display: flex;
  align-items: center;
}

.router-link-active {
  color: inherit;
}
</style>
