import { CHANGE_CONTENT } from '@/App/constants'
import { TOGGLE_MAIN_CONTENT } from '@/containers/MainContent/constants/main-content'

export default {
  goBack ({ commit, state }) {
    commit(CHANGE_CONTENT)
    commit(TOGGLE_MAIN_CONTENT, state.showDetailMovie)
  }
}
