import { useMemo, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (serverPath: string) => {
  const socket = useMemo(() => {
    return io(serverPath, {
      transports: ['websocket'],
    });
  }, [serverPath]);

  const [online, setOnline] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('client connected');
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};
