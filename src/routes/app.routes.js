import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screens from '../screens';

const AppStack = createNativeStackNavigator();

const navOptionsHandler = () => ({
  headerShown: false,
});

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="Signin">
    <AppStack.Screen
      name="Signin"
      component={Screens.SignIn}
      options={navOptionsHandler}
    />
    <AppStack.Screen
      name="ChooseRegister"
      component={Screens.ChooseRegister}
      options={navOptionsHandler}
    />
    <AppStack.Screen
      name="HasIfood"
      component={Screens.HasIfood}
      options={navOptionsHandler}
    />
    <AppStack.Screen
      name="NoIfood"
      component={Screens.NoIfood}
      options={navOptionsHandler}
    />
    <AppStack.Screen
      name="Home"
      component={Screens.Home}
      options={navOptionsHandler}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
