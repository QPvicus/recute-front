<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 09:02:19
 * @LastEditTime: 2021-06-17 10:47:12
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
        <el-dropdown @visible-change="visibleChange">
          <span class="el-dropdown-link">
            张大彪<i :class="[iconShowTop, 'el-icon--right']"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="() => router.push('/resume')"
                >我的简历</el-dropdown-item
              >
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()
    const activeIndex = ref('1')
    const iconShowTop = ref('el-icon-arrow-down')
    const visibleChange = (value: boolean) => {
      iconShowTop.value = value ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    }
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const logout = () => {
      router.replace({
        path: '/login',
      })
    }
    return {
      activeIndex,
      handleSelect,
      router,
      iconShowTop,
      visibleChange,
      logout,
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
.el-dropdown-link {
  cursor: pointer;
}
.icon-transition {
  transition: all 0.3s;
}
</style>
