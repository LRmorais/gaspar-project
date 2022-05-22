import React from 'react';
import Screens from './screens';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';


const App = () => {
  return (
    <>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </>
  );
};

export default App;
