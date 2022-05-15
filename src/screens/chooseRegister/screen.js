import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button} from '../../components/button';
import {useContext} from './context';
import {theme} from '../../utils/style';

const Screen = () => {
  const {goToNextScreen} = useContext();

  return (
    <SafeAreaView>
      <PaddingContainer>
        <View style={styles.container}>
          <Text style={styles.askText}>Possui cadastro no Ifood?</Text>
          <Button title="Sim" onPress={goToNextScreen} />
          <Button title="Não" onPress={goToNextScreen} />
        </View>
      </PaddingContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  askText: {
    fontSize: theme.spacing(3),
    marginVertical: theme.spacing(3),
    color: theme.colors.secondary.main,
    textAlign: 'center',
  },
});

export default Screen;
