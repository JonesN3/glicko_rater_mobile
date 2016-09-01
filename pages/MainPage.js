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
  TouchableOpacity,
  TouchableHighlight,
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
  },
  tab: {
    height:60,
    justifyContent:'center',
    flex:1,
    alignItems:'center',
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
  var tabs = [];
  for (var i=0; i < 2; i++) {
    tabs.push(tab(index, i, pageName[i]));
  }
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      width: 370,
    }}>
      <View style={styles.bar} >
        {tabs}
      </View>
    </View>
  )};

const tab = (index, cur, name) => {
  return(
    <TouchableOpacity height={100} style={[styles.tab, (cur == index) && {backgroundColor:Colors.primaryColorDark} ]}>
      <View>
        <Text style={{color: Colors.primaryColorText}}> {name} </Text>
      </View>
    </TouchableOpacity>
  )};

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
