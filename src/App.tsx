import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import WhiteboardPage from './Pages/WhiteboardPage';
import LoginPage from './Pages/LoginPage';
import keycloak from './services/keycloak';

const App: React.FC = () => {
  React.useEffect(() => {
    keycloak.init({ onLoad: 'login-required' });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whiteboard" element={<WhiteboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
