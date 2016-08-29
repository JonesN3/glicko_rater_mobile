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

import {goBack} from '../actions/PageActions'; 

/* pages */
import PlayerPage from './PlayerPage'
import MatchPage from './MatchPage'

import PlayerList from '../components/PlayerList';

import Colors from '../styles/Colors';
import Header from '../components/Header';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
    width: 50,
    height: 100,
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var MainPage = React.createClass({
  render: function() {
    return (
      <View >
        <Header text1={"back"} link1={this.props.goBack} text={this.props.routing.league.name} style={{flex:2}}/>
        <Swiper height={530} flex={1} style={styles.wrapper} showsButtons={true} showsButtons={false} loop={false}>
          <View style={styles.slide1}>
            <PlayerPage/>
          </View>
          <View style={styles.slide2}>
            <MatchPage/>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
    </View>
    )
  }
})

const ConnectedApp = connect(
  state => ({
    routing: state.routing,
    league: state.league,
    players: state.players,
  }),
  (dispatch) => ({
    goToLoginPage: () => dispatch(goToLoginPage()),
    fetchPlayers: (league) => dispatch(fetchPlayers(league)),
    goBack: () => dispatch(goBack()),
  }),
)(MainPage);

export default ConnectedApp;
