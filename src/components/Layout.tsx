import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Collaborative Whiteboard</a>
        <button className="btn btn-outline-success">Login</button>
      </nav>
      
      {/* Main Content Area */}
      <div className="row mt-3">
        <div className="col-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;