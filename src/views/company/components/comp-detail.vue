<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-21 08:44:26
 * @LastEditTime: 2021-07-04 21:27:36
 * @Description:
-->
<template>
  <div class="company-banner">
    <div class="company-info wrapper">
      <div class="company-logo">
        <el-avatar
          :src="companyDetail.icon"
          :size="103"
          shape="square"
          fit="fill"
        ></el-avatar>
      </div>
      <div class="info-primary sllipsis">
        <p class="name">{{ companyDetail.company }}</p>
        <p class="sign ellipsis">
          {{ companyDetail.scale }}<em class="dot"></em
          >{{ companyDetail.companytype }}
        </p>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="company-content">
      <div class="job-sec">
        <h3>简介</h3>
        <div class="text">
          {{ companyDetail.synopsis }}
        </div>
      </div>
      <div class="job-sec">
        <h3>在招职位</h3>
        <CompanyJobs :companyJobs="companyJobs" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCompanyInfoById } from '@/api/conpany'
import { getAllJobsByCompanyId } from '@/api/job'
import { CompanyColumn } from '@/store/modules/types'
import { defineComponent, onMounted, shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import CompanyJobs from './company-job.vue'

export default defineComponent({
  name: 'CompanyDetail',
  components: {
    CompanyJobs,
  },
  setup() {
    const route = useRoute()
    const id = route.params.id as string
    const companyDetail = shallowRef({} as CompanyColumn)
    const companyJobs = shallowRef<any>({})
    onMounted(async () => {
      const { data } = await getCompanyInfoById(id)
      companyDetail.value = data.message.companyInformationList[0]
      const { data: data1 } = await getAllJobsByCompanyId(id)
      companyJobs.value = data1.message.companyPositionList
      console.log(companyJobs.value)
    })
    return {
      companyDetail,
      companyJobs,
    }
  },
})
</script>

<style lang="scss" scoped>
.company-banner {
  width: 100%;
  background-color: #444c5f;
  height: 166px;
  padding: 29px 0;
  box-sizing: border-box;
  .company-info {
    display: flex;
    .company-logo {
      width: 103px;
      height: 103px;
      border-radius: 5px;
      overflow: hidden;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.info-primary {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: $white;
  .name {
    font-size: 30px;
    line-height: 1.6;
    font-weight: 800;
  }
  .sign {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    .dot {
      display: inline-block;
      width: 2px;
      height: 2px;
      border-radius: 100%;
      vertical-align: middle;
      margin: 0 7px;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
}

.company-content {
  max-width: 880px;
  padding-top: 30px;
  .job-sec {
    margin-bottom: 25px;
    h3 {
      font-size: 16px;
      font-weight: 800;
      color: #444c5f;
      position: relative;
      margin-bottom: 20px;
      &::after {
        content: '';
        width: 15px;
        height: 3px;
        display: block;
        position: absolute;
        background: $primary-color;
        bottom: -6px;
      }
    }
    .text {
      word-break: break-all;
      word-wrap: break-word;
      line-height: 30px;
      font-size: 15px;
    }
  }
}

:deep(.el-avatar) {
  img {
    width: 100%;
  }
}
</style>
