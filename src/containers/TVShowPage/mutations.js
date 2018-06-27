import {
  FETCH_TVSHOW_FAIL,
  FETCH_TVSHOW,
  FETCH_TVSHOW_SUCCESS
} from './constants'

export default {
  [FETCH_TVSHOW] (state) {
    state.isLoading = true
  },
  [FETCH_TVSHOW_SUCCESS] (state, payload) {
    state.isLoading = false
    state.tvshow = payload.results
  },
  [FETCH_TVSHOW_FAIL] (state, payload) {
    state.isLoading = false
    state.error = payload.body.status_message
  }
}
