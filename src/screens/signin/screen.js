import React from 'react';
import {ScrollView, Image, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useContext} from './context';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button, SimpleButton} from '../../components/button';
import {InputForm} from '../../components/inputForm';

const Screen = () => {
  const {handleSignin, control, handleSubmit, errors} = useContext();
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#231F1E'}}>
      <PaddingContainer>
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
});

export default Screen;
