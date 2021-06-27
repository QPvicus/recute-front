<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-12 12:16:26
 * @LastEditTime: 2021-06-27 20:52:10
 * @Description:
-->

<template>
  <Header />
  <div class="resume-page">
    <div class="banner"></div>
    <div class="profile-header">
      <div class="profile-header__left">
        <h1>我的简历</h1>
        <p>
          <i class="el-icon-time"></i>
          <span>最新时间: {{ profileResume.gmtModified }}</span>
        </p>
      </div>
      <div>
        <el-button
          size="medium"
          type="primary"
          icon="el-icon-edit"
          round
          @click="edit"
        >
          编辑
        </el-button>
      </div>
    </div>
    <div class="resume-form">
      <div class="resumeViewSection">
        <h2 class="resumeViewSection__title">基本信息</h2>

        <div class="resumeViewForm">
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">姓名</div>
            <div class="resumeViewItem__content">{{ profileResume.name }}</div>
          </div>
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">性别</div>
            <div class="resumeViewItem__content">
              {{ profileResume.gender }}
            </div>
          </div>
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">年龄</div>
            <div class="resumeViewItem__content">{{ profileResume.age }}</div>
          </div>
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">手机号</div>
            <div class="resumeViewItem__content">
              {{ profileResume.telephone }}
            </div>
          </div>
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">邮箱</div>
            <div class="resumeViewItem__content">{{ profileResume.email }}</div>
          </div>
        </div>
      </div>
      <div class="resumeViewSection">
        <h2 class="resumeViewSection__title">教育经历</h2>

        <div class="resumeViewForm">
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">学校</div>
            <div class="resumeViewItem__content">
              {{ profileResume.school }}
            </div>
          </div>
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">学历</div>
            <div class="resumeViewItem__content">
              {{ profileResume.educational }}
            </div>
          </div>
          <div class="resumeViewItem">
            <div class="resumeViewItem__label">专业</div>
            <div class="resumeViewItem__content">{{ profileResume.major }}</div>
          </div>
        </div>
      </div>
      <div class="resumeViewSection">
        <h2 class="resumeViewSection__title">荣誉证书</h2>
        <template v-if="profileResume.certificate.length === 0">
          <el-empty></el-empty>
        </template>
        <template v-else>
          <div class="resumeViewSection_content">
            {{ profileResume.certificate }}
          </div>
        </template>
      </div>
      <div class="resumeViewSection">
        <h2 class="resumeViewSection__title">技能证书</h2>
        <template v-if="profileResume.specialty.length === 0">
          <el-empty></el-empty>
        </template>
        <template v-else>
          <div class="resumeViewSection_content">
            {{ profileResume.specialty }}
          </div>
        </template>
      </div>
      <div class="resumeViewSection">
        <h2 class="resumeViewSection__title">自我评价</h2>
        <template v-if="!profileResume.selfevaluation">
          <el-empty></el-empty>
        </template>
        <template v-else>
          <div class="resumeViewSection_content">
            {{ profileResume.selfevaluation }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Header from '@/layout/header/index.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalState } from '@/store/types'
import { getProfileResume } from './getProfileResume'
export default defineComponent({
  name: 'Resume',
  components: {
    Header,
  },
  setup() {
    const store = useStore<GlobalState>()
    // const getProfileResume = () => {
    //   store.dispatch(`resume/${GET_PROFILE_RESUME}`, id).then((res) => {
    //     store.dispatch(
    //       `resume/${SET_PROFILE_RESUME}`,
    //       res.message.studentResumeList[0]
    //     )
    //     nextTick()
    //     // profileResume.value = {...profileResume.value, }
    //   })
    // }
    const profileResume = store.getters['resume/getResume']
    console.log(profileResume)
    const router = useRouter()
    const edit = () => {
      router.push('/resume/edit')
    }
    onMounted(() => {
      getProfileResume()
    })
    return {
      edit,
      profileResume,
    }
  },
})
</script>

<style lang="scss" scoped>
.resume-page {
  min-height: 100vh;
  position: relative;
  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 300px;
    background-image: url('@/assets/2.jpg');
    background-size: cover;
    background-position: center center;
  }
}
.profile-header {
  position: relative;
  margin: 0 auto;
  width: 1016px;
  height: 124px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  &__left {
    h1 {
      font-size: 30px;
      color: $white;
      height: 50px;
      line-height: 50px;
      font-weight: 700;
    }
    p {
      margin-top: 4px;
      font-size: 13px;
      line-height: 1.75;
      color: $white;
      span {
        margin: 0 4px;
      }
    }
  }
}

.resume-form {
  position: relative;
  width: 1016px;
  margin: 0 auto 130px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background-color: $white;
  padding: 8px 50px 40px;
}
.resumeViewSection {
  margin-top: 30px;
  box-sizing: border-box;
  min-height: 200px;
  &__title {
    height: 32px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.6;
    border-bottom: 3px solid $primary-color;
  }
  &_content {
    word-wrap: break-word;
    white-space: pre-line;
    font-size: 16px;
    line-height: 1.75;
    color: #1f2329;
  }
  .resumeViewForm {
    display: flex;
    flex-wrap: wrap;
    .resumeViewItem {
      flex: 0 0 auto;
      width: 50%;
      margin-bottom: 20px;
      min-height: 50px;
      &__label {
        font-size: 14px;
        color: #ccc;
        opacity: 0.8;
        margin-bottom: 5px;
      }
      &__content {
        word-wrap: break-word;
        font-size: 16px;
      }
    }
  }
}

:deep(.el-empty) {
  padding: 0;
  .el-empty__image {
    width: 90px;
  }
}
</style>
