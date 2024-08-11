import React, { useState } from 'react';
import { useWebSocket } from '../services/webSocketService';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, messages } = useWebSocket();

  const handleSend = () => {
    sendMessage({ type: 'chat', content: message });
    setMessage('');
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg.content}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
