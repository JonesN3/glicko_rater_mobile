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

import { fetchPlayers } from '../actions/fetchData';

import LoginPage  from './LoginPage'
import MatchPage from './MatchPage'
import PlayerPage from './PlayerPage'
import StandingsPage from './StandingsPage'
import Header from '../components/Header'
import PlayerList from '../components/PlayerList'

var ScrollableTabView = require('react-native-scrollable-tab-view');

class MainPage extends Component {
  componentDidMount() {
    console.log(this.props.routing.league.name)
    this.props.fetchPlayers(this.props.routing.league.name)
  }
  render() {
    console.log("MainPage", this.props)
    return (
      <View style={{ flex:1 }}>
        <StatusBar
          backgroundColor={Colors.primaryColorDark}
          barStyle="default"/>
        <Header text1 = "Home" link1 = {this.props.goToLoginPage} text={this.props.routing.league.name}/>
      <PlayerList players={this.props.players} onPress={this.props.goToMainPage}/>
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
    fetchPlayers: (league) => dispatch(fetchPlayers(league)),
  }),
)(MainPage);

export default ConnectedApp;
