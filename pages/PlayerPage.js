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

import { getPlayers } from '../actions/fetchData';

import LoginPage  from './LoginPage'
import MatchPage from './MatchPage'
import StandingsPage from './StandingsPage'
import Header from '../components/Header'
import PlayerList from '../components/PlayerList'

var ScrollableTabView = require('react-native-scrollable-tab-view');

class PlayerPage extends Component {
  componentDidMount() {
    console.log(this.props.routing.league.name)
    this.props.fetchPlayers(this.props.routing.league.name)
  }
  render() {
    console.log("PlayerPage", this.props)
    return (
      <View style={{ flex:1 }}>
      <PlayerList players={this.props.players} />
      </View>
    );
  }
}

const ConnectedApp = connect(
  state => ({
    routing: state.routing,
    league: state.league,
    players: state.players,
  }),
  (dispatch) => ({
    goToLoginPage: () => dispatch(goToLoginPage()),
    fetchPlayers: (league) => dispatch(getPlayers(league)),
  }),
)(PlayerPage);

export default ConnectedApp;
