import {
  CHANGE_CONTENT
} from './constants'

export default {
  [CHANGE_CONTENT] (state) {
    state.showMainContent = !state.showMainContent
  }
}
