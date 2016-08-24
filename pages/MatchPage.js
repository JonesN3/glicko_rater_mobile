/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { StandardButton, OutlineButton } from '../components/buttons';
import { Button } from 'react-native-material-design';
import { goToMainPage } from '../actions/PageActions';


class MatchPage extends Component {
  render() {
    console.log("render");
    return (
      <View style={{ flex:1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Match page
        </Text>
      </View>
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

const fetchMathces = () => {
  console.log("FETCH!")
  return(dispatch) => {
    return fetch('http://glicko-api.desperate.solutions:3000/squash/games', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then( (response) => {
      console.log("fetch ", response);
    })
    .catch( (error ) => {
      console.warn("Fetch error", error);
    })
  }
}


const ConnectedApp = connect(
  state => ({
    routing: state.routing,
  }),
  (dispatch) => ({

  }),
)(MatchPage);

export default ConnectedApp;
