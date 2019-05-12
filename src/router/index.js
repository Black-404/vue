import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import About from '@/pages/about'
import Detail from '@/pages/detail'
import Search from '@/pages/search'
import Login from '@/pages/login'
import Reg from '@/pages/reg/reg'
// import Footers from '@/components/Footers'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
