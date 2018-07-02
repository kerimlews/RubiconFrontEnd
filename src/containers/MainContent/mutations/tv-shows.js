import {
  FETCH_TVSHOWS,
  FETCH_TVSHOWS_FAIL,
  FETCH_TVSHOWS_SUCCESS,
  SEARCH_TVSHOWS,
  SEARCH_TVSHOWS_FAIL,
  SEARCH_TVSHOWS_SUCCESS
} from '../constants/tv-shows'

export default {
  [FETCH_TVSHOWS] (state) {
    state.isLoading = true
    state.error = null
  },
  [FETCH_TVSHOWS_SUCCESS] (state, payload) {
    state.isLoading = false
    state.tvshows = payload.results
  },
  [FETCH_TVSHOWS_FAIL] (state, payload) {
    state.isLoading = false
    state.error = payload
  },
  [SEARCH_TVSHOWS] (state) {
    state.isLoading = true
    state.error = null
  },
  [SEARCH_TVSHOWS_SUCCESS] (state, payload) {
    state.isLoading = false
    state.tvshows = payload.results
  },
  [SEARCH_TVSHOWS_FAIL] (state, payload) {
    state.isLoading = false
    state.error = payload
  }
}
