<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-12 18:03:40
 * @LastEditTime: 2021-06-12 18:06:23
 * @Description:
-->

<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const ruleForm = {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    }
    const rules = {
      name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
      ],
      region: [
        { required: true, message: '请选择活动区域', trigger: 'change' },
      ],
      date1: [
        {
          type: 'date',
          required: true,
          message: '请选择日期',
          trigger: 'change',
        },
      ],
      date2: [
        {
          type: 'date',
          required: true,
          message: '请选择时间',
          trigger: 'change',
        },
      ],
      type: [
        {
          type: 'array',
          required: true,
          message: '请至少选择一个活动性质',
          trigger: 'change',
        },
      ],
      resource: [
        { required: true, message: '请选择活动资源', trigger: 'change' },
      ],
      desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
    }
    return {
      ruleForm,
      rules,
    }
  },
})
</script>
