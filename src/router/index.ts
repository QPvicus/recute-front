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
        path: '/detail/jobs/:id',
        name: 'JobsDetail',
        component: () => import('@/views/jobs/components/detail.vue'),
        props: (route) => ({
          id: route.params.id,
          company_id: route.query.company_id,
        }),
      },
      {
        path: '/company',
        name: 'Company',
        component: () => import('@/views/company/index.vue'),
      },
      {
        path: '/detail/company/:id',
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
    component: () => import('@/views/login/regis.vue'),
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
    path: '/redirect',
    name: 'RouterTransition',
    component: () => import('@/views/redirect/index.vue'),
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
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return savePosition
    }
    // console.log(to, from, savedPosition)
    if (to.fullPath === '/resume' || to.name === 'JobsDetail') {
      return { top: 0 }
    }
  },
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/index') {
//     //
//   }
//   next()
// })

export default router
