/**
 *
 * @flow
 *
 */

 import { GoToPageAction } from '../types';

 export function goToLoginPage(): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'LoginPage' }
 }

 export function goToMainPage(league: Object): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'MainPage', league: league }
 }

 export function goToLeaguePage(): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'LeagueSelectPage' }
 }

export function goToAnimationPage(): GoToPageAction {
  return { type: 'GO_TO_PAGE', name: 'AnimationTestPage'}
}

export function goToPlayerPage(league: Object): GoToPlayerPage {
  return { type: 'GO_TO_PAGE', name: 'PlayerPage', league: league }
}

export function goBack(): goBack {
  return { type: 'GO_TO_PREV_PAGE' }
}
