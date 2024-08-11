import React from 'react';
import Whiteboard from '../components/Whiteboard';
import Toolbar from '../components/Toolbar';
import Chat from '../components/Chat';

const WhiteboardPage: React.FC = () => {
  return (
    <div className="whiteboard-page">
      <Toolbar />
      <Whiteboard />
      <Chat />
    </div>
  );
};

export default WhiteboardPage;
