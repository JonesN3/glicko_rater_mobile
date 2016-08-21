/**
 *
 * MIT License
 *
 * @flow
 *
 */

import React from 'react';
import { connect, Provider } from 'react-redux'

import store from './store';

import { UIManager, Platform } from 'react-native';
import LoginPage from './pages/LoginPage';


const pages = { 'LoginPage': LoginPage };

const Page = (props) => {
  const DisplayPage = pages[props.pageName]
  return <DisplayPage />
}

const ConnectedPage = connect (
  (state) => ({
    pageName: state.routing.name,
  }),
)(Page);

const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedPage />
  </Provider>
);

export default ReduxApp;
