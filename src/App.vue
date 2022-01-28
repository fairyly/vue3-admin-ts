<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { useUserStore } from './store/index'

const store = useUserStore()
console.log(store)
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
