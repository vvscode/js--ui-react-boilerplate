import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

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

export default connect(mapStateToProps)(ProtectedRoute);
