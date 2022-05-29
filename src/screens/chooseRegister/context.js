import React, {createContext, useContext as useReactContext} from 'react';
import {useNavigation} from '@react-navigation/native';

const Context = createContext();
export const useContext = () => useReactContext(Context);

const Provider = props => {
  const navigation = useNavigation();

  function goToNextScreen(type) {
    type === 'hasIfood'
      ? navigation.navigate('HasIfood')
      : navigation.navigate('NoIfood');
  }
  const value = {
    goToNextScreen,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
