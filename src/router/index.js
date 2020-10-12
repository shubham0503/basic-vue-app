import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import UserList from '../pages/UserList'
import Register from '../pages/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
