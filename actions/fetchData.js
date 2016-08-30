/** Use thunk for all API calls. Thunk is mainly structure and syntax sugar, gives a clear data flow
 *  Dispatch then request is issued and when request finished with received data.
 */

const API = 'https://glicko-api.desperate.solutions';
/* Leagues */
export const REQUEST_LEAGUES = 'REQUEST_LEAGUES';
export function requestLeagues(user) {
  return {
    type: REQUEST_LEAGUES,
    user
  }
}

export const RECEIVE_LEAGUES = 'RECEIVE_LEAGUES';
export function receiveLeagues(user, leagues) {
  return {
    type: RECEIVE_LEAGUES,
    user,
    leagues,
  }
}

/* thunk! */
export function getLeagues(user) {
  return function (dispatch) {

      /* Inform that we are starting the request */
      dispatch(requestLeagues(user));

      /* When data is received, dispatch with data and inform the request is fulfilled */
      return fetch(`${API}/leagues`)
      .then(response =>
        response.json()
      )
      .then(json =>
        dispatch(receiveLeagues(user, json))
      )
      .catch(error => {
         console.log("ERROR fetching data: " + error);
       })
  }
}

/* Players */
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export function requestPlayers(league) {
  return {
    type: REQUEST_PLAYERS,
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

export function getPlayers(league) {
  return function (dispatch) {
    dispatch(requestPlayers(league));

    return fetch(`${API}/${league}/players`)
    .then(response =>
      response.json()
    )
    .then(data =>
      dispatch(receivePlayers(league, data))
    )
    .catch(error => {
      console.log("ERROR fetching data: " + error)
    })
  }
}

/* Matches */
export const REQUEST_MATCHES = 'REQUEST_MATCHES';
export function requestMatches(league) {
  return {
    type: REQUEST_MATCHES,
    league
  }
}

export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
export function receiveMatches(league, matches) {
  return {
    type: RECEIVE_MATCHES,
    league,
    matches,
  }
}

export function getMatches(league) {
  return function (dispatch) {
    dispatch(requestMatches(league));

    return fetch(`${API}/${league}/games`)
    .then(response =>
      response.json()
    )
    .then(matches =>
      dispatch(receiveMatches(league, matches))
    )
    .catch(error => {
      console.log("Error fetching matches", error)
    })
  }
}
