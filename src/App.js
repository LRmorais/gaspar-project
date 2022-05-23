import React from 'react';
import Screens from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/signin';

function HomeScreen() {
  return (
    <Screens.SignIn />
  );
}

function HasIfood(){
  return (
    <Screens.HasIfood />
  )
}

function NoIfood(){
  return (
    <Screens.NoIfood />
  )
}

function ChooseRegister(){
  return (
    <Screens.ChooseRegister />
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator name="Home" component={HomeScreen}>
            <Stack.Screen name="Login" component={HomeScreen} />
            <Stack.Screen name="Cadastro" component={SignIn} />
            <Stack.Screen name="Cadastro2" component={HasIfood} />
            <Stack.Screen name="Cadastro3" component={ChooseRegister} />
            <Stack.Screen name="Cadastro4" component={NoIfood} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
