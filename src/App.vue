<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { LoginState, LoginStateProvideKey } from './hooks/loginState'

export default defineComponent({
  setup() {
    provide(LoginStateProvideKey, LoginState)
  },
})
</script>

<style lang="scss"></style>
