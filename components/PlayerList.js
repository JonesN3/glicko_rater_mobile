import React, { Component } from 'react';
import {
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native'

import Gravatar from 'react-native-avatar-gravatar';

class PlayerList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if (nextProps.players.items !== this.props.players.items) {
      this.setState({
        //elements: nextProps.league.items,
        dataSource: this.state.dataSource.cloneWithRows(nextProps.players.items)
      })
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (<LeagueField player={rowData} action={() => this.props.onPress(rowData)}/>)}
        />
    );
  }
}

//onPress={() => this.rowPressed.bind(this, i)}
const LeagueField = ({player, action
}: {
    league: Object,
    action: Function,
}) => (
  <TouchableOpacity style={styles.LeagueItem}>

  <View style={{justifyContent:'space-between', flex:1}}>
    <Text style={styles.text}> {player.name} </Text>
    <Text style={styles.text}> {player.rating} </Text>
  </View>


  <View style={{justifyContent:'center', margin: 5}}>
    <Gravatar emailAddress="vegar.molvig@gmail.com" size={99} mask="rounded" />
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  LeagueItem: {
    height: 60,
    width: 160,
    elevation: 2,
    margin: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  text: {
    margin: 5
  },
  list : {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default PlayerList;
