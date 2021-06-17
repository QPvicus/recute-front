<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 20:52:18
 * @LastEditTime: 2021-06-16 14:16:36
 * @Description:
-->

<template>
  <div class="home-sider">
    <div class="job-menu">
      <template v-for="(item, index) in state" :key="item">
        <dl @mouseenter="handleEnter(index)" @mouseleave="handleLeave(index)">
          <dd>
            <b>技术</b>
            <a href="#">web前端</a>
            <a href="#">Flash开发</a>
            <a href="#">JavaScript</a>
            <a href="#">HTML5</a>
            <i class="el-icon-arrow-right"></i>
          </dd>
          <SiderSubMenuVue
            :style="SiderSubMenuStyle"
            v-show="activeIndex === index"
            :data="{ a: item.key + item.name }"
          />
        </dl>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  reactive,
  ref,
  unref,
} from 'vue'
import SiderSubMenuVue from './SiderSubMenu.vue'
export default defineComponent({
  name: 'SiderMenu',
  components: {
    SiderSubMenuVue,
  },
  setup() {
    const state = reactive([
      {
        key: 1,
        name: 'aa',
      },
      {
        key: 2,
        name: 'bb',
      },
      {
        key: 3,
        name: 'cc',
      },
      {
        key: 4,
        name: 'cc',
      },
      {
        key: 5,
        name: 'cc',
      },
    ])
    const isShow = ref(false)
    const activeIndex = ref(-1)
    const SiderSubMenuStyle = computed((): CSSProperties => {
      return {
        marginTop: `${-unref(activeIndex) * 40 - 8}px`,
      }
    })
    const handleEnter = (index: number) => {
      isShow.value = false
      const dlRef = document.querySelectorAll('.job-menu dl')
      dlRef.forEach((item) => item.classList.remove('cur'))
      dlRef[index].classList.add('cur')
      // console.log(dlRef[index].children[1])
      activeIndex.value = index
    }
    const handleLeave = (index: number) => {
      const dlRef = document.querySelectorAll('.job-menu dl')[index]
      dlRef.classList.remove('cur')
      activeIndex.value = -1
      // isShow.value = false
    }
    return {
      handleEnter,
      handleLeave,
      state,
      isShow,
      activeIndex,
      SiderSubMenuStyle,
    }
  },
})
</script>

<style lang="scss">
.home-sider {
  width: 384px;
  height: 340px;
  position: relative;
}
.job-menu {
  dl {
    padding: 0;
    height: 42px;
    cursor: pointer;
    &.cur {
      background: #409eff;
      border-color: #d1d4db;
      border-right-color: #fff;
      position: relative;
      width: 100%;
      z-index: 10;

      b,
      dd a {
        color: #fff;
      }
    }
  }
  dd {
    padding: 8px 20px 9px;
    height: 26px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .el-icon-arrow-right {
      margin-left: 10px;
    }
    b {
      float: left;
      font-weight: 600;
      color: #414a60;
      font-size: 15px;
    }
    a {
      color: #61687c;
      font-size: 13px;
      display: inline-block;
      line-height: 28px;
      margin-left: 16px;
    }
  }
}
</style>
