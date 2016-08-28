
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { TextStyle } from '../styles/TextStyle';
import Colors from '../styles/Colors';

const Header = ({text, link1, text1, link2, text2}: {
  text: string,
  link1?: any,
  text1?: string,
  link2?: any,
  text2?: string,
}) => (
  <View style={styles.bar}>
      <View style={styles.left}>
        <PageLink text={text1} pageLink={link1}/>
      </View>
        <Text style={[TextStyle.normal, styles.title]}>
          {text}
        </Text>
      <View style={styles.right}>
        <PageLink text={text2} pageLink={link2} />
      </View>
  </View>
);

/* Generic page link which takes in action for navigating to a page */
const PageLink = ({pageLink, text}) => (
  <TouchableOpacity onPress={pageLink} style={{height:100, justifyContent:'center'}}>
  <Text onPress={pageLink} style={[TextStyle.normal, {color: Colors.primaryColorText}]}>
    {text}
  </Text>
  </TouchableOpacity>
);

/* styles */
const styles = StyleSheet.create({
  bar: {
    height: 48,
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: Colors.primaryColorText,
    fontSize: 16,
  },
});
export default Header;
