import React from 'react';
import {TextInput, Text} from 'react-native';
import {styles} from './styles';

export function Input({label, ...rest}) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#545050"
        color="#000"
        style={styles.textInput}
        {...rest}
      />
    </>
  );
}
