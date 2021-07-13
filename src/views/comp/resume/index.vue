<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 13:34:34
 * @LastEditTime: 2021-07-13 15:06:54
 * @Description:
-->

<template>
  <div class="resume-card">
    <template v-if="resumeList.length > 0">
      <template v-for="item in resumeList" :key="item.id">
        <el-row>
          <el-col :span="18">
            <el-card shadow="hover">
              <div class="resumeInfo">
                <p>收到 {{ item.name }} 的求职信息</p>
                <el-button @click="getResumeById(item.studentId)"
                  >查看</el-button
                >
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-dialog
          center
          :title="`${item.name}的简历`"
          v-model="dialogTableVisible"
        >
          <!-- <table
            border="1"
            cellspacing="0"
            style="border-color: #ededed"
            class="mytable"
          >
            <tr>
              <td>姓名：</td>
              <td>{{ item.name }}</td>
            </tr>
            <tr>
              <td>年龄：</td>
              <td>{{ item.age }}</td>
            </tr>
            <tr>
              <td>性别：</td>
              <td>{{ item.gender }}</td>
            </tr>
            <tr>
              <td>电话：</td>
              <td>{{ item.telephone }}</td>
            </tr>
            <tr>
              <td>邮箱：</td>
              <td>{{ item.email }}</td>
            </tr>
            <tr>
              <td>学历：</td>
              <td>{{ item.educational }}</td>
            </tr>
            <tr>
              <td>学校：</td>
              <td>{{ item.school }}</td>
            </tr>
            <tr>
              <td>专业：</td>
              <td>{{ item.major }}</td>
            </tr>
            <tr>
            <td>技术栈：</td>
            <td>
          <tr v-for="(item, key) in getResumeList.skills" :key="key">
            <td class="progress2">{{item.name}}</td>
            <td class="progress2">熟悉程度：
              <el-progress :text-inside="true" :stroke-width="15" :percentage="item.level*25"></el-progress>
            </td>
          </tr>
          </td>
          </tr>
          <tr>
            <td>实习（工作）经历：</td>
            <td>{{getResumeList.experience}}</td>
          </tr>
          <tr>
            <td>自我介绍：</td>
            <td>{{getResumeList.introduce}}</td>
          </tr>
          <tr>
            <td>获奖经历：</td>
            <td>{{getResumeList.awards}}</td>
          </tr>
          </table> -->
          <ResumeComp :profile-resume="state.resumeInfo" />
        </el-dialog>
      </template>
    </template>
    <template v-else>
      <el-empty description="暂无投递简历情况"></el-empty>
    </template>
  </div>
</template>

<script lang="ts">
import { getResumeByCompany } from '@/api/conpany'
import { getProfileResumeById } from '@/api/resume'
import ResumeComp from '@/components/resume-comp/index.vue'
import { ElMessage } from 'element-plus'
import { defineComponent, onMounted, ref, shallowReactive } from 'vue'

export default defineComponent({
  name: 'CompResume',
  components: {
    ResumeComp,
  },
  setup() {
    const resumeList = ref([])
    const dialogTableVisible = ref(false)
    const state = shallowReactive({
      resumeInfo: {} as any,
    })
    const fetchData = async () => {
      try {
        const compId = localStorage.getItem('comp_id')
        const { data } = await getResumeByCompany(compId)
        console.log(data, 'fetchData')
        resumeList.value = data.message.getResumeList
      } catch {
        ElMessage.error('接口错误')
      }
    }
    const getResumeById = async (id: string) => {
      console.log(id)
      try {
        const { data } = await getProfileResumeById(id)
        console.log(data, 'getResumeId')
        state.resumeInfo = data.message.studentResumeList[0]
        dialogTableVisible.value = true
      } catch {
        ElMessage.error('接口错误')
      }
    }
    onMounted(() => {
      fetchData()
    })
    return {
      resumeList,
      getResumeById,
      dialogTableVisible,
      state,
    }
  },
})
</script>

<style lang="scss" scoped>
.resume-card {
  margin: 20px 0 0px 30px;
}
.resumeInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.mytable {
  width: 100%;
  height: 700px;
}
</style>
