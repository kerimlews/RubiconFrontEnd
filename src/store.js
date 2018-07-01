import Vue from 'vue'
import Vuex from 'vuex'
import appStore from '@/App/store'

import mainStore from '@/containers/MainContent/store'
import detailStore from '@/containers/DetailContent/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appStore,
    mainStore,
    detailStore
  }
})
