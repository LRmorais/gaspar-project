import React from 'react';
import {SafeAreaView} from 'react-native';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button, SimpleButton} from '../../components/button';
import {InputForm} from '../../components/inputForm';
import {useContext} from './context';

const Screen = () => {
  const {handleSignin, control, handleSubmit, errors} = useContext();

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView>
      <PaddingContainer>
        <InputForm
          autoCapitalize="none"
          label="Nome"
          placeholder="Nome Completo"
          name="email"
          keyboardType="default"
          control={control}
          //error={errors.nome && errors.nome.message}
        />
        <InputForm
          autoCapitalize="none"
          label="CPF"
          placeholder="CPF"
          name="cpf"
          keyboardType="number-pad"
          control={control}
          //error={errors.cpf && errors.cpf.message}
        />
        <InputForm
          autoCapitalize="none"
          label="ID"
          placeholder="Identidade"
          name="ID"
          keyboardType="number-pad"
          control={control}
         // error={errors.id && errors.id.message}
        />
        <InputForm
          autoCapitalize="none"
          label="Contato"
          placeholder="Número de telefone"
          name="contato"
          keyboardType="number-pad"
          control={control}
          //error={errors.contato && errors.contato.message}
        />
  
        <Button title="Cadastrar" onPress={handleSubmit(handleSignin)} />
      
      </PaddingContainer>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

export default Screen;