import Vue from 'vue'
import {
  FETCH_TVSHOW,
  FETCH_TVSHOW_FAIL,
  FETCH_TVSHOW_SUCCESS
} from './constants'

export default {
  fetchTVShow ({ commit }) {
    commit(FETCH_TVSHOW)

    // const key = localStorage.getItem('key')
    const params = { params: {api_key: '7e23e0e12a44a600050e085ae79cc43a'} }

    Vue.http.get('tv/top_rated', params)
      .then((response) => {
        commit(FETCH_TVSHOW_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_TVSHOW_FAIL, ex)
      })
  }
}
