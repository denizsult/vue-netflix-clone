import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import mainPage from '../views/mainPage'
import login from '../views/login'
const routes = [
  {
    path: '/browse',
    name: 'browse',
    component: Home
  },
  {
    path: '/',
    name: 'main',
    component: mainPage
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
