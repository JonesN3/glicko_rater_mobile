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

  render() {
    console.log("THIS.PROPS.LEAGUES", this.props.leagues)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    if(!this.props.leagues.isFetching && this.props.leagues.items.length > 0 ) {
      console.log("Leages loaded and ready");
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (<LeagueField league={rowData}/>)}
        />
    );
  }
}

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
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'white',
  }
})

export default LeagueList;
