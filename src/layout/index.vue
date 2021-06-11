<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 12:47:49
 * @LastEditTime: 2021-06-11 19:46:12
 * @Description:
-->
<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
})
</script>

<style lang="scss">
#app {
  min-height: 100%;
  overflow: visible;
  overflow-x: hidden;
}
</style>
