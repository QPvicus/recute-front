<template>
  <div class="home wrapper">
    <div
      style="
        background: rgba(0, 0, 0, 0.1);
        padding-left: 34px;
        padding-bottom: 13px;
      "
    >
      <div class="search-container margin-auto">
        <el-input placeholder="搜索职位" v-model="inputValue">
          <template #append>
            <el-button type="primary" @click="search">搜索</el-button>
          </template>
        </el-input>
      </div>
      <div class="search-hot margin-auto"></div>
    </div>
    <div class="classification-box">
      <template
        v-for="(item, index) in ['后端开发', '前端开发', '测试', '设计']"
        :key="item"
      >
        <div class="cla-item">
          <p class="title">{{ item }}</p>
          <template v-for="cate in categoryJson[index]" :key="cate">
            <a target="_blank" :href="`#/jobs?ka=${cate}`">
              <span>{{ cate }}</span>
            </a>
          </template>
        </div>
      </template>
    </div>
    <div class="advertisement">
      <img width="315" height="70" src="@/assets/1625548325.jpg" alt="" />
      <img width="315" height="70" src="@/assets/1625548324.jpg" alt="" />
      <img width="315" height="70" src="@/assets/1625548349.jpg" alt="" />
    </div>
    <div class="common-box">
      <PostCard :post="newJobsData" title="最新职位" />
      <div class="recom-company">
        <div class="title">公司推荐</div>
        <CompanyList :company-list="recommendCompany" />
      </div>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import PostCard from '@/components/post-card/index.vue'
import CompanyList from '@/components/company-list/index.vue'
import { getAllCompanyList } from '@/api/conpany'
import { CompanyColumn, JobsColumn } from '@/store/modules/types'
import { getNewJobs } from '@/api/job'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Home',
  components: {
    // SiderMenu,
    PostCard,
    CompanyList,
  },
  setup() {
    const inputValue = ref('')
    const state = reactive({
      cascader: [],
    })
    const categoryJson = [
      ['Java', 'Python', 'SpringBoot'],
      ['Html5', 'CSS', 'Javascript'],
      ['功能测试', '后端测试', '自动化测试'],
      ['PhotoShop', '美工', 'UI设计'],
    ]
    const router = useRouter()

    const handleChange = (value: unknown[]) => {
      console.log(value)
    }
    const search = () => {
      router.push(`/jobs?q=${inputValue.value}`)
    }
    const newJobsData = ref([] as JobsColumn[])
    const recommendCompany = ref([] as CompanyColumn[])
    const fetchData = async () => {
      try {
        const { data } = await getNewJobs()
        const { data: data1 } = await getAllCompanyList(1, 8)
        newJobsData.value = data.message.positionVOList
        recommendCompany.value = data1.message.companyInformationList
      } catch (err) {
        ElMessage({
          message: '接口错误',
          type: 'error',
        })
      }
    }
    onMounted(() => {
      fetchData()
    })
    return {
      inputValue,
      ...toRefs(state),
      handleChange,
      newJobsData,
      recommendCompany,
      categoryJson,
      search,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  top: -116px;
}
.search-container {
  width: 946px;
  padding-top: 20px;
  display: flex;
}

.search-hot {
  width: 946px;
  margin-top: 10px;
  margin-bottom: 20px;
  span {
    color: #9fa3b0;
    font-size: 14px;
    padding-right: 20px;
  }
  a {
    color: #3370ff;
    padding: 0 14px;
    font-size: 13px;
  }
}
.classification-box {
  display: flex;
  justify-content: center;
  height: 158px;
  padding: 30px 0 20px;
  background: #fff;

  .cla-item {
    /* flex: 1; */
    width: 174px;
    height: 158px;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    &:not(:last-of-type) {
      border-right: 1px solid #ddd;
    }
    .title {
      max-width: 120px;
      color: $primary-color;
      font-size: 16px;
      margin-bottom: 22px;
      text-align: center;
      cursor: pointer;
    }
    a {
      line-height: 20px;
      color: #666666;
      margin-bottom: 16px;
      padding-left: 31px;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
.advertisement {
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding: 10px 18px;
  background: $white;
  margin-bottom: 10px;
}
.home-box {
  display: flex;
  height: 340px;
  .home-carousel {
    flex: 1;
  }
}
.common-box {
  margin-top: 37px;
}
.recom-company {
  width: 103%;
  .title {
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
:deep(.el-cascader) {
  width: 109px;
}
:deep(.el-input-group__prepend) {
  padding: 0;
}
:deep(.el-input__inner) {
  padding-left: 25px;
}
:deep(.el-input-group__append) {
  color: #fff;
  background-color: #409eff;
}
</style>
