/**
 *
 * MIT License
 *
 * @flow
 *
 */

import { combineReducers } from 'redux';
import routing from './routing';
import leagues from './dataFetch'
import players from './players'
import matches from './matches'

const app = combineReducers({ routing, leagues, players, matches });

export default app;
