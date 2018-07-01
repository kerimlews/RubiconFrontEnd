import {
  TOGGLE_MAIN_CONTENT
} from '../constants/main-content'

export default {
  [TOGGLE_MAIN_CONTENT] (state, value) {
    state.showMovies = value
  }
}
