import React from 'react';
import Screens from './screens';
import { AppProvider } from './hooks';

const App = () => {
  return (
    <>
      <AppProvider>
        <Screens.SignIn />
      </AppProvider>
    </>
  );
};

export default App;
