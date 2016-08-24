import { RECEIVE_LEAGUES, REQUEST_LEAGUES } from '../actions/fetchData'

function leagues(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_LEAGUES:
      return Object.assign({}, state, {
        isFetching: true,
        items: [],
      })
    case RECEIVE_LEAGUES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.leagues,
      })
    default:
      return state
  }
}

export default leagues;
