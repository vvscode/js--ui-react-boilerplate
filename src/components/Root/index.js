import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import createStore from '@/redux/createStore';
import Hello from '@/components/Hello';

const store = createStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <Hello />
    </Provider>
  </AppContainer>
);

export default Root;
