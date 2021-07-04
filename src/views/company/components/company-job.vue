<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-04 21:20:08
 * @LastEditTime: 2021-07-04 21:39:37
 * @Description:
-->

<template>
  <template v-if="companyJobs.length > 0">
    <ul class="jobs-list">
      <template v-for="item in companyJobs" :key="item.id">
        <li>
          <div class="job-head">
            <span>{{ item.positionName }}</span>
            <span class="addr">{{ '杭州' }}</span>
          </div>
          <div class="job-primary">
            <span class="salary">{{ item.remuneration }}</span>
            <span class="edu">{{ item.education }}</span>
            <template v-for="tag in item.safeguard.split(',')" :key="tag">
              <el-tag size="small" style="margin-right: 10px">{{ tag }}</el-tag>
            </template>
          </div>
        </li>
      </template>
    </ul>
  </template>
  <template v-else>
    <el-empty description="暂无职位信息"></el-empty>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'CompanyJobs',
  props: {
    companyJobs: {
      type: Array as PropType<any[]>,
    },
  },
})
</script>

<style lang="scss" scoped>
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
      .edu {
        margin-right: 15px;
      }
    }
  }
}

.no-data {
  display: flex;
  font-size: 30px;
}
</style>
