<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-13 13:50:35
 * @LastEditTime: 2021-07-13 15:08:09
 * @Description:
-->

<template>
  <div class="resume-form">
    <div class="resumeViewSection">
      <h2 class="resumeViewSection__title">基本信息</h2>
      <div class="info-wrapper">
        <div class="resumeViewForm resumeAvatar">
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
        <div class="info-avatar">
          <el-avatar shape="square" :src="profileResume.portrait"></el-avatar>
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
      <template v-if="!profileResume.certificate">
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
      <template v-if="!profileResume.specialty">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResumeComp',
  props: {
    profileResume: {
      type: Object,
    },
  },
  setup() {
    //
  },
})
</script>

<style lang="scss" scoped>
.resume-form {
  position: relative;
  /* width: 1016px; */
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

.info-wrapper {
  display: flex;
}
.resumeAvatar {
  width: 70%;
}
:deep(.el-empty) {
  padding: 0;
  .el-empty__image {
    width: 90px;
  }
}

:deep(.el-avatar--large) {
  width: 206px;
  height: 218px;
}
</style>
