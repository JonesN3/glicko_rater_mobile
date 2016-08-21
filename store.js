/**
 *
 * MIT License
 *
 * @flow
 *
 */

 import { createStore } from 'react';

 import devTools from 'remote-redux-devtools';
 import app from './reducers';

 const configureStore = (initalState) => (
   createStore(
     app,
     initalState,
     devTools(),
   )
 );

 const store = configureStore({});

 export default store;
