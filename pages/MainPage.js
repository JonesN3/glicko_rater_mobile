import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { StandardButton } from '../components/buttons';

import LoginPage  from './LoginPage'
import MatchPage from './MatchPage'
import PlayerPage from './PlayerPage'
import StandingsPage from './StandingsPage'
import Header from '../components/Header'

var ScrollableTabView = require('react-native-scrollable-tab-view');

class MainPage extends Component {
  render() {
    console.log("render");
    return (
      <ScrollableTabView>
        <PlayerPage tabLabel="Players" />
        <MatchPage tabLabel="Matches" />
        <StandingsPage tabLabel="Standings" />
      </ScrollableTabView>
    );
  }
}


const ConnectedApp = connect(
  state => ({
    routing: state.routing,
  }),
  (dispatch) => ({

  }),
)(MainPage);

export default ConnectedApp;
