<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 13:33:02
 * @LastEditTime: 2021-07-12 16:02:18
 * @Description:
-->

<template>
  <el-row style="margin-bottom: 20px">
    <el-col>
      <el-button @click="publishPost" type="primary">发布职位</el-button>
    </el-col>
  </el-row>
  <el-table :data="tableData" style="width: 100%" max-height="500">
    <template #empty>
      <el-empty :image-size="200"></el-empty>
    </template>
    <el-table-column label="职位名称" width="200" fixed="left">
      <template #default="scope">
        <span>{{ scope.row.positionName }}</span>
      </template>
    </el-table-column>
    <el-table-column label="职位类别" width="180">
      <template #default="scope">
        <template v-for="item in scope.row.classify.split(',')" :key="item">
          <el-tag style="margin-right: 10px" size="medium">{{ item }}</el-tag>
        </template>
      </template>
    </el-table-column>
    <el-table-column label="薪资" width="160">
      <template #default="scope">
        <span style="color: red">{{ scope.row.remuneration }}</span>
      </template>
    </el-table-column>
    <el-table-column label="学历要求" width="160">
      <template #default="scope">
        <span>{{ scope.row.education }}</span>
      </template>
    </el-table-column>
    <el-table-column label="人数" width="160">
      <template #default="scope">
        <span>{{ scope.row.people }}</span>
      </template>
    </el-table-column>
    <el-table-column label="职位标签" width="180">
      <template #default="scope">
        <template v-for="item in scope.row.safeguard.split(',')" :key="item">
          <el-tag style="margin-right: 10px" size="medium">{{ item }}</el-tag>
        </template>
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="200">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.row.id)"
          >编辑</el-button
        >

        <el-popconfirm
          placement="top"
          confirmButtonText="确认"
          cancelButtonText="取消"
          icon="el-icon-info"
          iconColor="red"
          title="确定删除吗?"
          @confirm="handleDelete(scope.row.id)"
        >
          <template #default> aa </template>
          <template #reference>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { deleteJob, getAllJobsByCompanyId } from '@/api/job'
import { ElMessage } from 'element-plus'
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CompPost',
  setup() {
    const router = useRouter()
    const tableData = ref([])
    const visible = ref(false)
    const publishPost = () => {
      router.push('/comp/publish')
    }
    const handleEdit = (index: number) => {
      // console.log(index)
      router
        .replace({ name: 'CompPublish', query: { job_id: index } })
        .then(() => {
          location.reload()
        })
    }
    const handleDelete = async (id: string) => {
      try {
        const { data } = await deleteJob(id)
        ElMessage.success(data.message)
        location.reload()
      } catch {
        ElMessage.error('接口错误')
      }
    }
    const fetchData = async () => {
      const id = localStorage.getItem('comp_id')
      try {
        const { data } = await getAllJobsByCompanyId(id, 1, 300)
        console.log(data)
        tableData.value = data.message.companyPositionList
      } catch {
        ElMessage.error('接口错误')
      }
    }
    onMounted(() => {
      fetchData()
    })
    return {
      tableData,
      handleEdit,
      handleDelete,
      publishPost,
      visible,
    }
  },
})
</script>

<style lang="scss" scoped></style>
