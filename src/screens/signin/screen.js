import React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useContext} from './context';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button, SimpleButton} from '../../components/button';
import {InputForm} from '../../components/inputForm';

const Screen = () => {
  const {handleSignin, control, handleSubmit, errors, loading} = useContext();
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#231F1E'}}>
      <PaddingContainer>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#d62a52" />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              alignContent: 'space-between',
              height: '100%',
              width: '100%',
            }}>
            <View style={styles.containerImage}>
              <Image
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
              />
            </View>

            <InputForm
              autoCapitalize="none"
              label="Email"
              placeholder="Seu Email"
              name="email"
              keyboardType="email-address"
              control={control}
              error={errors.email && errors.email.message}
            />
            <InputForm
              label="Senha"
              placeholder="Sua Senha"
              name="password"
              control={control}
              secureTextEntry={true}
              error={errors.password && errors.password.message}
            />
            <Button title="Entrar" onPress={handleSubmit(handleSignin)} />
            <SimpleButton
              title="Criar Conta"
              onPress={() => navigation.navigate('ChooseRegister')}
            />
          </View>
        )}
      </PaddingContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  logo: {
    resizeMode: 'contain',
    width: 350,
    height: 250,
  },
  loading: {
    marginTop: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen;
