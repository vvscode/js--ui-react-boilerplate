import React, { Fragment } from 'react';
import { AppContainer } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Hello from '@/pages/Hello';
import Login from '@/pages/Login';
import Info from '@/pages/Info';
import ProtectedRoute from '@/components/ProtectedRoute';

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/hello" component={Hello} />
          <ProtectedRoute path="/info" component={Info} />
        </Fragment>
      </Router>
    </Provider>
  </AppContainer>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
