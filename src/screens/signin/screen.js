import React from 'react';
import {SafeAreaView} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {PaddingContainer} from '../../components/paddingContainer';
import {Button, SimpleButton} from '../../components/button';
import {InputForm} from '../../components/inputForm';
import {useContext} from './context';

const Screen = () => {
  const {handleSignin, control, handleSubmit, errors} = useContext();
  const navigation = useNavigation();

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView>
      <PaddingContainer>
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
          onPress={() => navigation.navigate('Cadastro3')}
        />
      </PaddingContainer>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default Screen;
