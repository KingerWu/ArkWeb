import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log("路由守卫", "beforeEnter, from:" + from.name + ", to:" + to.name);
      next();
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log("全局守卫", "beforeEach, from:" + from.name + ", to:" + to.name);
  next();
})

router.afterEach((to, from) => {
  console.log("全局守卫", "afterEach, from:" + from.name + ", to:" + to.name);
})

router.beforeResolve((to, from, next) => {
  console.log("全局守卫", "beforeResolve, from:" + from.name + ", to:" + to.name);
  next();
})


export default router
