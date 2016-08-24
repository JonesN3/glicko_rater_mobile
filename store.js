/**
 *
 * MIT License
 *
 * @flow
 *
 */

import { createStore, applyMiddleware } from 'redux'
import { fetchLeagues } from './actions/fetchData'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import devTools from 'remote-redux-devtools';
import app from './reducers/app';

const loggerMiddleware = createLogger()

 const configureStore = (initalState) => (
   createStore(
     app,
     initalState,
     applyMiddleware(
       thunkMiddleware,
       loggerMiddleware,
     ),
     devTools(),
   )
 );

 const store = configureStore({});

 store.dispatch(fetchLeagues('reactjs')).then(() =>
  console.log(store.getState())
)

 export default store;
