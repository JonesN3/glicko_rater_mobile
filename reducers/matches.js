import { RECEIVE_MATCHES, REQUEST_MATCHES } from '../actions/fetchData'

function matches(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_MATCHES:
      return Object.assign({}, state, {
        isFetching: true,
        items: [],
      })
    case RECEIVE_MATCHES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.matches,
      })
    default:
      return state
  }
}

export default matches;
