<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-11 18:36:30
 * @LastEditTime: 2021-07-05 19:00:33
 * @Description:
-->

<template>
  <div class="post-card">
    <div class="post-title">{{ title }}</div>
    <ul class="post-list">
      <template v-for="item in post.slice(0, 6)" :key="item.id">
        <li class="post-list-item" shadow="hover" @click="goJobById(item.id)">
          <div class="post-li">
            <a class="job_info">
              <div class="job_info--top">
                <p class="name ellipsis">{{ item.positionName }}</p>
                <i class="iconfont icon-dialog"></i>
                <p class="salary">{{ item.remuneration }}</p>
              </div>
              <p class="job-text ellipsis">
                {{ '杭州' }}
                <span class="line"></span>
                {{ item.education }}
              </p>
            </a>
            <div class="job_info_bottom">
              <div class="company-avatar">
                <img :src="item.icon" alt="" />
              </div>
              <span class="company ellipsis">{{ item.company }}</span>
              <span class="address">杭州</span>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PostCard',
  props: {
    post: {
      type: Array as PropType<any[]>,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter()
    console.log(props.post)
    const goJobById = (id: string) => {
      router.push({
        name: 'JobsDetail',
        params: {
          id,
        },
      })
    }

    return {
      goJobById,
    }
  },
})
</script>

<style lang="scss">
.post-card {
  width: 105%;
  overflow: hidden;
  .post-title {
    font-size: 24px;
    text-align: center;
    position: relative;
    margin-bottom: 24px;
    color: #414a60;
    font-weight: bold;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      margin: 0 10px;
      width: 50px;
      height: 1px;
      vertical-align: middle;
      background-color: #d1d4db;
    }
  }
}

.post-list {
  min-height: 40px;
  width: 104%;
  display: flex;
  flex-wrap: wrap;
  &-item {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    overflow: hidden;
    background-color: #ffffff;
    width: 384px;
    height: 130px;
    margin: 0 16px 16px 0;
    color: #303133;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    .post-li {
      display: block;
      height: 130px;
      width: 384px;
      box-sizing: border-box;
      padding: 16px 20px;
    }
  }
}

.job_info {
  display: flex;
  flex-direction: column;
  width: 100%;
  &--top {
    display: flex;
    align-items: center;
    .name {
      color: #414a60;
      margin-right: 8px;
    }
    .icon-dialog {
      color: #1989fa;
    }
    .salary {
      font-size: 15px;
      color: red;
      line-height: normal;
      text-align: right;
      flex: 1;
    }
  }

  .job-text {
    font-size: 14px;
    color: #8d92a1;
    max-width: 240px;
    line-height: 28px;
  }
}

.job_info_bottom {
  display: flex;
  align-items: center;
  margin-top: 14px;
  border-top: 1px solid #eef0f5;
  padding-top: 8px;
  .company-avatar {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    line-height: normal;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .company {
    margin-left: 10px;
    margin-right: 20px;
    max-width: 160px;
  }

  .address {
    flex: 1;
  }
}
</style>
