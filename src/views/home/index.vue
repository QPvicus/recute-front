<template>
  <div class="home">
    <div class="search-container margin-auto">
      <el-cascader
        v-model="cascader"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
        placeholder="职位类型"
      ></el-cascader>
      <el-input placeholder="搜索职位或公司" v-model="input3">
        <template #append>
          <el-button type="primary">搜索</el-button>
        </template>
      </el-input>
    </div>
    <div class="search-hot margin-auto">
      <span>热门职位</span>
      <a>web前端</a>
      <a>web前端</a>
      <a>web前端</a>
      <a>web前端</a>
    </div>
    <div class="home-box">
      <SiderMenu />
      <el-carousel class="home-carousel">
        <el-carousel-item v-for="item in 4" :key="item">
          <img style="width: 100%; height: 100%" src="@/assets/1.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="common-box">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </div>
  <div class="footer">xxx</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import SiderMenu from '@/components/sider/SiderMenu.vue'
import PostCard from '@/components/post-card/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    SiderMenu,
    PostCard,
  },
  setup() {
    const input3 = ref('')
    const state = reactive({
      cascader: [],
      options: [
        {
          cascader: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    })

    const handleChange = (value: unknown[]) => {
      console.log(value)
    }
    return {
      input3,
      ...toRefs(state),
      handleChange,
    }
  },
})
</script>

<style lang="scss" scoped>
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
