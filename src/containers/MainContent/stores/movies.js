import mutations from '../mutations/movies'
import actions from '../actions/movies'
import getters from '../getters/movies'

const state = {
  movies: [],
  isLoading: false,
  error: null
}

export default {
  state,
  mutations,
  actions,
  getters
}
