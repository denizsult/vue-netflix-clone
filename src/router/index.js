import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import mainPage from '../views/mainPage'
import login from '../views/login'
import register from '../views/register'


const routes = [{
    path: '/browse',
    name: 'browse',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'main',
    component: mainPage,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      requiresGuest: true
    }
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})







router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      next()
      return
    }
    next('/login')
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (localStorage.getItem('isLoggedIn') === 'false') {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router