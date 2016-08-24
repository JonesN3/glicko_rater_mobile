import { TouchableHighlight, View, Text } from 'react-native';
import React from 'react';
import TextStyle from '../styles/TextStyle';

export const StandardButton = ({text, onPress}: {
  text: string,
  onPress?: () => void,
}) => (
  <TouchableHighlight underlayColor='white' onPress={onPress}
    style={{ marginBottom: 20, justifyContent: 'center',
    backgroundColor: '#F2F2F2', elevation: 2, width: 200, height: 40}}>
    <View>
      <Text style={[TextStyle.normal,{
          color: 'gray', textAlign: 'center'}]}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

export const OutlineButton = ({text, onPress}: {
  text: string,
  onPress?: () => void,
}) => (
  <TouchableHighlight underlayColor='white' style={{
                marginBottom: 20,
                justifyContent: 'center',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'gray',
                borderStyle: 'solid',
                width: 200,
                height: 40 }} onPress={onPress}>
  <View>
  <Text style={[TextStyle.normal, {
                color: 'gray',
                textAlign: 'center',
              }]}>
    {text}
  </Text>
  </View>
  </TouchableHighlight>
);
