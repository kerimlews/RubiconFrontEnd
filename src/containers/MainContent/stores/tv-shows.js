import mutations from '../mutations/tv-shows'
import actions from '../actions/tv-shows'
import getters from '../getters/tv-shows'

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
