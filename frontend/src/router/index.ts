import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/questions',
      name: 'forum',
      component: () => import('../views/ForumView.vue')
    },
    {
      path: '/questions/:id',
      name: 'question',
      component: () => import('../views/QuestionView.vue')
    },
    {
      path: '/questions/new',
      name: 'question new',
      component: () => import('../views/CreateQuestionView.vue')
    }
  ]
})

export default router
