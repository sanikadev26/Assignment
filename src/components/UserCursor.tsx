// src/components/UserCursor.tsx
import React from 'react';

interface UserCursorProps {
  x: number;
  y: number;
  color: string;
}

const UserCursor: React.FC<UserCursorProps> = ({ x, y, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        backgroundColor: color,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
      }}
    />
  );
};

export default UserCursor;
