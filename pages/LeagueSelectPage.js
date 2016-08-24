/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { StandardButton, OutlineButton } from '../components/buttons';
import { Button } from 'react-native-material-design';
import { goToMainPage } from '../actions/PageActions';
import { fetchLeagueList, fetchLeagues } from '../actions/fetchData';

import Header from '../components/Header';
import Colors from '../styles/Colors';
import LeagueList from '../components/LeagueList';

class LeagueSelectPage extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchLeagues('usernamehere')
  }

  render() {
    console.log("render");
    console.log(this.props);
    return (
      <View style={{ flex:1 }}>
        <StatusBar
          backgroundColor={Colors.primaryColorDark}
          barStyle="default"/>
      <Header text="Leagues"/>
      <LeagueList leagues={this.props.leagues} onPress={this.props.goToMainPage}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const ConnectedApp = connect(
  state => ({
    routing: state.routing,
    leagues: state.leagues,
  }),
  (dispatch) => ({
    goToMainPage: () => dispatch(goToMainPage()),
    fetchLeagueList: () => dispatch(fetchLeagueList()),
    fetchLeagues: (user) => dispatch(fetchLeagues(user)),
  }),
)(LeagueSelectPage);

export default ConnectedApp;
