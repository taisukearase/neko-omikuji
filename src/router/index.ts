import Vue from 'vue'
import VueRouter from 'vue-router'
import Omikuji from '../components/Omikuji.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'omikuji',
    component: Omikuji,
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

export default router
