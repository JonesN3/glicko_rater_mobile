/**
 * MIT
 *
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimmensions,
  StyleSheet,
  Text,
  LayoutAnimation,
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    height: 48,
    backgroundColor: Colors.primaryColor,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

class MainPage extends Component {
  constructor() {
    super();
  }

  componentWillMount() {

  }

  render() {
    return (
      <View>
        <Header text1={"back"}
                link1={this.props.goBack}
                text={this.props.routing.league.name}
                shadowdisabled={true}/>
        <Swiper height={520}
                marginTop={50}
                renderPagination={renderPagination}
                loop={false}
                paginationStyle={{ bottom: -23, left: null, right: 10, }} >
            <PlayerPage />
          <MatchPage />
        </Swiper>
      </View>
    )
  }
};

const pageName = [ 'Players', 'Games'];

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      width: 370,
    }}>
      <View style={styles.bar} >
        <View>
          <Text style={{color: Colors.primaryColorText}}>
            {index + 1}/{total}: {pageName[index]}
          </Text>
        </View>
        <View>
          <Text> Hello </Text>
        </View>
        <View>
          <Text> Test </Text>
        </View>
      </View>
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
