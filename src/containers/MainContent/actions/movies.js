import Vue from 'vue'
import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  SEARCH_MOVIES,
  SEARCH_MOVIES_FAIL,
  SEARCH_MOVIES_SUCCESS
} from '../constants/movies'

export default {
  fetchMovies ({ commit }) {
    commit(FETCH_MOVIES)

    // const key = localStorage.getItem('key')
    const params = { params: {api_key: '7e23e0e12a44a600050e085ae79cc43a'} }

    Vue.http.get('movie/top_rated', params)
      .then((response) => {
        commit(FETCH_MOVIES_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_MOVIES_FAIL, ex)
      })
  },
  searchMovies ({ commit }, value) {
    commit(SEARCH_MOVIES)

    // const key = localStorage.getItem('key')
    const params = {
      params: {
        api_key: '7e23e0e12a44a600050e085ae79cc43a',
        query: value
      }
    }

    Vue.http.get('search/movie', params)
      .then((response) => {
        commit(SEARCH_MOVIES_SUCCESS, response.body)
      }, (ex) => {
        commit(SEARCH_MOVIES_FAIL, ex)
      })
  }
}
