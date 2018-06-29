
const SHOW_DETAIL_MOVIE = 'SHOW_DETAIL_MOVIE'
const SHOW_DETAIL_TVSHOW = 'SHOW_DETAIL_TVSHOW'

export default {
  state: {
    showDetailMovie: false,
    item: null
  },
  mutations: {
    [SHOW_DETAIL_MOVIE] (state, payload) {
      state.showDetailMovie = true
      state.item = payload
    },
    [SHOW_DETAIL_TVSHOW] (state, payload) {
      state.showDetailMovie = false
      state.item = payload
    }
  },
  actions: {
    showDetailsMovie ({ commit }, item) {
      commit(SHOW_DETAIL_MOVIE, item)
    },
    showDetailsTVShow ({ commit }, item) {
      commit(SHOW_DETAIL_TVSHOW, item)
    }
  },
  getters: {
    item: state => state.item
  }
}
