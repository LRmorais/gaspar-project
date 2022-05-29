import React, {createContext, useContext as useReactContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';

import {useAuth} from '../../hooks/auth';

const Context = createContext();
export const useContext = () => useReactContext(Context);

const schema = yup.object().shape({
  email: yup.string().required('Email é obrigatorio'),
  password: yup.string().required('Senha é obrigatoria'),
});

const Provider = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {signIn} = useAuth();

  async function handleSignin({email, password}) {
    await schema.validate({email, password});

    await signIn({email, password});
  }
  const value = {
    handleSubmit,
    handleSignin,
    control,
    errors,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
