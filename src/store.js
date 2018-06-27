import Vue from 'vue'
import Vuex from 'vuex'

import loginStore from '@/containers/LoginPage/store'
import moviesStore from '@/containers/MoviesPage/store'
import tvshowStore from '@/containers/TVShowPage/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: loginStore,
    movies: moviesStore,
    tvshow: tvshowStore
  }
})
