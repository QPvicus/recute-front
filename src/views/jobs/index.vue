<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 11:44:29
 * @LastEditTime: 2021-07-05 20:02:02
 * @Description:
-->

<template>
  <div class="search-box wrapper">
    <el-input class="search" placeholder="请输入职位" v-model="searchValue">
      <template #append>
        <el-button icon="el-icon-search" @click="SearchPost"></el-button>
      </template>
    </el-input>
    <div class="filter-search-box">
      <el-dropdown @command="command1">
        <span class="el-dropdown-link">
          薪资要求<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item in salary_list" :key="item.command">
              <el-dropdown-item :command="item.command">{{
                item.value
              }}</el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown @command="command2">
        <span class="el-dropdown-link">
          公司规模<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item in comany_scale_list" :key="item.command">
              <el-dropdown-item :command="item.command">{{
                item.value
              }}</el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <JobsDetail :jobList="jobList" />
    <div class="pagination">
      <el-pagination
        @current-change="currentChange"
        background
        :page-size="6"
        layout="prev, pager, next"
        :total="page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { getJobList, getJobsListSearch } from '@/api/job'
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  shallowRef,
  toRefs,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import JobsDetail from './components/job-list.vue'
export default defineComponent({
  name: 'Jobs',
  components: {
    JobsDetail,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log(route)
    const searchValue = ref('')
    const state = reactive({
      salary: '',
      scale: '',
    })
    const salary_list = [
      { value: '不限', command: '' },
      { value: '2K以下', command: '2K以下' },
      { value: '2-3K', command: '2-3K' },
      { value: '3-4K', command: '3-4K' },
    ]
    const comany_scale_list = [
      { value: '不限', command: '' },
      { value: '0-49人', command: '0-49人' },
      { value: '50-99人', command: '50-99人' },
      { value: '100-499人', command: '100-499人' },
      { value: '500以上人', command: '500以上人' },
    ]
    const jobList = shallowRef([])

    const command1 = (o: string) => {
      state.salary = o
      getJobsListByScreen()
    }
    const command2 = (o: string) => {
      state.scale = o
      getJobsListByScreen()
    }
    const page = reactive({
      nowPage: 1,
      sumPage: 6,
      total: 5,
    })
    const currentChange = (index: number) => {
      page.nowPage = index
      // if ()
      getJobAllList(searchValue.value)
    }
    function resetPage() {
      page.sumPage = 6
      page.nowPage = 1
    }
    const SearchPost = () => {
      resetPage()
      getJobAllList(searchValue.value)
    }
    const getJobsListByScreen = async () => {
      const { data } = await getJobsListSearch(
        state.salary,
        state.scale,
        page.nowPage,
        page.sumPage
      )
      console.log(state.salary, state.scale, page.nowPage, page.sumPage)
      console.log(data)
      jobList.value = data.message.positionVOList
    }
    const getJobAllList = async (value?: string) => {
      const { data } = await getJobList(page.nowPage, page.sumPage, value)
      jobList.value = data.message.positionVOList
      page.total = data.message.cont
      console.log(jobList.value)
    }
    onMounted(() => {
      getJobAllList()
    })

    return {
      searchValue,
      ...toRefs(state),
      command1,
      command2,
      salary_list,
      comany_scale_list,
      router,
      SearchPost,
      page,
      currentChange,
      jobList,
    }
  },
})
</script>

<style lang="scss" scoped>
.search-box {
  margin-top: 20px;
  width: 100%;
  .search {
    width: 600px;
    height: 44px;
  }
}
.search :deep(.el-input__inner) {
  height: 100% !important;
}

:deep(.el-input-group__append) {
  background-color: $primary-color;
}
:deep(.el-icon-search) {
  font-size: 20px;
  color: $white;
}
.filter-search-box {
  margin-top: 10px;
}
:deep(.el-dropdown) {
  margin-right: 20px;
}

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
</style>
