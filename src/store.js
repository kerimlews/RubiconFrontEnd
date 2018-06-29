import Vue from 'vue'
import Vuex from 'vuex'

import mainStore from '@/containers/MainContent/store'
import detailStore from '@/containers/DetailContent/store'

Vue.use(Vuex)

const CHANGE_CONTENT = 'CHANGE_CONTENT'

export default new Vuex.Store({
  modules: {
    ...mainStore,
    detailStore
  },
  state: {
    showMainContent: true
  },
  mutations: {
    [CHANGE_CONTENT] (state) {
      state.showMainContent = !state.showMainContent
    }
  },
  actions: {
    changeContent ({ commit }) {
      commit(CHANGE_CONTENT)
    }
  },
  getters: {
    showMainContent: state => state.showMainContent
  }
})
