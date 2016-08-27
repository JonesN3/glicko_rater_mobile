/**
 * MIT License
 *
 * @flow
 *
 */

 import type { Action, GoToPageAction } from '../types';

 const initialState = { name: 'LoginPage' }

 function routing(state = initialState, action: GoToPageAction) {
   if (action.type === 'GO_TO_PAGE') {
     return { name: action.name, prev: state.name, league: action.league };
   }
   if(action.type === 'GO_TO_PREV_PAGE') {
     return { name: state.prev };
   }

   return state;
 }

 export default routing;
