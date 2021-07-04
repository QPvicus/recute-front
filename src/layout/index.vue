<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-10 12:47:49
 * @LastEditTime: 2021-07-03 18:50:57
 * @Description:
-->
<template>
  <div id="app-container">
    <Header />
    <!-- <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component v-if="route.meta.keepAlive" :is="Component" />
      </keep-alive>
      <component v-if="!route.meta.keepAlive" :is="Component" />
    </router-view> -->
    <router-view></router-view>
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
