import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState([]);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/signin', {
        email,
        password,
      });

      setData(response.data);
    } catch (error) {
      Alert.alert('Ooops! Erro na requisição!');
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
