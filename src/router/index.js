import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/containers/LoginPage'
import MoviesPage from '@/containers/MoviesPage'
import TVShowPage from '@/containers/TVShowPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/movie',
      name: 'Movies',
      component: MoviesPage
    },
    {
      path: '/tvshow',
      name: 'TVShow',
      component: TVShowPage
    }
  ],
  mode: 'history'
})
