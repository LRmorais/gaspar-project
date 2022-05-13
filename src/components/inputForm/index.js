import React from 'react';
import {TextInput, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {styles} from './styles';

export function InputForm({label, control, name, error, ...rest}) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            placeholderTextColor="#545050"
            style={styles.textInput}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}
