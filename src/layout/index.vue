<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 12:47:49
 * @LastEditTime: 2021-06-17 10:38:46
 * @Description:
-->
<template>
  <div id="app-container">
    <Header />
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header/index.vue'
import Footer from './footer/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
  },
})
</script>

<style lang="scss">
#app-container {
  min-height: 100%;
}
</style>
