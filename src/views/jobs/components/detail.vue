<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-17 10:54:15
 * @LastEditTime: 2021-07-04 13:41:33
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
        {{ jobDetail.require }}
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
          :to="`/company/detail/${company_id}`"
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
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  unref,
  watch,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalState } from '@/store/types'
import { GET_COMPANY_DETAIL, GET_JOBS_DETAIL } from '@/store/constants'
import { useJobsStore } from '@/store1/modules/jobs'

export default defineComponent({
  name: 'JobsDetail',
  props: {
    id: String,
    company_id: String,
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const store = useStore<GlobalState>()
    const store1 = useJobsStore()
    // 解决 重复获取本地存得 JobDetail 不同id param 应该调用接口
    const jobDetail = computed(() =>
      store.state.jobs.jobsList.find((item) => item.id === props.id)
    )
    // const jobDetail = store1.jobDetail
    const companyInfo = computed(() =>
      store.state.jobs.jobsList.find(
        (item) => item.companyId === props.company_id
      )
    )
    onMounted(() => {
      if (!unref(jobDetail).id) {
        store.dispatch(`jobs/${GET_JOBS_DETAIL}`, props.id)
        // store1[GET_JOBS_DETAIL](props.company_id as string).then((res) => {
        //   console.log(res)
        // })
      }
      if (!unref(companyInfo)) {
        store.dispatch(`company/${GET_COMPANY_DETAIL}`, props.company_id)
      }
    })
    watch(
      [() => props.id, () => props.company_id],
      async ([id, company_id], [oldId, oldCompany_id]) => {
        console.log('11')
        store.dispatch(`jobs/${GET_JOBS_DETAIL}`, id)
        store.dispatch(`company/${GET_COMPANY_DETAIL}`, company_id)
      },
      { immediate: true }
    )
    onBeforeUnmount(() => {
      sessionStorage.removeItem('job_detail')
      sessionStorage.removeItem('comp_detail')
    })
    return {
      route,
      router,
      jobDetail,
      companyInfo,
      // ...toRefs(state),
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
