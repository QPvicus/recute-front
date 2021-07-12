<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-09 13:33:38
 * @LastEditTime: 2021-07-12 14:09:08
 * @Description:
-->

<template>
  <div class="wrapper">
    <div class="publish-container">
      <el-form
        style="margin-left: 20px; margin-top: 30px"
        ref="form"
        :model="job"
        label-width="80px"
      >
        <el-form-item label="职位名称">
          <el-row>
            <el-col :span="6">
              <el-input v-model="job.positionName"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="职位类型">
          <template v-if="job.classify">
            <el-tag
              :key="tag"
              v-for="tag in job.classify.split(',')"
              style="margin-right: 15px"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
          </template>

          <el-input
            style="width: 100px"
            class="input-new-tag"
            v-if="inputVisible"
            v-model.trim="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
            >+ New Tag</el-button
          >
        </el-form-item>
        <el-form-item label="职位薪资">
          <el-row>
            <el-col :span="6">
              <el-input v-model="job.remuneration"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="招聘人数">
          <el-row>
            <el-col :span="6">
              <el-input v-model="job.people"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="学历要求">
          <el-select v-model="job.education" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位福利">
          <template v-if="job.safeguard">
            <el-tag
              :key="tag"
              v-for="tag in job.safeguard.split(',')"
              style="margin-right: 15px"
              closable
              :disable-transitions="false"
              @close="handleClose1(tag)"
            >
              {{ tag }}
            </el-tag>
          </template>

          <el-input
            style="width: 100px"
            class="input-new-tag"
            v-if="inputVisible1"
            v-model.trim="inputValue1"
            ref="saveTagInput1"
            size="small"
            @keyup.enter="handleInputConfirm1"
            @blur="handleInputConfirm1"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput1"
            >+ New Tag</el-button
          >
        </el-form-item>
        <el-form-item label="职位信息">
          <el-input
            rows="7"
            :autosize="{ minRows: 7 }"
            type="textarea"
            v-model="job.information"
          ></el-input>
        </el-form-item>
        <el-form-item label="职位要求">
          <el-input
            rows="7"
            :autosize="{ minRows: 7 }"
            type="textarea"
            v-model="job.demand"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-group">
        <el-button type="primary" @click="onSavePosition">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getJobDetailById, JobColumn, saveJob, updateJob } from '@/api/job'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  defineComponent,
  nextTick,
  onMounted,
  reactive,
  ref,
  toRaw,
  toRefs,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'CompPublish',
  setup() {
    const state = reactive({
      job: {
        company: '',
        classify: '',
        demand: '',
        education: '',
        information: '',
        people: '',
        positionName: '',
        remuneration: '',
        safeguard: '',
      },
    })
    const options = [
      { value: '不限', label: '不限' },
      { value: '大专', label: '大专' },
    ]
    const inputVisible = ref(false)
    const inputVisible1 = ref(false)
    const inputValue = ref('')
    const inputValue1 = ref('')
    const saveTagInput = ref<HTMLElement>()
    const saveTagInput1 = ref<HTMLElement>()
    const route = useRoute()
    const job_id = route.query.job_id as string
    const router = useRouter()

    // 若 query 有id  则获取职位信息
    const fetchJobInfo = async () => {
      try {
        const { data } = await getJobDetailById(job_id)
        console.log(data)
        const companyInfo = data.message.companyPositionList[0] as JobColumn
        if (!companyInfo) {
          return
        } else {
          state.job.company = companyInfo.company
          state.job.classify = companyInfo.classify
          state.job.demand = companyInfo.demand
          state.job.education = companyInfo.education
          state.job.information = companyInfo.information
          state.job.people = companyInfo.people
          state.job.positionName = companyInfo.positionName
          state.job.remuneration = companyInfo.remuneration
          state.job.safeguard = companyInfo.safeguard
        }
      } catch {
        ElMessage.error('接口错误')
      }
    }

    //  tags 类型
    const handleClose = (tag: string) => {
      const arr = state.job.classify.split(',')
      const newArr = arr.filter((s) => s !== tag)
      state.job.classify = newArr.join(',')
    }
    const showInput = () => {
      inputVisible.value = true
      nextTick(() => {
        ;(saveTagInput.value as any).$refs.input.focus()
      })
    }

    const handleInputConfirm = () => {
      if (inputValue.value) {
        if (!state.job.classify) {
          state.job.classify = inputValue.value
        } else {
          state.job.classify += `,${inputValue.value}`
        }
      }
      inputVisible.value = false
      inputValue.value = ''
    }

    // tags 职位福利
    const handleClose1 = (tag: string) => {
      const arr = state.job.safeguard.split(',')
      const newArr = arr.filter((s) => s !== tag)
      state.job.safeguard = newArr.join(',')
    }

    const handleInputConfirm1 = () => {
      if (inputValue1.value) {
        if (!state.job.safeguard) {
          state.job.safeguard = inputValue1.value
        } else {
          state.job.safeguard += `,${inputValue1.value}`
        }
      }
      inputVisible1.value = false
      inputValue1.value = ''
    }

    const showInput1 = () => {
      inputVisible1.value = true
      nextTick(() => {
        ;(saveTagInput1.value as any).$refs.input.focus()
      })
    }

    //  cancel
    const onCancel = () => {
      // router.replace({ name: 'CompProfile' }).then(() => {
      //   isFormDisabled.value = true
      // })
      location.reload()
      //  做善后工作 清楚编辑过的地方
    }

    const onSavePosition = () => {
      ElMessageBox.confirm(
        `此操作将会${job_id ? '更新' : '保存'},是否继续`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(async () => {
          const jobList = toRaw(state.job) as JobColumn
          try {
            let result: any
            if (job_id) {
              jobList.id = job_id
              const { data } = await updateJob(jobList)
              console.log(data)
              result = data.message
            } else {
              const { data } = await saveJob(jobList)
              result = data.message
            }
            ElMessage.success(result)
            setTimeout(() => {
              router.push({ name: 'CompProfile' })
            }, 500)
          } catch {
            ElMessage({
              type: 'error',
              message: '接口错误',
            })
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消操作',
          })
        })
    }
    onMounted(() => {
      if (job_id) {
        fetchJobInfo()
      }
    })
    return {
      ...toRefs(state),
      onSavePosition,
      options,
      handleClose,
      handleClose1,
      showInput,
      showInput1,
      handleInputConfirm,
      handleInputConfirm1,
      inputVisible,
      inputVisible1,
      inputValue,
      inputValue1,
      saveTagInput,
      saveTagInput1,
      onCancel,
    }
  },
})
</script>

<style lang="scss" scoped>
.publish-container {
  margin-top: 20px;
  margin-left: 40px;
}
.avatar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.avatar-img {
  width: 100px;
  height: 100px;
}
.avatar-uploader {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px dotted #ccc;
}
.image-slot {
  font-size: 30px;
}
.btn-group {
  margin-top: 30px;
  margin-left: 30px;
}
:deep(.el-image) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
