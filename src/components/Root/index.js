import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from '@/redux/createStore';
import HelloRoute from '@/components/HelloRoute';
import LoginRoute from '@/components/LoginRoute';
import ProtectedRoute from '@/components/ProtectedRoute';

const store = createStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/login" component={LoginRoute} />
          <ProtectedRoute path="/hello" component={HelloRoute} />
        </div>
      </Router>
    </Provider>
  </AppContainer>
);

export default Root;
