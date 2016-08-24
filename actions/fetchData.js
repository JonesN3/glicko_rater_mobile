  const API = 'http://glicko-api.desperate.solutions:3000'

  export function fetchLeagueList(dispatch) {
    console.log("help");
    return dispatch => {
      console.log("hello");
      fetch(`${API}/leagues`)
      //.then(processResponse)
      .then(res => function test() {
        console.log(res);
      })
      .then(res => dispatch ({
        type: FETCH_LEAGUES,
        leagues: res
      }))
      .catch(error => console.log("ERROR"))
    }
  }

  function processResponse (response) {
    let isOk = response.ok

    return response.text()
    .then(body => {
      try { body = JSON.parse(body) }
      catch (error) { if (isOk) isOk = false }

      if (isOk) return body

      throw { ...body, statusCode: response.status }
    })
  }


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
