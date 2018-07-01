import {
  TOGGLE_MAIN_CONTENT
} from '../constants/main-content'

export default {
  toggleMainContent ({ commit }, value) {
    commit(TOGGLE_MAIN_CONTENT, value)
  }
}
