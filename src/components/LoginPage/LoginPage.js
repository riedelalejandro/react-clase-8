import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { authenticate, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={authenticate}>Log in</button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default LoginPage