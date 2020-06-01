import Vue from 'vue'
import Router from 'vue-router'
import StartQuiz from './views/StartQuiz.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartQuiz
    },
    {
      path: '/play/:category/:number',
      name: 'play',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "play" */ './views/PlayQuiz.vue')
    },
    {
      path: '/end',
      name: 'end',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "end" */ './views/EndQuiz.vue'),
      props: true
    },
    {
      path: '/submissions',
      name: 'submissions',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "end" */ './views/SubmissionsOverview.vue')
    }
  ]
})
