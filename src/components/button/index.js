import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

export function Button({title, onPress, ...rest}) {
  return (
    <TouchableOpacity
      style={[styles.container, styles]}
      activeOpacity={0.7}
      onPress={onPress}
      {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
export function SimpleButton({title, onPress, ...rest}) {
  return (
    <TouchableOpacity
      style={styles.simpleContainer}
      activeOpacity={0.7}
      onPress={onPress}
      {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
