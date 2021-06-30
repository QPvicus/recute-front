<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 11:49:02
 * @LastEditTime: 2021-06-21 15:23:36
 * @Description:
-->

<template>
  <div class="wrapper">
    <div class="company-content">
      <div class="filter-condition">
        <div class="filter-row">
          <span class="title">公司地点:</span>
          <p class="content">
            <template v-for="item in 10" :key="item">
              <span
                @click="addrClick(item)"
                :class="['content-item', { selected: selectedKey === item }]"
                >全国</span
              >
            </template>
          </p>
        </div>
        <div class="filter-row">
          <span class="title">公司类型:</span>
          <p class="content">
            <template v-for="item in 20" :key="item">
              <span
                :class="['content-item', { selected: selectedKey === item }]"
                >不限</span
              >
            </template>
          </p>
        </div>
        <div class="filter-row">
          <span class="title">公司规模:</span>
          <p class="content">
            <template v-for="item in 20" :key="item">
              <span
                :class="['content-item', { selected: selectedKey === item }]"
                >不限</span
              >
            </template>
          </p>
        </div>
      </div>
      <div class="company-list">
        <ul>
          <template v-for="item in 30" :key="item">
            <li>
              <div class="company-info">
                <div class="left-image">
                  <el-avatar
                    :size="55"
                    src="https://img.bosszhipin.com/beijin/mcs/bar/20191211/cff98890aeac18b0f4dee3577d92d543be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0"
                    shape="square"
                  ></el-avatar>
                </div>
                <div class="right-text">
                  <h3 class="ellipsis">阿里巴巴集团</h3>
                  <p>互联网</p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, provide, ref } from 'vue'
export const SELECT_KEYS = 'select_keys'
export default defineComponent({
  name: 'Company',
  setup() {
    const getSelectKeys: number = JSON.parse(
      localStorage.getItem(SELECT_KEYS) as string
    )
    const selectedKey = ref(getSelectKeys || 1)
    const clear = () => {
      console.log('1')
    }
    const addrClick = (index: number) => {
      selectedKey.value = index
      localStorage.setItem(SELECT_KEYS, JSON.stringify(index))
    }
    onBeforeUnmount(() => {
      localStorage.removeItem(SELECT_KEYS)
    })
    return {
      selectedKey,
      clear,
      addrClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.company-content {
  width: 103%;
  .filter-condition {
    padding: 30px 0;
  }
}
.filter-row {
  display: flex;
  margin-bottom: 14px;
  .title {
    width: 70px;
    font-size: 14px;
    font-weight: 700;
  }
  .content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    .content-item {
      margin-right: 8px;
      padding: 0 7px;
      margin-bottom: 5px;
      &.selected {
        color: $primary-color;
      }
      &:hover {
        color: $primary-color;
      }
    }
  }
}
.company-list {
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      height: 100px;
      width: 285px;
      margin-right: 16px;
      margin-bottom: 16px;
      box-sizing: border-box;
      padding-top: 20px;
      padding-left: 10px;
      background: $white;
      &:hover {
        box-shadow: 0 2px 16px 0 rgb(31 35 41 / 5%);
        color: $primary-color;
      }

      .company-info {
        display: flex;
        justify-content: space-between;
        .left-image {
          width: 55px;
          height: 55px;
          border: 1px solid #eee;
          border-radius: 8px;
        }
        .right-text {
          flex: 1;
          text-align: right;
          box-sizing: border-box;
          padding-right: 20px;
          h3 {
            font-size: 16px;
          }
          p {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
</style>
