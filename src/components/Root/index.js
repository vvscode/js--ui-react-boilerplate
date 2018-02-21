import React, { Fragment } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from '@/redux/createStore';
import Hello from '@/pages/Hello';
import Login from '@/pages/Login';
import ProtectedRoute from '@/components/ProtectedRoute';

const store = createStore();

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/hello" component={Hello} />
        </Fragment>
      </Router>
    </Provider>
  </AppContainer>
);

export default Root;
