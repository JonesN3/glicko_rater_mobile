/**
 * MIT License
 *
 * @flow
 *
 */

 import type { Action, GoToPageAction } from '../types';

 const initialState = { name: 'LoginPage' }

 function routing(state = initalState, action: GoToPageAction) {
   if (action.type === 'GO_TO_PAGE') {
     return { name: action.name, prev: state.name, questions: action.questions};
   }
   if(action.type === 'GO_TO_PREV_PAGE') {
     return { name: state.prev, questions: action.questions};
   }

   return state;
 }
