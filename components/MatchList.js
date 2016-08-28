import React, { Component } from 'react';
import {
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native'

class MatchList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(([]))
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if(!nextProps) {
      console.log("nextProps" == null )
    } else {
    if (nextProps.matches.items !== this.props.matches.items) {
      this.setState({
        //elements: nextProps.league.items,
        dataSource: this.state.dataSource.cloneWithRows(nextProps.matches.items)
      })
    }
  }
}

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (<LeagueField match={rowData} action={() => this.props.onPress(rowData)}/>)}
        />
    );
  }
}

const LeagueField = ({match, action
}: {
    match: Object,
    action: Function,
}) => (
  <TouchableOpacity style={styles.LeagueItem}>
  <View style={styles.container}>
    <Text style={styles.text}> {match.black} </Text>
    <Text style={{justifyContent:'center', textAlign: 'center', flex: 2}}> {match.result} </Text>
    <Text> {match.white} </Text>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  LeagueItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  score: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 3,
  },
  text: {
    justifyContent: 'flex-start',
    fontSize: 14,

  }
})

export default MatchList;
