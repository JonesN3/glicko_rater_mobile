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


class PlayerPage extends Component {
  render() {
    console.log("render");
    return (
      <View style={{ flex:1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Player page
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

export default PlayerPage;
