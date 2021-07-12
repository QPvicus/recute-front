<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-11 20:51:04
 * @LastEditTime: 2021-07-12 08:47:48
 * @Description:
-->

<template>
  <el-form
    style="margin-left: 20px; margin-top: 30px"
    ref="form"
    :model="compState"
    label-width="80px"
    :disabled="isFormDisabled"
  >
    <div class="avatar">
      <label class="el-form-item__label">公司LOGO</label>
      <el-upload
        v-if="!isFormDisabled"
        class="avatar-uploader"
        action="http://47.98.44.98:5253/Recruit/photo/upLoadPhoto"
        name="fileUpload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="compState.icon" :src="compState.icon" class="avatar-img" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-image
        :src="compState.icon"
        style="width: 100px; height: 100px"
        fit="fill"
        v-else
      >
        <template #error>
          <div class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </template>
      </el-image>
    </div>
    <el-form-item label="公司名称">
      <el-row>
        <el-col :span="6">
          <el-input v-model="compState.company"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="公司类型">
      <template v-if="compState.companytype">
        <el-tag
          :key="tag"
          v-for="tag in compState.companytype.split(',')"
          style="margin-right: 15px"
          :closable="!isFormDisabled"
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
      </template>
      <template v-else>
        <el-tag style="margin-right: 15px">无类别</el-tag>
      </template>
      <template v-if="!isFormDisabled">
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
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New Tag</el-button
        >
      </template>
    </el-form-item>
    <el-form-item label="公司电话">
      <el-row>
        <el-col :span="6">
          <el-input v-model="compState.telephone"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="公司邮箱">
      <el-row>
        <el-col :span="6">
          <el-input v-model="compState.email"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="公司规模">
      <el-select v-model="compState.scale" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="公司简介">
      <el-input
        rows="7"
        :autosize="{ minRows: 7 }"
        type="textarea"
        v-model="compState.synopsis"
      ></el-input>
    </el-form-item>
  </el-form>
  <div class="btn-group">
    <el-button type="primary" @click="onEdit" style="margin-right: 30px">{{
      isFormDisabled ? '编辑' : '保存'
    }}</el-button>
    <el-button v-if="!isFormDisabled" type="info" @click="onCancel"
      >取消</el-button
    >
  </div>
</template>

<script lang="ts">
import { getCompanyInfoById, saveCompanyInfo } from '@/api/conpany'
import { CompanyColumn } from '@/store/modules/types'
import { ElMessage } from 'element-plus'
import { defineComponent, nextTick, onMounted, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  naem: 'CompInfo',
  setup() {
    const compState = reactive({
      company: '',
      companytype: '',
      telephone: '',
      email: '',
      icon: '',
      scale: '',
      synopsis: '',
    })
    const options = [
      { value: '不限', label: '' },
      { value: '0-49人', label: '0-49人' },
      { value: '50-99人', label: '50-99人' },
      { value: '100-499人', label: '100-499人' },
      { value: '500以上人', label: '500以上人' },
    ]
    const dynamicTags = ref(['标签一', '标签二', '标签三'])
    const inputVisible = ref(false)
    const inputValue = ref('')
    const saveTagInput = ref<HTMLElement>()
    const isFormDisabled = ref(true)
    const router = useRouter()

    // 获取公司信息
    const fetchCompanyInfo = async () => {
      const comp_id = localStorage.getItem('comp_id')
      try {
        const { data } = await getCompanyInfoById(comp_id)
        console.log(data)
        const companyInfo = data.message
          .companyInformationList[0] as CompanyColumn
        if (!companyInfo) {
          return
        } else {
          compState.company = companyInfo.company
          compState.companytype = companyInfo.companytype
          compState.icon = companyInfo.icon
          compState.email = companyInfo.email
          compState.scale = companyInfo.scale
          compState.synopsis = companyInfo.synopsis
          compState.telephone = companyInfo.telephone
        }
      } catch {
        ElMessage.error('接口错误')
      }
    }

    // 上传
    const handleAvatarSuccess = (res: any, file: any) => {
      console.log('res success', res, file)
      compState.icon = res.message
    }
    const beforeAvatarUpload = (file: File) => {
      const isJPEG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      console.log(isJPEG, isPNG)
      if (!isJPEG && !isPNG) {
        ElMessage.error('上传的图片只能是JPG/PNG格式')
      }
      return isJPEG || isPNG
    }
    //  tags
    const handleClose = (tag: string) => {
      const arr = compState.companytype.split(',')
      const newArr = arr.filter((s) => s !== tag)
      compState.companytype = newArr.join(',')
    }
    const showInput = () => {
      inputVisible.value = true
      nextTick(() => {
        ;(saveTagInput.value as any).$refs.input.focus()
      })
    }

    const handleInputConfirm = () => {
      if (inputValue.value) {
        if (!compState.companytype) {
          compState.companytype = inputValue.value
        } else {
          compState.companytype += `,${inputValue.value}`
        }
      }
      inputVisible.value = false
      inputValue.value = ''
    }

    //  cancel
    const onCancel = () => {
      // router.replace({ name: 'CompProfile' }).then(() => {
      //   isFormDisabled.value = true
      // })
      location.reload()
      //  做善后工作 清楚编辑过的地方
    }

    const onEdit = () => {
      if (isFormDisabled.value) {
        console.log('edit')
        isFormDisabled.value = !isFormDisabled.value
      } else {
        console.log('save')
        saveCompanyInfo(toRaw(compState) as CompanyColumn)
          .then((res) => {
            console.log(res)
            ElMessage.success(res.data.message)
            router.replace({ name: 'CompProfile' })
          })
          .catch(() => {
            ElMessage.error('接口错误')
          })
      }
    }
    onMounted(() => {
      fetchCompanyInfo()
    })
    return {
      compState,
      onEdit,
      options,
      handleAvatarSuccess,
      beforeAvatarUpload,
      dynamicTags,
      handleClose,
      showInput,
      handleInputConfirm,
      inputVisible,
      inputValue,
      saveTagInput,
      isFormDisabled,
      onCancel,
    }
  },
})
</script>

<style lang="scss" scoped>
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
