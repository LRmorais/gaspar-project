import React, {createContext, useContext as useReactContext} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';

const Context = createContext();
export const useContext = () => useReactContext(Context);

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  id: yup.string().required('Identidade é obrigatória'),
  contato: yup.string().required('Contato é obrigatório'),
});

const Provider = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {navigate, goBack} = useNavigation();

  function handleSignin(form) {
    console.log(form);
  }
  const value = {
    handleSubmit,
    handleSignin,
    control,
    errors,
    goBack,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
