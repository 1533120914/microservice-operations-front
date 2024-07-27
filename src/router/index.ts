import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/layout/default.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },

  ]
})

export default router
