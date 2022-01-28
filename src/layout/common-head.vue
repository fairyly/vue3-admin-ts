<script setup lang="ts">
import { useRouter } from "vue-router";
// 声明 props
const props = defineProps({
  menuList: [Array, Object]
})
// 声明 emits
const emit = defineEmits(['change', 'delete'])
const router = useRouter()
type routerType = {
  path: string;
  name: string;
  id: string;
};
const toUrl = (item: routerType) => {
  emit('change', item.path)
  router.push(item.path)
}
</script>

<template>
  <div class="common-head-main">
    <ul>
      <li v-for="(item, index) in menuList" :key="index" @click="toUrl(item)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.common-head-main {
  width: 100%;
  height: 48px;
  padding-left: 320px;
  background: #409eff;
  ul {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    li {
      &+li {
        margin-left: 20px;
      }
    }
  }
}
</style>
