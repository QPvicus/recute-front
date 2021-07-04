<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-21 08:44:26
 * @LastEditTime: 2021-07-04 19:18:06
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
        <ul class="jobs-list">
          <li>
            <div class="job-head">
              <span>{{ '前端' }}</span>
              <span class="addr">{{ '杭州' }}</span>
            </div>
            <div class="job-primary">
              <span class="salary">{{ '150~200元/天' }}</span>
              <span class="edu">{{ '大专' }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCompanyInfoById } from '@/api/conpany'
import { CompanyColumn } from '@/store/modules/types'
import { defineComponent, onMounted, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CompanyDetail',
  setup() {
    const route = useRoute()
    const id = route.params.id as string
    const companyDetail = shallowRef({} as CompanyColumn)
    onMounted(async () => {
      const { data } = await getCompanyInfoById(id)
      console.log(data)
      companyDetail.value = data.message.companyInformationList[0]
      console.log(companyDetail.value)
    })
    return {
      companyDetail,
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

.jobs-list {
  li {
    height: 70px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    padding: 10px 0 4px 14px;
    cursor: pointer;
    margin-bottom: 15px;
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    .job-head {
      font-size: 16px;
      color: $primary-color;
      line-height: 26px;
      margin-bottom: 10px;
      .addr {
        margin-left: 15px;
        &::after {
          content: ']';
        }
        &::before {
          content: '[';
        }
      }
    }

    .job-primary {
      font-size: 16px;
      .salary {
        color: $red;
        margin-right: 15px;
      }
    }
  }
}

:deep(.el-avatar) {
  img {
    width: 100%;
  }
}
</style>
