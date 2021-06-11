<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-11 16:27:06
 * @LastEditTime: 2021-06-11 18:13:24
 * @Description:
-->

<template>
  <div class="menu-sub">
    {{ data.a }}
    <p class="menu-article">技术</p>
    <ul>
      <li class="menu-sub-item">
        <h4>后端开发</h4>
        <div class="text">
          <template v-for="(item, index) in 10" :key="index">
            <a ka="search_100123" href="/c101210100-p100123/">全栈工程师</a>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiderSubMenu',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    isShow: Boolean,
  },
})
</script>

<style lang="scss">
.menu-sub {
  display: block;
  position: absolute;
  left: 100%;
  background: #fff;
  padding: 20px 30px 20px 10px;
  width: 648px;
  top: 0;
  z-index: 1;
  box-shadow: 0 1px 6px rgb(6 0 1 / 10%);

  .menu-article {
    padding-left: 20px;
    height: 30px;
    font-size: 15px;
    font-weight: 700;
  }

  .menu-sub-item {
    h4 {
      float: left;
      width: 104px;
      color: #8d92a1;
      font-size: 13px;
      padding-top: 2px;
      font-weight: 400;
      padding-left: 20px;
    }
    .text {
      margin-left: 130px;
      border-bottom: 1px solid #f5f6f9;
      padding: 0 0 10px 1px;
      a {
        margin-left: 0;
        margin-right: 25px;
        font-size: 13px;
        display: inline-block;
        line-height: 28px;
        &:hover {
          color: #409fef;
        }
      }
    }
  }
}
</style>
