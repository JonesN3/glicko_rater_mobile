import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { StandardButton } from '../components/buttons';

import Colors from '../styles/Colors';

import { goToLoginPage } from '../actions/PageActions';

import { getPlayers, getMatches } from '../actions/fetchData';

import LoginPage  from './LoginPage'
import StandingsPage from './StandingsPage'
import Header from '../components/Header'
import PlayerList from '../components/PlayerList'
import MatchList from '../components/MatchList'

var ScrollableTabView = require('react-native-scrollable-tab-view');

class MatchPage extends Component {
  componentDidMount() {
    console.log(this.props.routing.league.name)
    this.props.fetchMatches(this.props.routing.league.name)
  }
  render() {
    console.log("MatchPage", this.props)
    return (
      <View style={{ flex:1 }}>
      <MatchList matches={this.props.matches} />
      </View>
    );
  }
}

const ConnectedApp = connect(
  state => ({
    routing: state.routing,
    league: state.league,
    matches: state.matches,
  }),
  (dispatch) => ({
    goToLoginPage: () => dispatch(goToLoginPage()),
    fetchMatches: (league) => dispatch(getMatches(league)),
  }),
)(MatchPage);

export default ConnectedApp;
