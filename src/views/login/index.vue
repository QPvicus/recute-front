<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 11:25:54
 * @LastEditTime: 2021-07-09 15:07:23
 * @Description:
-->

<template>
  <div class="box">
    <el-card>
      <div class="header">大学生招聘平台登录</div>
      <el-form :rules="rules" :model="state" ref="formRefs">
        <el-form-item prop="username" label="账号">
          <el-input
            class="input"
            placeholder="请输入账号"
            v-model="state.username"
          /><br />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input
            class="input"
            type="password"
            v-model="state.password"
            placeholder="请输入密码"
          /><br />
        </el-form-item>
        <div style="width: 200px; height: 50px; margin: 0 auto">
          <el-button @click="login">登录</el-button>
          <el-button @click="router.push('/register')">注册</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { loginPost } from '@/api/user'
import { LoginStateContext, LoginStateProvideKey } from '@/hooks/loginState'
import { ElMessage } from 'element-plus'
import { defineComponent, inject, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const state = reactive({
      username: '',
      password: '',
    })
    const rules = {
      username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    }
    const formRefs = ref<HTMLElement>()
    const router = useRouter()
    const loginState = inject<LoginStateContext>(LoginStateProvideKey)
    const login = () => {
      ;(formRefs.value as any).validate(async (valid: boolean) => {
        if (valid) {
          try {
            const { data } = await loginPost(state.username, state.password)
            console.log(data)
            if (data.info === 'ERROR') {
              ElMessage.error(data.message)
              return
            }
            ElMessage.success('登录成功')
            setTimeout(() => {
              router.push('/')
              loginState.isLogin = true
              loginState.isStudent = true
              localStorage.setItem('isLogin', JSON.stringify(true))
              localStorage.setItem('isStudent', JSON.stringify(true))
              localStorage.setItem('user_id', data.message.id)
              localStorage.setItem('user_name', data.message.username)
              localStorage.setItem('token', data.message.token)
            }, 500)
          } catch {
            ElMessage({
              type: 'error',
              message: '',
            })
          }
        } else {
          return false
        }
      })
    }
    return {
      login,
      rules,
      router,
      state,
      formRefs,
    }
  },
})
</script>

<style lang="scss" scoped>
.box {
  width: 500px;
  height: 230px;
  margin: 100px auto;
}
.header {
  text-align: center;
  font-size: 28px;
  color: $primary-color;
  font-weight: bold;
  margin: 20px 0;
}
.input {
  width: 400px;
}
.font {
  font-size: 14px;
  font-weight: bold;
}
:deep(.el-card) {
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
</style>
