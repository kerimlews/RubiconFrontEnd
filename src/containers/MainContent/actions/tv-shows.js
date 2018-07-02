import ajax from '@/common/ajax'
import { CHANGE_CONTENT } from '@/App/constants'
import {
  FETCH_VIDEOS,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL
} from '@/containers/DetailContent/constants'
import {
  FETCH_TVSHOWS,
  FETCH_TVSHOWS_FAIL,
  FETCH_TVSHOWS_SUCCESS,
  SEARCH_TVSHOWS,
  SEARCH_TVSHOWS_FAIL,
  SEARCH_TVSHOWS_SUCCESS
} from '../constants/tv-shows'
import { SHOW_DETAILS } from '../../DetailContent/constants'

export default {
  fetchTVShows ({ commit }) {
    commit(FETCH_TVSHOWS)

    ajax.get('tv/top_rated')
      .then((response) => {
        commit(FETCH_TVSHOWS_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_TVSHOWS_FAIL, ex.body.status_message)
      })
  },
  searchTVShows ({ commit }, value) {
    commit(SEARCH_TVSHOWS)

    ajax.get('search/tv', value)
      .then((response) => {
        commit(SEARCH_TVSHOWS_SUCCESS, response.body)
      }, (ex) => {
        commit(SEARCH_TVSHOWS_FAIL, ex.body.status_message)
      })
  },
  showDetailsTVShow ({ commit }, data) {
    commit(FETCH_VIDEOS)

    ajax.get(`tv/${data.item.id}/videos`)
      .then((response) => {
        commit(FETCH_VIDEOS_SUCCESS, response.body)
      }, (ex) => {
        commit(FETCH_VIDEOS_FAIL, ex.body.status_message)
      })
    commit(SHOW_DETAILS, data)
    commit(CHANGE_CONTENT)
  }
}
