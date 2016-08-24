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

const app = combineReducers({ routing, leagues });

export default app;
