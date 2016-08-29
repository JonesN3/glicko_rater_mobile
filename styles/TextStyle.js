import {StyleSheet, Platform} from 'react-native';


const font = getPlatformFont(Platform.OS);

function getPlatformFont(OS) {
  if (OS === 'android') {
    return 'sans-serif';
  } else if(OS === 'ios') {
    return 'helvetica'
  } else {
    throw new Error("No font for this platform: " + OS);
  }
}

export const TextStyle = StyleSheet.create({
  normal: {
    fontSize: 14,
    fontFamily: font,
  },
  small: {
    fontSize: 12,
    fontFamily: font,
  },
  large :{
    fontSize: 18,
    fontFamily: font,
  },
  font: {
    fontFamily: font,
  },
});

export default TextStyle;
