<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-03 15:39:40
 * @LastEditTime: 2021-07-05 10:48:47
 * @Description:
-->

<template>
  <template v-if="jobList.length > 0">
    <div class="job-box">
      <ul class="job-list">
        <template v-for="item in jobList" :key="item.id">
          <li @click="routerTo(item.id, item.companyId)">
            <div class="job-primary">
              <div class="info-primary">
                <div class="job-title ellipsis">
                  <span class="job-name">{{ item.positionName }}</span>
                  <span class="job-addr">杭州</span>
                </div>
                <div class="job-limit">
                  <span class="salary">{{ item.remuneration }}</span>
                  <span>{{ item.education }}</span>
                </div>
              </div>
              <div class="info-company">
                <div class="company-text ellipsis">
                  <h3>{{ item.company }}</h3>
                  <p>
                    {{ item.companytype }} <span class="line"></span>
                    {{ item.scale }}
                  </p>
                </div>
                <div class="company-logo">
                  <el-avatar
                    :size="55"
                    :src="item.icon"
                    shape="square"
                    fit="fill"
                  ></el-avatar>
                </div>
              </div>
            </div>
            <div class="job-footer">
              <div class="tags ellipsis">
                <template v-for="tag in item.classify.split(',')" :key="tag">
                  <el-tag type="info" size="small">{{ tag }}</el-tag>
                </template>
              </div>
              <div class="company-desc ellipsis">
                {{ item.safeguard }}
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </template>
  <template v-else>
    <el-empty description="暂无数据"></el-empty>
  </template>
</template>

<script lang="ts">
import { JobsColumn } from '@/store/modules/types'
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'JobsList',
  props: {
    q: {
      type: String,
      default: '',
    },
    scale: {
      type: String,
      default: '',
    },
    salary: {
      type: String,
      default: '',
    },
    jobList: {
      type: Array as PropType<JobsColumn[]>,
    },
  },
  setup() {
    const router = useRouter()
    const routerTo = (id: string, company_id: string) => {
      router.push({
        name: 'JobsDetail',
        params: {
          id,
        },
        query: {
          company_id,
        },
      })
    }
    return {
      router,
      routerTo,
    }
  },
})
</script>

<style lang="scss" scoped>
.job-box {
  margin-top: 20px;
  width: 100%;
  display: flex;
  .job-list {
    width: 890px;
    li {
      height: 130px;
      background: #fff;
      cursor: pointer;
      margin-bottom: 10px;
      padding: 0 20px;
      box-sizing: border-box;
      &:hover {
        box-shadow: 0 8px 24px 0 rgb(187 191 196 / 20%);
      }
    }
  }
}

.job-primary {
  display: flex;
  height: 70px;
  padding-top: 20px;
  > * {
    flex: 1;
  }

  .info-primary {
    display: flex;
    flex-direction: column;
    .job-title {
      font-size: 16px;
      display: flex;
      color: $primary-color;
      .job-name {
        max-width: 171px;
        margin-right: 10px;
      }
      .job-addr::before {
        content: '[';
        display: inline-block;
      }
      .job-addr::after {
        content: ']';
        display: inline-block;
      }
    }
    .job-limit {
      margin-top: 10px;
      display: flex;
      font-size: 16px;
      .salary {
        color: $red;
        margin-right: 15px;
      }
    }
  }
}
.info-company {
  display: flex;
  .company-logo {
    width: 54px;
    height: 54px;
    border: 1px solid #eee;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .company-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    h3 {
      color: $primary-color;
      font-size: 16px;
    }
    p {
      max-width: 270px;
      margin-top: 10px;
      font-size: 12px;
      display: flex;
      align-items: center;
      .line {
        width: 2px;
        height: 12px;
        background-color: #9fa3b0;
        display: inline-block;
        margin: 0 10px;
      }
    }
  }
}

.job-footer {
  display: flex;
  align-items: center;
  width: 100%;
  > * {
    flex: 1;
  }
  .tags {
    display: flex;
    max-width: 50%;
    :deep(.el-tag) {
      margin-right: 10px;
    }
  }
  .company-desc {
    font-size: 13px;
  }
}

.pagination {
  margin-top: 10px;
}
:deep(.el-avatar) {
  img {
    width: 100%;
  }
}
</style>
