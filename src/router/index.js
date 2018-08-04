import Vue from 'vue'
import Router from 'vue-router'
import Program from '@/page/Program'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Program',
      component: Program
    }
  ]
})
