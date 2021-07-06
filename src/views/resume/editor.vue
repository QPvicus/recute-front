<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-12 12:18:59
 * @LastEditTime: 2021-07-06 18:02:56
 * @Description:
-->

<template>
  <Header />
  <div class="resume-edit margin-auto">
    <div class="resume-header">
      <h1>编辑简历</h1>
    </div>
    <!-- 基本信息 -->
    <div class="resumeSection">
      <div class="resumeSection__left">
        <h2 class="resumeSection_title">基础信息</h2>
      </div>
      <div class="resumeSection__right">
        <el-form
          :model="resume_info"
          :rules="rules.resume_info"
          ref="resumeInfoRef"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="resume_info.name" placeholder="请输入" />
          </el-form-item>
          <el-row type="flex" :gutter="30" align="center">
            <el-col :span="12">
              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="resume_info.gender">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-input
                type="number"
                min="16"
                max="100"
                v-model="resume_info.age"
                placeholder="请输入年龄"
              />
            </el-col>
          </el-row>
          <el-form-item label="手机号码" prop="mobile_number">
            <el-input
              v-model="resume_info.mobile_number"
              placeholder="请输入"
            />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="resume_info.email" placeholder="请输入" />
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 基本信息 -->
    <!-- 教育经历 -->
    <div class="resumeSection">
      <div class="resumeSection__left">
        <h2 class="resumeSection_title">教育经历</h2>
      </div>
      <div class="resumeSection__right">
        <el-form
          :model="resume_edu"
          :rules="rules.resume_edu"
          ref="resumeEduRef"
        >
          <el-form-item label="学校" prop="school">
            <el-input v-model="resume_edu.school" />
          </el-form-item>
          <el-form-item label="学历" prop="education">
            <el-select v-model="resume_edu.education" placeholder="请选择">
              <el-option
                v-for="item in education"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="resume_edu.major"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 教育经历 -->
    <!-- 荣誉证书 -->
    <div class="resumeSection">
      <div class="resumeSection__left">
        <h2 class="resumeSection_title">荣誉证书</h2>
      </div>
      <div class="resumeSection__right">
        <div
          class="add-button"
          v-if="!certificateShow"
          @click="certificateShow = !certificateShow"
        >
          <i class="el-icon-plus"></i>
          添加
        </div>
        <el-form v-else>
          <el-form-item>
            <el-input
              type="textarea"
              placeholder="请输入荣誉证书"
              v-model="resume_certificate"
              :autosize="{ minRows: 4 }"
            />
          </el-form-item>
          <el-form-item>
            <span
              class="bottom-delete"
              @click="
                () => {
                  certificateShow = !certificateShow
                  resume_certificate = ''
                }
              "
            >
              <i class="el-icon-delete"></i>
            </span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 荣誉证书 -->
    <!-- 技能证书 -->
    <div class="resumeSection">
      <div class="resumeSection__left">
        <h2 class="resumeSection_title">技能证书</h2>
      </div>
      <div class="resumeSection__right">
        <div
          class="add-button"
          v-if="!SkillsShow"
          @click="SkillsShow = !SkillsShow"
        >
          <i class="el-icon-plus"></i>
          添加
        </div>
        <el-form v-else>
          <el-form-item>
            <el-input
              type="textarea"
              placeholder="请输入技能证书"
              v-model="resume_skill"
              :autosize="{ minRows: 4 }"
            />
          </el-form-item>
          <el-form-item>
            <span
              class="bottom-delete"
              @click="
                () => {
                  SkillsShow = !SkillsShow
                  resume_skill = ''
                }
              "
            >
              <i class="el-icon-delete"></i>
            </span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 技能证书 -->
    <!-- 自我评价 -->
    <div class="resumeSection">
      <div class="resumeSection__left">
        <h2 class="resumeSection_title">自我评价</h2>
      </div>
      <div class="resumeSection__right">
        <div
          class="add-button"
          v-if="!selfEvaluationShow"
          @click="selfEvaluationShow = !selfEvaluationShow"
        >
          <i class="el-icon-plus"></i>
          添加
        </div>
        <el-form v-else>
          <el-form-item>
            <el-input
              type="textarea"
              placeholder="请输入自我评价"
              v-model="resume_self"
              :autosize="{ minRows: 4 }"
            />
          </el-form-item>
          <el-form-item>
            <span
              class="bottom-delete"
              @click="
                () => {
                  selfEvaluationShow = !selfEvaluationShow
                  resume_self = ''
                }
              "
            >
              <i class="el-icon-delete"></i>
            </span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 自我评价 -->
  </div>
  <div
    ref="footerAction"
    :class="[
      'resumeEdit-footerAction',
      { 'resumeEdit-footerAction--fixed': footerActionFixed },
    ]"
  >
    <div class="footerAction__wrapper">
      <el-button style="width: 120px" round @click="cancel">取消</el-button>
      <el-button style="width: 120px" type="primary" round @click="handleClick"
        >保存</el-button
      >
    </div>
  </div>
  <div class="footer"></div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  reactive,
  ref,
  shallowRef,
  toRefs,
  unref,
} from 'vue'
import Header from '@/layout/header/index.vue'
import { getOffsetTop, validatorEmail, validatorMobile } from '@/utils'
import { throttle } from 'lodash-es'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { addEditResume, EditData, getProfileResumeById } from '@/api/resume'
import { ResumeState } from '@/store/modules/resume'
export default defineComponent({
  name: 'ResumeEditor',
  components: {
    Header,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const selfEvaluationShow = ref(false)
    const SkillsShow = ref(false)
    const certificateShow = ref(false)
    const footerActionFixed = ref(false)
    const footerAction = ref<HTMLLIElement>()

    // div 元素 吸附 计算
    const footerActionFixedShouleThres = computed(() => {
      const topSum = getOffsetTop(
        document.body,
        footerAction.value as HTMLElement
      )
      console.log(topSum, 'topSum')
      return topSum + (footerAction.value as HTMLElement).offsetHeight
    })
    nextTick(() => {
      onPageScroll()
    })

    const profileResume = shallowRef({} as ResumeState)
    // 此处写法不明智  实际上可以 用 vuex state 来代替
    function setProfileResume() {
      console.log(profileResume, 'profileResume')
      const {
        name,
        age,
        gender,
        telephone,
        email,
        educational,
        major,
        school,
        specialty,
        certificate,
        selfevaluation,
      } = unref(profileResume)
      state.resume_info.name = name || state.resume_info.name
      state.resume_info.age = age || state.resume_info.age
      state.resume_info.email = email || state.resume_info.email
      state.resume_info.gender = gender || state.resume_info.gender
      state.resume_info.mobile_number =
        telephone || state.resume_info.mobile_number
      state.resume_edu.school = school || state.resume_edu.school
      state.resume_edu.education = educational || state.resume_edu.education
      state.resume_edu.major = major || state.resume_edu.major
      state.resume_skill = specialty || state.resume_skill
      state.resume_certificate = certificate || state.resume_certificate
      state.resume_self = selfevaluation || state.resume_self
    }
    // 此处写法不明智
    const state = reactive({
      resume_info: {
        name: '',
        mobile_number: '',
        email: '',
        gender: '',
        age: '',
      },
      resume_edu: {
        school: '',
        education: '',
        major: '',
      },
      resume_skill: '',
      resume_certificate: '',
      resume_self: '',
    })
    const education = ref([
      {
        value: '大专',
        label: '大专',
      },
      {
        value: '本科',
        label: '本科',
      },
      {
        value: '其他',
        label: '其他',
      },
    ])
    const rules = reactive({
      resume_info: {
        name: [{ required: true, message: '名字不能为空', trigger: 'blur' }],
        gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
        mobile_number: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { validator: validatorMobile, trigger: 'blur' },
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { validator: validatorEmail, trigger: 'blur' },
        ],
      },
      resume_edu: {
        school: [
          { required: true, message: '学校名称不能为空', trigger: 'blur' },
        ],
        education: [
          { required: true, message: '请选择学历', trigger: 'change' },
        ],
        major: [{ required: true, message: '专业不能为空', trigger: 'blur' }],
        startYear: [
          { required: true, message: '请选择开始日期', trigger: 'blur' },
        ],
        endYear: [
          { required: true, message: '请选择结束日期', trigger: 'blur' },
        ],
      },
    })
    const resumeInfoRef = ref<HTMLElement>()
    const resumeEduRef = ref<HTMLElement>()
    const id = localStorage.getItem('user_id')
    const onPageScroll = () => {
      footerActionFixed.value =
        window.scrollY <
        footerActionFixedShouleThres.value - window.innerHeight - 80
    }
    //  简历编辑 模块
    const handleClick = () => {
      const infoValidator = (resumeInfoRef.value as any).validate()
      const eduValidator = (resumeEduRef.value as any).validate()
      Promise.all([infoValidator, eduValidator])
        .then(() => {
          // console.log(1)
          const {
            resume_info,
            resume_skill: specialty,
            resume_edu,
            resume_self: selfevaluation,
            resume_certificate: certificate,
          } = toRefs(state)
          const {
            name,
            mobile_number: telephone,
            email,
            gender,
            age,
          } = resume_info.value
          const { school, education: educational, major } = resume_edu.value
          const data: EditData & { id: string } = {
            name,
            gender,
            age,
            email,
            telephone,
            selfevaluation: selfevaluation.value,
            school,
            specialty: specialty.value,
            educational,
            certificate: certificate.value,
            major,
            portrait: '',
            id,
          }
          console.log(data)
          addEditResume(data)
            .then((res) => {
              console.log(res)
              ElMessage({
                message: res.data.message,
                type: 'success',
              })
              if (route.query.redirect) {
                setTimeout(() => {
                  router.push(route.query.redirect as string)
                }, 500)
                return
              }
              setTimeout(() => {
                router.push('/resume')
              }, 500)
            })
            .catch(() => {
              ElMessage({
                message: '保存简历失败',
                type: 'error',
              })
            })
        })
        .catch(() => {
          ElMessage({
            showClose: true,
            message: '请你完善必填项',
            type: 'warning',
          })
        })
    }
    // 取消 编辑
    const cancel = () => {
      router
        .replace({
          path: '/resume',
          query: {
            redirect: +new Date().getTime(),
          },
        })
        .then(() => {
          console.log('1')
        })
    }
    onMounted(async () => {
      window.addEventListener('scroll', throttle(onPageScroll, 80))
      // getProfileResume()
      try {
        const { data } = await getProfileResumeById(id)
        //  console.log(res)
        const profile = data.message.studentResumeList[0]
        console.log(profile)
        if (profile) {
          profileResume.value = profile
        }
        setProfileResume()
      } catch (err) {
        ElMessage({
          message: '接口错误',
          type: 'error',
        })
      }
    })
    return {
      ...toRefs(state),
      rules: unref(rules),
      education,
      selfEvaluationShow,
      SkillsShow,
      certificateShow,
      footerActionFixed,
      footerAction,
      resumeInfoRef,
      resumeEduRef,
      handleClick,
      cancel,
      profileResume,
    }
  },
})
</script>

<style lang="scss" scoped>
body {
  background: white;
}

.resume-edit {
  width: 1064px;
  min-height: 100vh;
  .resume-header {
    margin-top: 50px;
    font-weight: 800;
  }
}

.resumeSection {
  padding: 35px 0 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  &__left {
    width: 250px;
    margin-left: 20px;
    .resumeSection_title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.6;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 25px;
        height: 4px;
        background-color: $primary-color;
      }
    }
  }
  &__right {
    width: 648px;
    padding: 0 24px;
    .add-button {
      height: 32px;
      line-height: 32px;
      font-size: 20px;
      color: $primary-color;
      display: flex;
      align-items: center;
      cursor: pointer;
      i {
        margin-left: auto;
      }
    }
    .bottom-delete {
      display: flex;
      cursor: pointer;
      font-size: 18px;
      .el-icon-delete {
        margin-left: auto;
      }
    }
  }
}
.resumeEdit-footerAction {
  padding: 30px 190px;
  display: flex;
  z-index: 20;
  height: 80px;
  align-items: center;
  &--fixed {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0 190px;
    background-color: $white;
    box-shadow: 0 2px 16px 0 rgb(31 35 41 / 5%);
  }
  .footerAction__wrapper {
    margin-left: auto;
  }
}

.footer {
  height: 300px;
  /* background-color: rgba($color: #000000, $alpha: 0.5); */
  margin-top: 20px;
}
</style>
