import React, { Fragment } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from '@/redux/createStore';
import HelloPage from '@/pages/HelloPage';
import LoginPage from '@/pages/LoginPage';
import InfoPage from '@/pages/InfoPage';
import ProtectedRoute from '@/components/ProtectedRoute';

const store = createStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/hello" component={HelloPage} />
          <ProtectedRoute path="/info" component={InfoPage} />
        </Fragment>
      </Router>
    </Provider>
  </AppContainer>
);

export default Root;
