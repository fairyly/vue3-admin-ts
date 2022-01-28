<script setup lang="ts">
import { ref, toRefs, reactive } from 'vue'
import CommonHead from './common-head.vue'
import CommonSide from './common-side.vue'

const menuList = ref([
  { id: "1", name: "首页", path: '/index' },
  { id: "2", name: "介绍", path: '/info' },
  { id: "3", name: "设置", path: '/set' }
]);
const changePath = (val: Object) => {
  console.log('emit:',val)
}
</script>

<template>
  <div class="layout-main">
    <common-head :menu-list="menuList" @change="changePath" />
    <div class="layout-main-body">
      <div class="layout-main-left">
        <common-side />
      </div>
      <div class="layout-main-right">
        <router-view>
          <template #default="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout-main {
  width: 100%;
  &-body {
    width: 100%;
    display: flex;
  }
  &-left {
    width: 300px;
    min-width: 300px;
  }
  &-right {
    width: calc(100% - 300px);
  }
}
</style>
