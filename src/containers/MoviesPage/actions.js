import Vue from 'vue'
import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS
} from './constants'

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
  }
}
