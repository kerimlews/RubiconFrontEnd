import ajax from '@/common/ajax'
import { CHANGE_CONTENT } from '@/App/constants'
import {
  SHOW_DETAILS,
  FETCH_VIDEOS,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL
} from '@/containers/DetailContent/constants'
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

    ajax.get('movie/top_rated')
      .then((response) => {
        commit(FETCH_MOVIES_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_MOVIES_FAIL, ex.body.status_message)
      })
  },
  searchMovies ({ commit }, value) {
    commit(SEARCH_MOVIES)

    ajax.get('search/movie', value)
      .then((response) => {
        commit(SEARCH_MOVIES_SUCCESS, response.body)
      }, (ex) => {
        commit(SEARCH_MOVIES_FAIL, ex.body.status_message)
      })
  },
  showDetailsMovie ({ commit }, data) {
    commit(FETCH_VIDEOS)

    ajax.get(`movie/${data.item.id}/videos`)
      .then((response) => {
        commit(FETCH_VIDEOS_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_VIDEOS_FAIL, ex.body.status_message)
      })
    commit(SHOW_DETAILS, data)
    commit(CHANGE_CONTENT)
  }
}
