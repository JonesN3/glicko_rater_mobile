const API = 'http://glicko-api.desperate.solutions:3000'

export const REQUEST_LEAGUES = 'REQUEST_LEAGUES'
export function requestLeagues(user) {
  return {
    type: REQUEST_LEAGUES,
    user
  }
}

export const RECEIVE_LEAGUES = 'RECEIVE_LEAGUES'
export function receiveLeagues(user, json) {
  return {
    type: RECEIVE_LEAGUES,
    user,
    leagues: json,
  }
}

/* Thunk! This is alternative to useing store.dispatch */
export function fetchLeagues(user) {

  /* explain */
  return function (dispatch) {

      /* API fetch is starting */
      dispatch(requestLeagues(user))

      return fetch(`${API}/leagues`)
      .then(response => {
        const json = response.json()
        console.log(json)
        return json;
      })
      .then(json => {
        console.log("JSON", json);
        dispatch(receiveLeagues(user, json))
      })
      .catch(error => {
         console.log("ERROR fetching data")
       })
  }
}

export const REQEUST_PLAYERS = 'REQEUST_PLAYERS';
export function requestPlayers(league) {
  return {
    type: REQEUST_PLAYERS,
    league
  }
}

export const RECEIVE_PLAYERS = 'RECEIVE_PLAYER';
export function receivePlayers(league, data) {
  return {
    type: RECEIVE_PLAYERS,
    league,
    players: data,
  }
}

export function fetchPlayers(league) {
  return function (dispatch) {
    dispatch(requestPlayers(league))

    return fetch(`${API}/${league}/players`)
    .then(response => {
      const data = response.json()
      return data;
    })
    .then(data => {
      console.log("DATA", data);
      dispatch(receivePlayers(league, data))
    })
    .catch(error => {
      console.log("ERROR fetching data")
    })
  }
}
