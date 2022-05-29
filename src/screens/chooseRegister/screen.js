import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button} from '../../components/button';
import {useContext} from './context';
import {theme} from '../../utils/style';

import Icon from 'react-native-vector-icons/Ionicons';

const Screen = () => {
  const {goToNextScreen, goBack} = useContext();

  return (
    <SafeAreaView>
      <PaddingContainer>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
            <Icon name={'arrow-back-outline'} color="#d62a52" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.askText}>Possui cadastro no Ifood?</Text>
          <Button title="Sim" onPress={() => goToNextScreen('hasIfood')} />
          <Button title="Não" onPress={() => goToNextScreen('NoIfood')} />
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
  backButton: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
});

export default Screen;
