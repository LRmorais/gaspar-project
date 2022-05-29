import React, {createContext, useContext as useReactContext} from 'react';
import {useNavigation} from '@react-navigation/native';

const Context = createContext();
export const useContext = () => useReactContext(Context);

const Provider = props => {
  const {navigate, goBack} = useNavigation();

  function goToNextScreen(type) {
    type === 'hasIfood' ? navigate('HasIfood') : navigate('NoIfood');
  }

  const value = {
    goToNextScreen,
    goBack,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
