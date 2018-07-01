import Vue from 'vue'
import { CHANGE_CONTENT } from '@/App/constants'
import { TOGGLE_MAIN_CONTENT } from '@/containers/MainContent/constants/main-content'
import {
  SHOW_DETAILS,
  FETCH_VIDEOS,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL
} from './constants'

export default {
  showDetails ({ commit }, data) {
    commit(SHOW_DETAILS, data)
    commit(CHANGE_CONTENT)
  },
  goBack ({ commit, state }) {
    commit(CHANGE_CONTENT)
    commit(TOGGLE_MAIN_CONTENT, state.showDetailMovie)
  },
  fetchVideos ({ commit }, id) {
    commit(FETCH_VIDEOS)

    const params = { params: {api_key: '7e23e0e12a44a600050e085ae79cc43a'} }

    Vue.http.get(`movie/${id}/videos`, params)
      .then((response) => {
        commit(FETCH_VIDEOS_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_VIDEOS_FAIL, ex)
      })
  }
}
