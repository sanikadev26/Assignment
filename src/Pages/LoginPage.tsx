import React from 'react';
import keycloak from '../services/keycloak';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => keycloak.login()}>Login with Keycloak</button>
    </div>
  );
};

export default LoginPage;
