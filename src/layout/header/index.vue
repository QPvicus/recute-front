<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 09:02:19
 * @LastEditTime: 2021-07-12 16:25:32
 * @Description:
-->

<template>
  <div class="header">
    <div class="wrapper header-wrapper">
      <div class="left-header">
        <div class="logo">
          <a href="/">
            <img src="@/assets/logo.png" alt="" />
          </a>
        </div>
        <template v-if="!isStudent">
          <el-menu
            router
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/comp/publish">发布职位</el-menu-item>
            <el-menu-item index="/comp/profile">个人中心</el-menu-item>
          </el-menu>
        </template>
      </div>
      <template v-if="isStudent">
        <ul class="right-header">
          <el-link
            class="comp-link"
            href="#/comp/login"
            target="_blank"
            :underline="false"
            :disabled="isLogin && isStudent"
            >我是企业用户</el-link
          >
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
          <router-link
            to="/company"
            target="_blank"
            v-slot="{ href, isActive }"
          >
            <li class="right-header-item" :class="{ active: isActive }">
              <a :href="href" target="_blank">公司</a>
            </li>
          </router-link>
          <span class="inline"></span>

          <template v-if="isLogin">
            <router-link
              to="/resume"
              target="_blank"
              v-slot="{ href, isActive }"
            >
              <li class="right-header-item" :class="{ active: isActive }">
                <a :href="href" target="_blank">个人简历</a>
              </li>
            </router-link>
            <el-dropdown @visible-change="visibleChange">
              <span class="elexit-dropdown-link">
                <span class="username">{{ username }}</span>
                <i :class="[iconShowTop, 'el-icon--right']"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
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
      </template>
      <template v-else>
        <div class="comp_user">
          {{ comp_username }}
          <span @click="logout1">退出登录</span>
        </div>
      </template>
    </div>
  </div>
  <div v-if="route.fullPath === '/index'" class="bg"></div>
</template>

<script lang="ts">
import { LoginStateContext, LoginStateProvideKey } from '@/hooks/loginState'
import { defineComponent, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const username = localStorage.getItem('user_name')
    const comp_username = localStorage.getItem('comp_username')
    const activeIndex = route.path
    const iconShowTop = ref('el-icon-arrow-down')
    const loginState = inject<LoginStateContext>(LoginStateProvideKey)
    const isLogin =
      JSON.parse(localStorage.getItem('isLogin')) ?? loginState.isLogin
    const isStudent =
      JSON.parse(localStorage.getItem('isStudent')) ?? loginState.isStudent
    console.log(isLogin, 'isLogin', isStudent, 'isStudent')
    const visibleChange = (value: boolean) => {
      iconShowTop.value = value ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    }
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const logout = () => {
      router
        .push({
          path: '/login',
        })
        .then(() => {
          localStorage.clear()
          loginState.isLogin = false
          loginState.isStudent = true
        })
    }
    const logout1 = () => {
      router.push('/comp/login').then(() => {
        localStorage.clear()
        loginState.isLogin = false
        loginState.isStudent = true
      })
    }
    return {
      activeIndex,
      handleSelect,
      router,
      iconShowTop,
      visibleChange,
      logout,
      route,
      username,
      logout1,
      loginState,
      comp_username,
      isLogin,
      isStudent,
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
      margin-right: 30px;
      > a {
        font-size: 16px;
        display: flex;
        width: 100%;
        height: 100%;
        img {
          height: 100%;
        }
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
.comp-link {
  font-size: 12px;
  &:hover {
    color: $primary-color;
  }
}
.el-menu-item {
  height: 50px;
  line-height: 50px;
}

.elexit-dropdown-link {
  vertical-align: middle;
  cursor: pointer;
}

.icon-transition {
  transition: all 0.3s;
}
.comp_user {
  font-size: 14px;
  span {
    margin-left: 10px;
    cursor: pointer;
  }
}
:deep(.el-dropdown) {
  margin-top: 1px;
}
:deep(.el-avatar) {
  vertical-align: middle;
  margin-right: 15px;
}
</style>
