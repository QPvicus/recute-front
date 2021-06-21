<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 11:44:29
 * @LastEditTime: 2021-06-21 15:22:21
 * @Description:
-->

<template>
  <div class="search-box wrapper">
    <el-input class="search" placeholder="请输入职位" v-model="searchValue">
      <template #append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
    <div class="filter-search-box">
      <el-dropdown @command="command">
        <span class="el-dropdown-link">
          学历要求<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item in edu_list" :key="item.command">
              <el-dropdown-item :command="item.command">{{
                item.value
              }}</el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown @command="command1">
        <span class="el-dropdown-link">
          薪资要求<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item in edu_list" :key="item.command">
              <el-dropdown-item :command="item.command">{{
                item.value
              }}</el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown @command="command1">
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
    <div class="job-box">
      <ul class="job-list">
        <template v-for="item in 12" :key="item">
          <li @click="router.push(`/jobs/detail/${item}`)">
            <div class="job-primary">
              <div class="info-primary">
                <div class="job-title ellipsis">
                  <span class="job-name">阿里MMC 21届实习...</span>
                  <span class="job-addr">杭州·滨江区·长河</span>
                </div>
                <div class="job-limit">
                  <span class="salary">14-28K</span>
                  <span>学历不限</span>
                </div>
              </div>
              <div class="info-company">
                <div class="company-text ellipsis">
                  <h3>阿里巴巴集团</h3>
                  <p>互联网 <span class="line"></span> 10000人以上</p>
                </div>
                <div class="company-logo">
                  <img
                    src="https://img.bosszhipin.com/beijin/mcs/bar/20191211/cff98890aeac18b0f4dee3577d92d543be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_100,limit_0"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="job-footer">
              <div class="tags ellipsis">
                <el-tag type="info" size="small">前端开发</el-tag>
                <el-tag type="info" size="small">HTML</el-tag>
                <el-tag type="info" size="small">CSS</el-tag>
                <el-tag type="info" size="small">Web端</el-tag>
              </div>
              <div class="company-desc ellipsis">
                带薪年假，补充医疗保险，五险一金，餐补，加班补助，免费班车，节日福利，年终奖，员工旅游，定期体检，交通补助，股票期权
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>

    <div class="pagination">
      <el-pagination
        @current-change="currentChange"
        background
        layout="prev, pager, next"
        :total="200"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Jobs',
  setup() {
    const router = useRouter()
    const searchValue = ref('')
    const state = reactive({
      education: '',
      salary: '',
      scale: '',
    })
    const edu_list = [
      { value: '不限', command: null },
      { value: '本科', command: '本科' },
      { value: '专科', command: '专科' },
      { value: '其他', command: '其他' },
    ]
    const salary_list = [
      { value: '不限', command: null },
      { value: '2K以下', command: '2K以下' },
      { value: '2K~3K', command: '2K~3K' },
      { value: '3K~4K', command: '3K~4K' },
    ]
    const comany_scale_list = [
      { value: '不限', command: null },
      { value: '0-20人', command: '0-20人' },
      { value: '20~99人', command: '20~99人' },
      { value: '100~499人', command: '100~499人' },
      { value: '500~999人', command: '500~999人' },
      { value: '1000~9999人', command: '1000~9999人' },
      { value: '10000人以上', command: '10000人以上' },
    ]
    const currentChange = (index: string) => {
      console.log(index)
    }
    const command = (o: any) => {
      console.log(o)
    }
    const command1 = (o: any) => {
      console.log(o)
    }
    return {
      searchValue,
      ...toRefs(state),
      command,
      command1,
      edu_list,
      salary_list,
      comany_scale_list,
      currentChange,
      router,
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
