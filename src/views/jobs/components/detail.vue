<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-17 10:54:15
 * @LastEditTime: 2021-07-04 20:05:37
 * @Description:
-->

<template>
  <div class="job-detail-container wrapper">
    <div class="job-detail">
      <div class="job-header">
        <span>{{ jobDetail.company }}</span>
      </div>
      <div class="job-info">
        <span>杭州</span>
        <span class="inline"></span>
        <span>{{ jobDetail.education }}</span>
      </div>
      <div class="job-title">职位描述</div>
      <div class="job-content">
        {{ jobDetail.information }}
      </div>
      <div class="job-title">职位要求</div>
      <div class="job-content">
        {{ jobDetail.demand }}
      </div>

      <div class="post-btn">
        <el-button round type="primary">投递</el-button>
      </div>
    </div>
    <div class="job-sider">
      <div class="title">公司基本信息</div>
      <div class="company-info">
        <div class="left-img">
          <el-avatar
            :src="companyInfo.icon"
            shape="square"
            :size="60"
            fit="fill"
          ></el-avatar>
        </div>
        <router-link
          class="comp-name"
          target="_blank"
          :to="`/detail/company/${company_id}`"
          >{{ companyInfo.company }}
        </router-link>
      </div>
      <p>
        <i class="el-icon-user"></i>
        {{ companyInfo.scale }}
      </p>
      <p>
        <i class="el-icon-menu"></i>
        {{ companyInfo.companytype }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getJobDetailById } from '@/api/job'
import { getCompanyInfoById } from '@/api/conpany'
import { CompanyColumn, JobsColumn } from '@/store/modules/types'

export default defineComponent({
  name: 'JobsDetail',
  props: {
    id: String,
    company_id: String,
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const jobDetail = ref<JobsColumn>({} as JobsColumn)
    const companyInfo = ref<CompanyColumn>({} as CompanyColumn)
    onMounted(async () => {
      const { data } = await getJobDetailById(props.id as string)
      jobDetail.value = data.message.companyPositionList[0]
      const { data: data1 } = await getCompanyInfoById(
        props.company_id as string
      )
      companyInfo.value = data1.message.companyInformationList[0]
    })
    return {
      route,
      router,
      jobDetail,
      companyInfo,
    }
  },
})
</script>

<style lang="scss" scoped>
.job-detail-container {
  display: flex;
}

.job-sider {
  width: 280px;
  margin-top: 60px;

  p {
    line-height: 20px;
    margin-bottom: 25px;
    font-size: 18px;

    i {
      margin-right: 20px;
    }
  }

  .title {
    line-height: 1.7;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 600;
    color: #1f2329;
  }

  .company-info {
    display: flex;
    align-items: center;
    margin-bottom: 26px;

    .left-img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 14px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .comp-name {
      font-size: 16px;

      &:hover {
        color: $primary-color;
      }
    }
  }
}

.job-detail {
  max-width: 800px;
  flex: 1;
  min-height: 600px;
  margin: 60px 0 110px 60px;
  font-size: 16px;

  .job-header {
    font-weight: 800;
    margin-bottom: 10px;
    font-size: 30px;
    color: #1f2329;
  }

  .job-info {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

    .inline {
      width: 1px;
      height: 12px;
      display: inline-block;
      background: #bbbfc4;
      margin: 0 8px;
    }
  }

  .job-title {
    margin: 50px 0 8px;
    font-size: 21px;
    color: #1f2329;
    line-height: 1.6;
    font-weight: 700;
  }

  .job-content {
    line-height: 2em;
    white-space: pre-line;
    font-size: 14px;
  }

  .post-btn {
    margin: 50px 0;

    :deep(.el-button) {
      min-width: 120px;
    }
  }
}

:deep(.el-avatar) {
  img {
    width: 100%;
  }
}
</style>
