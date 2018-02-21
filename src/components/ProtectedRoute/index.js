import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const ProtectedRoute = ({ authorized, component: Component, ...rest }) => {
  const renderOrRedirect = props =>
    authorized ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    );

  renderOrRedirect.propTypes = {
    location: PropTypes.isRequired,
  };

  return <Route {...rest} render={renderOrRedirect} />;
};

ProtectedRoute.propTypes = {
  authorized: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { authorized } }) => ({
  authorized,
});

// https://stackoverflow.com/questions/43520498/react-router-private-routes-redirect-not-working
export default withRouter(connect(mapStateToProps)(ProtectedRoute));
