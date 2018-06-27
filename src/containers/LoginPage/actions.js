import Vue from 'vue'
import router from '../../router'
import {
  CHECK_TOKEN,
  CHECK_TOKEN_FAIL
} from './constants'

export default {
  checkToken ({ commit }, data) {
    commit(CHECK_TOKEN)
    const params = { params: {api_key: data} }

    Vue.http.get('authentication/token/new', params)
      .then((response) => {
        router.push({ name: '/movies' })
      }, (ex) => {
        commit(CHECK_TOKEN_FAIL, ex)
      })
  }
}
