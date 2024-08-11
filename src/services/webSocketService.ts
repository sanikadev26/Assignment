import { useEffect, useState, useRef } from 'react';

export const useWebSocket = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:8080');
    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    return () => {
      socket.current?.close();
    };
  }, []);

  const sendMessage = (message: any) => {
    socket.current?.send(JSON.stringify(message));
  };

  return { sendMessage, receiveMessage: setMessages, messages };
};
