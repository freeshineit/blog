import Vue from 'vue'
import Router from 'vue-router'
import Directive from '@/components/directive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/directive',
      name: 'directive',
      component: Directive
    }
  ]
})
