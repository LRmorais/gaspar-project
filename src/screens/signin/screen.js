import React from 'react';
import {SafeAreaView} from 'react-native';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button} from '../../components/button';
import {Input} from '../../components/input';
import {useContext} from './context';

const Screen = () => {
  const {SignIn} = useContext();

  return (
    <SafeAreaView>
      <PaddingContainer>
        <Input label="Login" placeholder="Seu Email" />
        <Input label="Senha" placeholder="Sua Senha" />
        <Button
          title="Entrar"
          onPress={() => {
            SignIn('testess');
          }}
        />
      </PaddingContainer>
    </SafeAreaView>
  );
};

export default Screen;
