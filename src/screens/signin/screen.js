import React from 'react';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';

import { PaddingContainer } from '../../components/paddingContainer';
import { Button, SimpleButton } from '../../components/button';
import { InputForm } from '../../components/inputForm';
import { useContext } from './context';

const Screen = () => {
  const { handleSignin, control, handleSubmit, errors } = useContext();

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView>
      <PaddingContainer>
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
          onPress={handleSubmit(handleSignin)}
        />
      </PaddingContainer>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 350,
    height: 350,
  },
});

export default Screen;
