import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from '@/redux/createStore';
import HelloPage from '@/pages/HelloPage';
import LoginPage from '@/pages/LoginPage';
import ProtectedRoute from '@/components/ProtectedRoute';

const store = createStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/hello" component={HelloPage} />
        </div>
      </Router>
    </Provider>
  </AppContainer>
);

export default Root;
