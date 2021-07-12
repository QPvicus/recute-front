<template>
  <div style="margin: 100px">
    <el-popover placement="top" :width="160" v-model:visible="visible">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false"
          >取消</el-button
        >
        <el-button type="primary" size="mini" @click="visible = false"
          >确定</el-button
        >
      </div>
      <template #reference>
        <el-button @click="visible = true">删除</el-button>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      visible: ref(false),
    }
  },
})
</script>

<style></style>
