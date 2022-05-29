import React, {createContext, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {api} from '../services/api';
const AuthContext = createContext({});

function AuthProvider({children}) {
  const {navigate} = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function signIn({email, password}) {
    setLoading(true);
    try {
      const response = await api.post('/signin', {
        email,
        password,
      });

      setData(response.data);
      setLoading(false);
      navigate('Home');
    } catch (error) {
      setLoading(false);
      Alert.alert('Ooops! Erro na requisição!');
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
