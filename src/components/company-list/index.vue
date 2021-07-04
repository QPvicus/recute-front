<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-03 09:45:26
 * @LastEditTime: 2021-07-04 13:22:50
 * @Description:
-->

<template>
  <div class="company-list">
    <ul>
      <template v-for="item in companyList" :key="item">
        <li @click="router.push(`/detail/company/${item.id}`)">
          <div class="company-info">
            <div class="left-image">
              <el-avatar
                fit="fill"
                :size="55"
                :src="item.icon"
                shape="square"
              ></el-avatar>
            </div>
            <div class="right-text">
              <h3 class="ellipsis">{{ item.company }}</h3>
              <p>{{ item.companytype }}</p>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_COMPANY_LIST } from '@/store/constants'
import { GlobalState } from '@/store/types'
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CompanyList',
  setup() {
    const router = useRouter()
    const store = useStore<GlobalState>()
    const page = reactive({
      nowPage: 1,
      sumPage: 30,
      total: 0,
    })
    const companyList = computed(() => store.state.company.companyList)
    onMounted(() => {
      store.dispatch(`company/${GET_COMPANY_LIST}`, {
        nowPage: page.nowPage,
        sumPage: page.sumPage,
      })
    })
    return {
      router,
      companyList,
    }
  },
})
</script>

<style lang="scss" scoped>
.company-list {
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      height: 100px;
      width: 285px;
      margin-right: 16px;
      margin-bottom: 16px;
      box-sizing: border-box;
      padding-top: 20px;
      padding-left: 10px;
      background: $white;
      &:hover {
        box-shadow: 0 2px 16px 0 rgb(31 35 41 / 5%);
        color: $primary-color;
        cursor: pointer;
      }

      .company-info {
        display: flex;
        justify-content: space-between;
        .left-image {
          width: 55px;
          height: 55px;
          border: 1px solid #eee;
          border-radius: 8px;
        }
        .right-text {
          flex: 1;
          text-align: right;
          box-sizing: border-box;
          padding-right: 20px;
          width: 200px;
          h3 {
            font-size: 16px;
          }
          p {
            margin-top: 15px;
          }
        }
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
