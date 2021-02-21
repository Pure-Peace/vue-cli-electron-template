import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/* Navigation guard, execute before jump
导航守卫，在router每次跳转前执行 */
router.beforeEach((to, from, next) => {
  /* Check here */
  next() // Verifyed, allow jump
})

/* Execute after jump
导航守卫，在router每次跳转完成后执行 */
router.afterEach(() => {})

export default router
