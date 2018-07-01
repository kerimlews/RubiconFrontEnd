import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  SEARCH_MOVIES,
  SEARCH_MOVIES_FAIL,
  SEARCH_MOVIES_SUCCESS
} from '../constants/movies'

export default {
  [FETCH_MOVIES] (state) {
    state.isLoading = true
  },
  [FETCH_MOVIES_SUCCESS] (state, payload) {
    state.isLoading = false
    state.movies = payload.results
  },
  [FETCH_MOVIES_FAIL] (state, payload) {
    state.isLoading = false
    state.error = payload.body.status_message
  },
  [SEARCH_MOVIES] (state) {
    state.isLoading = true
  },
  [SEARCH_MOVIES_SUCCESS] (state, payload) {
    state.isLoading = false
    state.movies = payload.results
  },
  [SEARCH_MOVIES_FAIL] (state, payload) {
    state.isLoading = false
    state.error = payload.body.status_message
  }
}
