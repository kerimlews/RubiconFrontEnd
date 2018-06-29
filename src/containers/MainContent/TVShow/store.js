import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  tvshows: [],
  isLoading: false,
  error: null
}

export default {
  state,
  mutations,
  actions,
  getters
}
