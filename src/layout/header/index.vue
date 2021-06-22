<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 09:02:19
 * @LastEditTime: 2021-06-22 09:16:42
 * @Description:
-->

<template>
  <div class="header">
    <div class="wrapper header-wrapper">
      <div class="left-header">
        <div class="logo">
          <a href="javascript:;">College Recruit</a>
        </div>
        <!--  <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          router
          mode="horizontal"
        >
          <el-menu-item index="/index"> 首页 </el-menu-item>
          <el-menu-item index="/jobs"> 职位 </el-menu-item>
          <el-menu-item index="/company"> 公司 </el-menu-item>
        </el-menu> -->
      </div>
      <ul class="right-header">
        <router-link
          custom
          to="/index"
          target="_blank"
          v-slot="{ href, isActive }"
        >
          <li class="right-header-item" :class="{ active: isActive }">
            <a :href="href" target="_blank">主页</a>
          </li>
        </router-link>
        <router-link to="/jobs" target="_blank" v-slot="{ href, isActive }">
          <li class="right-header-item" :class="{ active: isActive }">
            <a :href="href" target="_blank">职位</a>
          </li>
        </router-link>
        <router-link to="/company" target="_blank" v-slot="{ href, isActive }">
          <li class="right-header-item" :class="{ active: isActive }">
            <a :href="href" target="_blank">公司</a>
          </li>
        </router-link>
        <span class="inline"></span>
        <template v-if="isLogin">
          <router-link to="/resume" target="_blank" v-slot="{ href, isActive }">
            <li class="right-header-item" :class="{ active: isActive }">
              <a :href="href" target="_blank">个人简历</a>
            </li>
          </router-link>
          <el-dropdown @visible-change="visibleChange">
            <span class="elexit-dropdown-link">
              <span class="username">张大彪</span>
              <img
                class="user-avatar"
                src="https://img.bosszhipin.com/beijin/upload/avatar/20190927/3e87a7dfc893e6d475d093f902b54771c57c0bccb76782dca8b775dbbd1459d9_s.png"
                alt=""
              /><i :class="[iconShowTop, 'el-icon--right']"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <template v-else>
          <router-link to="/login" target="_blank" v-slot="{ href }">
            <li class="right-header-item">
              <a class="login-link" :href="href" target="_blank">登录</a>
            </li>
          </router-link>
          <span class="inline"></span>
          <router-link to="/register" target="_blank" v-slot="{ href }">
            <li class="right-header-item">
              <a class="register-link" :href="href" target="_blank">注册</a>
            </li>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
  <div v-if="route.fullPath === '/index'" class="bg"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const isLogin = ref(true)
    const activeIndex = route.path
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
      isLogin,
      route,
    }
  },
})
</script>

<style lang="scss" scoped>
$primary-color: #409eff;
.bg {
  width: 100%;
  height: 305px;
  background: url('@/assets/bg1.jpg') no-repeat center;
}
.header {
  height: 50px;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
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
    &-item {
      padding: 4px 0px;
      margin: 0 20px;
      &.active {
        border-bottom: 2px solid;
        color: $primary-color;
      }
      &:hover > a {
        color: $primary-color;
      }
    }
  }
}
.el-menu-item {
  height: 50px;
  line-height: 50px;
}

.user-avatar {
  width: 26px;
  height: 26px;
  border-radius: 100%;
  vertical-align: middle;
  margin-left: 3px;
  margin-right: 3px;
}
.username {
  vertical-align: middle;
}

.el-dropdown-link {
  cursor: pointer;
}
.icon-transition {
  transition: all 0.3s;
}
:deep(.el-dropdown) {
  margin-top: 1px;
}
</style>
