// src/context/AuthContext.tsx
import React, { createContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak('/keycloak.json');

interface AuthContextValue {
  keycloak: Keycloak;
  authenticated: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((auth) => {
      setAuthenticated(auth);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};