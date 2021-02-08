import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resep',
    name: 'Resep',
    component: () => import('../views/Resep.vue')
  },
  {
    path: '/kategori/:id',
    name: 'Kategori',
    component: () => import('../views/Kategori.vue')
  },
  {
    path: '/favorit',
    name: 'Favorit',
    component: () => import('../views/Favorit.vue')
  },
  {
    path: '/detail-resep/:id',
    name: 'Detail Resep',
    component: () => import('../views/DetailResep.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
