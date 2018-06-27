import {
  CHECK_TOKEN,
  CHECK_TOKEN_FAIL
} from './constants'

export default {
  [CHECK_TOKEN] (state) {
    state.isLoading = true
  },
  [CHECK_TOKEN_FAIL] (state, payload) {
    state.isAuthenticated = false
    state.isLoading = false
    state.error = payload.body.status_message
  }
}
