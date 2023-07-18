import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '@/views/AboutMe.vue'
import ImageView from '@/views/ImageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/imageView',
      name: 'imageView',
      component: ImageView
    },
  ]
})

export default router
