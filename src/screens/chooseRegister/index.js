import React from 'react';

import Provider from './context';
import Screen from './screen';

const ChooseRegister = props => (
  <Provider {...props}>
    <Screen />
  </Provider>
);

export default ChooseRegister;
