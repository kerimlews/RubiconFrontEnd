import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  tvshow: [],
  isLoading: false,
  error: null
}

export default {
  state,
  mutations,
  actions,
  getters
}
