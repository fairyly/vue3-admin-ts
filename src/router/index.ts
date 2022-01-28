import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '',
    redirect: "/index",
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      title: 'layout',
    },
    children: [
      {
        path: '/index',
        name: '',
        component: () => import(/* webpackChunkName: "layout" */ '@/views/index/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/info',
        name: '',
        component: () => import(/* webpackChunkName: "layout" */ '@/views/info/index.vue'),
        meta: {
          title: '介绍',
        },
      },
      {
        path: '/set',
        name: '',
        component: () => import(/* webpackChunkName: "layout" */ '@/views/set/index.vue'),
        meta: {
          title: '设置',
        },
      }
    ]
  },
  { path: '/login', component: () => import('@/views/login/index.vue') },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router