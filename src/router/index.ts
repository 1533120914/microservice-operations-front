import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/layout/default.vue';
import Login from '../views/loginView.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: []
    },
    {
      path: '/home',
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
  {
    path: '/', redirect:'/login'
  }
  ]
})

export default router
