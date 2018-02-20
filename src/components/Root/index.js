import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from '@/redux/createStore';
import LoginRoute from '@/components/LoginRoute';

const store = createStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <Route path="/login" component={LoginRoute} />
      </Router>
    </Provider>
  </AppContainer>
);

export default Root;
