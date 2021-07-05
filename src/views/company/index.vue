<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 11:49:02
 * @LastEditTime: 2021-07-05 10:12:06
 * @Description:
-->

<template>
  <div class="wrapper">
    <div class="company-content">
      <el-input class="search" placeholder="请输入公司" v-model="searchValue">
        <template #append>
          <el-button icon="el-icon-search" @click="saarchPost"></el-button>
        </template>
      </el-input>
      <CompanyList :companyList="companyList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import CompanyList from '@/components/company-list/index.vue'
import { getAllCompanyBySearch, getAllCompanyList } from '@/api/conpany'
import { CompanyColumn } from '@/store/modules/types'
export const SELECT_KEYS = 'select_keys'
export default defineComponent({
  name: 'Company',
  components: {
    CompanyList,
  },
  setup() {
    const searchValue = ref('')
    const companyList = ref<CompanyColumn[]>([])
    const page = reactive({
      nowPage: 1,
      sumPage: 30,
      total: 0,
    })
    const saarchPost = async () => {
      const { data } = await getAllCompanyBySearch(
        searchValue.value,
        page.nowPage,
        page.sumPage
      )
      console.log(data.message)
      companyList.value = data.message.companyInformationList
    }
    onMounted(async () => {
      const { data } = await getAllCompanyList(page.nowPage, page.sumPage)
      companyList.value = data.message.companyInformationList
      console.log(companyList.value)
    })

    return {
      searchValue,
      companyList,
      saarchPost,
    }
  },
})
</script>

<style lang="scss" scoped>
.company-content {
  width: 103%;
  .filter-condition {
    padding: 30px 0;
  }
}
.search {
  width: 600px;
  height: 44px;
  margin: 20px 0;
}
.search :deep(.el-input__inner) {
  height: 100% !important;
}
:deep(.el-icon-search) {
  font-size: 20px;
  color: $white;
}

:deep(.el-input-group__append) {
  background-color: $primary-color;
}

.filter-row {
  display: flex;
  margin-bottom: 14px;
  .title {
    width: 70px;
    font-size: 14px;
    font-weight: 700;
  }
  .content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    .content-item {
      margin-right: 8px;
      padding: 0 7px;
      margin-bottom: 5px;
      &.selected {
        color: $primary-color;
      }
      &:hover {
        color: $primary-color;
      }
    }
  }
}
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
</style>
