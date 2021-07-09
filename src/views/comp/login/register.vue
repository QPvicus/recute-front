<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 09:47:42
 * @LastEditTime: 2021-07-09 10:38:17
 * @Description:
-->

<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">公司招聘平台注册</div>
        </div>
      </div>
      <div class="login-form">
        <el-form :rules="rules" :model="form" ref="formRefs">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="telephone">
            <el-input
              v-model="form.telephone"
              placeholder="请输入电话"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-col :span="14" style="margin-right: 30px">
              <el-input
                v-model="form.code"
                placeholder="请输入验证码"
              ></el-input>
            </el-col>
            <el-col :span="10">
              <el-button @click="getCode">获取验证码</el-button>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="12" style="width: 50%">
              <el-button style="width: 70%" @click="register">注册</el-button>
            </el-col>
            <el-col>
              <div class="link" @click="router.push('/comp/login')">
                已有账号登陆
              </div>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { companyRegister, getCodePost, UserData } from '@/api/user'
import { validatorEmail } from '@/utils'
import { ElMessage } from 'element-plus'
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Regitser',
  setup() {
    const router = useRouter()
    const formRefs = ref<HTMLElement>()
    const form = reactive<UserData>({
      username: '',
      password: '',
      role: '0',
      email: '',
      telephone: '',
      code: '',
    })
    const rules = {
      username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      telephone: [{ required: true, message: '电话不能为空', trigger: 'blur' }],
      email: [
        { required: true, message: '邮箱不能为空', trigger: 'blur' },
        { validator: validatorEmail, trigger: 'blur' },
      ],
      code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
    }
    const getCode = async () => {
      try {
        const { data } = await getCodePost(form.email)
        ElMessage.success(data.message)
      } catch {
        ElMessage.error('发送失败,请你检查邮箱是否合法')
        form.email = ''
      }
    }
    const register = () => {
      ;(formRefs.value as any).validate(async (valid: boolean) => {
        if (valid) {
          const formData = toRaw(form)
          console.log(formData)
          try {
            const { data } = await companyRegister(formData)
            console.log(data)
            if (data.message === '验证码不正确') {
              ElMessage.error(data.message)
              return
            }
            ElMessage(data.message)
            setTimeout(() => {
              router.push('/comp/login')
            }, 500)
          } catch {
            ElMessage.error('接口错误')
          }
        }
      })
    }
    return {
      form,
      rules,
      router,
      getCode,
      formRefs,
      register,
    }
  },
})
</script>

<style scoped lang="scss">
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.login-container {
  margin-top: 100px;
  width: 800px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: $primary-color;

  font-weight: bold;
}

.login-form {
  width: 70%;
  margin: 0 auto;
}
.link {
  color: $primary-color;
  cursor: pointer;
}
</style>
