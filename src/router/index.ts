import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router'

/** 常驻路由 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
  },
]

const router = createRouter({
  history:
import.meta.env.VITE_ROUTER_HISTORY === 'hash'
  ? createWebHashHistory(import.meta.env.BASE_URL)
  : createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
