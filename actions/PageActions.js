/**
 *
 * @flow
 *
 */

 import { GoToPageAction } from '../types';

 export function goToLoginPage(): GoToPageAction {
   return { type: 'GO_TO_PAGE', name: 'LoginPage' }
 }
