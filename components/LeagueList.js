import React, { Component } from 'react';
import {
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native'

class LeagueList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.leagues.items)
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if (nextProps.leagues.items !== this.props.leagues.items) {
      this.setState({
        //elements: nextProps.league.items,
        dataSource: this.state.dataSource.cloneWithRows(nextProps.leagues.items)
      })
    }
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (<LeagueField league={rowData} action={() => this.props.onPress(rowData)}/>)}
        />
    );
  }
}

//onPress={() => this.rowPressed.bind(this, i)}
const LeagueField = ({league, action
}: {
    league: Object,
    action: Function,
}) => (
  <TouchableOpacity onPress={action} style={styles.LeagueItem}>
  <View>
    <Text> {league.name} </Text>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  LeagueItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
  }
})

export default LeagueList;
