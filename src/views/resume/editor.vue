<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-12 12:18:59
 * @LastEditTime: 2021-06-13 14:10:36
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
        <el-form :model="resume_info" :rules="rules.resume_info">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="resume_info.name" placeholder="请输入" />
          </el-form-item>
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
        <el-form :model="resume_edu" :rules="rules.resume_edu">
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
          <el-form-item label="时间段" required>
            <el-col>
              <el-form-item prop="startYear">
                <el-date-picker
                  v-model="resume_edu.startYear"
                  placeholder="请选择开始日期"
                  type="year"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col> <span style="margin: 0 10px">至</span></el-col>
            <el-col>
              <el-form-item prop="endYear">
                <el-date-picker
                  v-model="resume_edu.endYear"
                  placeholder="请选择结束日期"
                  type="year"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 教育经历 -->
    <!-- 实习经历 -->
    <div class="resumeSection">
      <div class="resumeSection__left">
        <h2 class="resumeSection_title">基础信息</h2>
      </div>
      <div class="resumeSection__right">
        <el-form>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="resume_info.name" />
          </el-form-item>
          <el-form-item label="手机号码" prop="mobile_number">
            <el-input v-model="resume_info.mobile_number"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="resume_info.email"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 实习经历 -->
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
      <el-button style="width: 120px" round>取消</el-button>
      <el-button style="width: 120px" type="primary" round>保存</el-button>
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
  toRefs,
  unref,
} from 'vue'
import Header from '@/layout/header/index.vue'
import { getOffsetTop, validatorEmail, validatorMobile } from '@/utils'
import { throttle } from 'lodash-es'
export default defineComponent({
  name: 'ResumeEditor',
  components: {
    Header,
  },
  setup() {
    const selfEvaluationShow = ref(false)
    const footerActionFixed = ref(false)
    const footerAction = ref<HTMLLIElement>()

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
    const state = reactive({
      resume_info: {
        name: '',
        mobile_number: '',
        email: '',
      },
      resume_edu: {
        school: '',
        education: '',
        major: '',
        startYear: '',
        endYear: '',
      },
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

    const onPageScroll = () => {
      // console.log(footerAction.value?.offsetHeight, 'offsetHeight')
      // console.log(footerAction.value?.offsetTop, 'offsetTop')
      // console.log(footerAction.value?.scrollHeight, 'scrollHeight')
      // console.log(document.body.scrollHeight)
      // console.log(document.body.scrollTop)
      // footerActionFixed.value =
      //   window.screenY < footerActionFixedShouleThres.value - window.innerHeight
      footerActionFixed.value =
        window.scrollY <
        footerActionFixedShouleThres.value - window.innerHeight - 80
    }

    onMounted(() => {
      window.addEventListener('scroll', throttle(onPageScroll, 80))
    })
    return {
      ...toRefs(state),
      rules: unref(rules),
      education,
      selfEvaluationShow,
      footerActionFixed,
      footerAction,
    }
  },
})
</script>

<style lang="scss" scoped>
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
