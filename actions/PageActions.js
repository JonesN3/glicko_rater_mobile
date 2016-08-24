/**
 *
 * @flow
 *
 */

 import { GoToPageAction } from '../types';

 export function goToLoginPage(): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'LoginPage' }
 }

 export function goToMainPage(): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'MainPage' }
 }

 export function goToLeaguePage(): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'LeagueSelectPage' }
 }

export function goToAnimationPage(): GoToPageAction {
  return { type: 'GO_TO_PAGE', name: 'AnimationTestPage'}
}
