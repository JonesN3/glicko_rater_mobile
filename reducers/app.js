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

const app = combineReducers({ routing, leagues, players });

export default app;
