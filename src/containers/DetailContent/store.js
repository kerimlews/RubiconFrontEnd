import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  showDetailMovie: false,
  item: null,
  videos: [],
  isLoadingVideos: false,
  type: null
}

export default {
  state,
  mutations,
  actions,
  getters
}
