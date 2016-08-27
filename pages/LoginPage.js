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
  TouchableWithoutFeedback,
  Slider,
  StatusBar,
} from 'react-native';

import Colors from '../styles/Colors'


import { createAnimatableComponent, View, Text } from 'react-native-animatable';

import { connect } from 'react-redux';
import { StandardButton, OutlineButton } from '../components/buttons';
import { Button } from 'react-native-material-design';
import {
  goToLeaguePage,
  goToAnimationPage,
  goToMainPage,
} from '../actions/PageActions';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this._animatables = {};
    this.state = {
      duration: 1000,
      toggledOn: false,
    };
  }
  render() {
    const { duration, toggledOn } = this.state;
    console.log("render");
    return (
      <View style={{ flex:1 }}>
                <StatusBar
          backgroundColor={Colors.primaryColorDark}
          barStyle="default"/>
      <View style={styles.container}>
        <View animation="tada" delay={1500}>

        <TouchableWithoutFeedback onPress={() => this.setState({ toggledOn: !toggledOn })}>
        <Text style={[styles.welcome, toggledOn && styles.toggledOn]} transition={['color', 'rotate', 'fontSize']}>
          Glicko rater
          </Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={this.props.goToAnimationPage}>
        <Text style={styles.instructions}>
          Created with react native.
        </Text>
      </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center'}}>
        <OutlineButton text = "Login" onPress={this.props.goToLeaguePage} style={{width: 200}}/>
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
  toggledOn: {
    transform: [{
      rotate: '360deg'
    }, {
      translateY: -20
    }]
  },
});

const ConnectedApp = connect(
  state => ({
    routing: state.routing,
  }),
  (dispatch) => ({
    goToMainPage: () => dispatch(goToMainPage()),
    goToLeaguePage: () => dispatch(goToLeaguePage()),
    goToAnimationPage: () => dispatch(goToAnimationPage()),
  }),
)(LoginPage);

export default ConnectedApp;
