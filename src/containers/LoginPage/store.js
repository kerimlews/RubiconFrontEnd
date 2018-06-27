import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  isAuthenticated: false,
  isLoading: false,
  error: null
}

export default {
  state,
  mutations,
  actions,
  getters
}
