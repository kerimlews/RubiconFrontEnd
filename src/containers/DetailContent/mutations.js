import {
  SHOW_DETAILS,
  FETCH_VIDEOS,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL
} from './constants'

export default {
  [SHOW_DETAILS] (state, payload) {
    state.showDetailMovie = payload.value
    state.item = payload.item
    state.type = payload.type
  },
  [FETCH_VIDEOS] (state, payload) {
    state.isLoadingVideos = true
  },
  [FETCH_VIDEOS_SUCCESS] (state, payload) {
    state.videos = payload.results
    state.isLoadingVideos = false
  },
  [FETCH_VIDEOS_FAIL] (state, payload) {
    state.isLoadingVideos = false
  }
}
