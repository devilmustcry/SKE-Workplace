import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Workplace from '@/views/Workplace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Workplace',
      component: Workplace
    }
  ]
})
