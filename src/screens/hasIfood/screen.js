import React from 'react';
import {SafeAreaView, View, TouchableOpacity, StyleSheet} from 'react-native';

import {PaddingContainer} from '../../components/paddingContainer';
import {Button, SimpleButton} from '../../components/button';
import {InputForm} from '../../components/inputForm';
import {useContext} from './context';

import Icon from 'react-native-vector-icons/Ionicons';

const Screen = () => {
  const {handleSignin, control, handleSubmit, errors, goBack} = useContext();

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView>
      <PaddingContainer>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
            <Icon name={'arrow-back-outline'} color="#d62a52" size={35} />
          </TouchableOpacity>
        </View>

        <InputForm
          autoCapitalize="none"
          label="Nome"
          placeholder="Nome Completo"
          name="nome"
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
          placeholder="Ifood ID"
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

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 15,
  },
});

export default Screen;
