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
        path: '/jobs/detail/:id',
        name: 'JobsDetail',
        component: () => import('@/views/jobs/components/detail.vue'),
      },
      {
        path: '/company',
        name: 'Company',
        component: () => import('@/views/company/index.vue'),
      },
      {
        path: '/company/detail/:id',
        name: 'CompanyDetail',
        component: () => import('@/views/company/components/comp-detail.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/register.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/resume/index.vue'),
  },
  {
    path: '/resume/edit',
    name: 'ResumeEditor',
    component: () => import('@/views/resume/editor.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/error/test.vue'),
  },
  {
    path: '/:path*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior: (to) => {
    // console.log(to, from, savedPosition)
    if (to.fullPath === '/resume') {
      return { top: 0 }
    }
  },
})

export default router
