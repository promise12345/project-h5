import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

// router.beforeEach((to, from, next) => {
//   next()
// })

export default new Router({
  routes
})
