import React from 'react';
import {AppProvider} from './hooks';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/app.routes';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
