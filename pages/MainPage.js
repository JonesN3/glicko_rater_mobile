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

import { TabViewAnimated, TabViewPage, TabBarTop, TabBar } from 'react-native-tab-view';

var styles = StyleSheet.create({
  wrapper: {
    width: 50,
    height: 100,
  },
  text: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
   flex: 1,
 },
 page: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
});

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Players' },
        { key: '2', title: 'Matches' },
      ],
    }
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBarTop style={{backgroundColor: Colors.primaryColor}} indicatorStyle={{ backgroundColor: Colors.primaryColorText }} {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      //return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
      return <PlayerPage/>
    case '2':
      //return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
      return <MatchPage/>
    default:
      return null;
    }
  };

  _renderPage = (props) => {
    return <TabViewPage {...props} renderScene={this._renderScene} />;
  };

  render() {
    return (
      <View>
                  <StatusBar
            backgroundColor={Colors.primaryColorDark}
            barStyle="default"/>
      <Header text1={"back"} link1={this.props.goBack} text={this.props.routing.league.name} shadowdisabled={true}/>
      <TabViewAnimated height={520}
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderPage}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    </View>
    );
  }
};

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: -25,
      right: 10
    }}>
      <Text>
        <Text style={{
          color: '#007aff',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
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
    goBack: () => dispatch(goBack()),
  }),
)(MainPage);

export default ConnectedApp;
