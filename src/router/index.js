import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Search from '../views/Search'
import Favourites from '../views/Favourites'
import Upload from '../views/Upload'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },


]

const router = new VueRouter({
  routes
})

export default router
