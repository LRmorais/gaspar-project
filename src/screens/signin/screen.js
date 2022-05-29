import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

// <<<<<<< feature/signup
// import { useNavigation } from '@react-navigation/native';
// import {PaddingContainer} from '../../components/paddingContainer';
// import {Button, SimpleButton} from '../../components/button';
// import {InputForm} from '../../components/inputForm';
// import {useContext} from './context';

// const Screen = () => {
//   const {handleSignin, control, handleSubmit, errors} = useContext();
//   const navigation = useNavigation();
// =======
import { PaddingContainer } from '../../components/paddingContainer';
import { Button, SimpleButton } from '../../components/button';
import { InputForm } from '../../components/inputForm';
import { useContext } from './context';

const Screen = () => {
  const { handleSignin, control, handleSubmit, errors } = useContext();

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView style={{ flex: 1 }}>
      <PaddingContainer>
// <<<<<<< feature/signup
//         <InputForm
//           autoCapitalize="none"
//           label="Email"
//           placeholder="Seu Email"
//           name="email"
//           keyboardType="email-address"
//           control={control}
//           error={errors.email && errors.email.message}
//         />
//         <InputForm
//           label="Senha"
//           placeholder="Sua Senha"
//           name="password"
//           control={control}
//           secureTextEntry={true}
//           error={errors.password && errors.password.message}
//         />
//         <Button title="Entrar" onPress={handleSubmit(handleSignin)} />
//         <SimpleButton
//           title="Criar Conta"
//           onPress={() => navigation.navigate('Cadastro3')}
//         />
        <View
          style={{
            flexDirection: 'column',
            // justifyContent: 'center',
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
            onPress={handleSubmit(handleSignin)}
          />
        </View>
      </PaddingContainer>
    </ScrollView>
    // </TouchableWithoutFeedback>
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
