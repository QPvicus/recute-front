<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 09:47:30
 * @LastEditTime: 2021-07-09 15:21:29
 * @Description:
-->
<template>
  <div class="card-layout">
    <div class="oranic-div">
      <div class="header__content">
        <img class="img" src="@/assets/icon_3.png" alt="" />
        <h1 class="header__content__heading">公司用户登录</h1>
      </div>
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
          <el-button @click="router.push('/comp/register')">注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { companyLoginPost } from '@/api/user'
import { LoginStateContext, LoginStateProvideKey } from '@/hooks/loginState'
import { ElMessage } from 'element-plus'
import { defineComponent, inject, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CompLogin',
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
            const { data } = await companyLoginPost(
              state.username,
              state.password
            )
            console.log(data)
            if (data.info === 'ERROR') {
              ElMessage.error(data.message)
              return
            }
            ElMessage.success('登录成功')
            setTimeout(() => {
              router.push('/comp/index')
              loginState.isLogin = true
              loginState.isStudent = false
              localStorage.setItem('isLogin', JSON.stringify(true))
              localStorage.setItem('isStudent', JSON.stringify(false))
              localStorage.setItem('token', data.message.token)
              localStorage.setItem('comp_id', data.message.id)
              localStorage.setItem('comp_username', data.message.username)
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
.card-layout {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 352px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  padding: 24px 32px 32px;
  border-radius: 8px;
  margin: 0 auto;
  background: #fff;

  .header__content {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 15px;
    > .img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
