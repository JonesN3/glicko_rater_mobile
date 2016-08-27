import { RECEIVE_PLAYERS, REQUEST_PLAYERS } from '../actions/fetchData'

function players(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_PLAYERS:
      return Object.assign({}, state, {
        isFetching: true,
        items: [],
      })
    case RECEIVE_PLAYERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.players,
      })
    default:
      return state
  }
}

export default players;
