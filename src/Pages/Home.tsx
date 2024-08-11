import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Real-Time Collaborative Whiteboard</h1>
      <Link to="/whiteboard">Go to Whiteboard</Link>
    </div>
  );
};

export default Home;
