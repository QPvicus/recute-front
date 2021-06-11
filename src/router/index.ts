import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/index',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },

      {
        path: '/jobs',
        name: 'Jobs',
        component: () => import('@/views/jobs/index.vue'),
      },
      {
        path: '/company',
        name: 'Company',
        component: () => import('@/views/company/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

export default router
