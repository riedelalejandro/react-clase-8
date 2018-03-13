import React from 'react'
import PropTypes from 'prop-types'

const AuthButton = ({ isAuthenticated, onSignedOut }) => (
  isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={onSignedOut}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

AuthButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onSignedOut: PropTypes.func.isRequired,
};

export default AuthButton
