import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {PaddingContainer} from '../../components/paddingContainer';
import {Button} from '../../components/button';
import {useContext} from './context';
import {theme} from '../../utils/style';

const Screen = () => {
  const {goToNextScreen} = useContext();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <PaddingContainer>
        <View style={styles.container}>
          <Text style={styles.askText}>Possui cadastro no Ifood?</Text>
          <Button title="Sim"  onPress={() => navigation.navigate('Cadastro2')} />
          <Button title="Não"  onPress={() => navigation.navigate('Cadastro4')} />
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
