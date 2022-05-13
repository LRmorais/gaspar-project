import {StyleSheet} from 'react-native';

export const theme = {
  colors: {
    primary: {
      main: '#d62a52',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      main: '#545050',
    },
    blackText: '#000000',
    error: '#ccbe26',
  },
  spacing: unit => unit * 8,
};

export default param =>
  StyleSheet.create(typeof param === 'function' ? param(theme) : param);
