import Vue from 'vue'
import {
  FETCH_TVSHOWS,
  FETCH_TVSHOWS_FAIL,
  FETCH_TVSHOWS_SUCCESS,
  SEARCH_TVSHOWS,
  SEARCH_TVSHOWS_FAIL,
  SEARCH_TVSHOWS_SUCCESS
} from './constants'

export default {
  fetchTVShows ({ commit }) {
    commit(FETCH_TVSHOWS)

    // const key = localStorage.getItem('key')
    const params = {
      params: {
        api_key: '7e23e0e12a44a600050e085ae79cc43a'
      }
    }

    Vue.http.get('tv/top_rated', params)
      .then((response) => {
        commit(FETCH_TVSHOWS_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_TVSHOWS_FAIL, ex)
      })
  },
  searchTVShows ({ commit }, value) {
    commit(SEARCH_TVSHOWS)

    // const key = localStorage.getItem('key')
    const params = {
      params: {
        api_key: '7e23e0e12a44a600050e085ae79cc43a',
        query: value
      }
    }

    Vue.http.get('search/tv', params)
      .then((response) => {
        commit(SEARCH_TVSHOWS_SUCCESS, response.body)
      }, (ex) => {
        commit(SEARCH_TVSHOWS_FAIL, ex)
      })
  }
}
