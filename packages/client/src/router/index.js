import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import QuizQuestionView from '../views/QuizQuestionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quiz/:quizId',
      name: 'quiz',
      component: QuizView,
      props: route => ({
        quizId: parseInt(route.params.quizId)
      })
    },
    {
      path: '/quiz/:quizId/questions/:questId',
      name: 'quizQuestion',
      component: QuizQuestionView,
      props: route => ({
        quizId: parseInt(route.params.quizId),
        questId: parseInt(route.params.questId)
      })
    },
    {
      path: '/session/:sessionId/quiz/:quizId/questions/:questId',
      name: 'sessionQuizQuestion',
      component: QuizQuestionView,
      props: route => ({
        sessionId: parseInt(route.params.sessionId),
        quizId: parseInt(route.params.quizId),
        questId: parseInt(route.params.questId)
      })
    },
    {
      path: '/quiz/:quizId/results',
      name: 'quizResults',
      component: QuizView,
      props: route => ({
        quizId: parseInt(route.params.quizId)
      })
    }
  ]
})

export default router
