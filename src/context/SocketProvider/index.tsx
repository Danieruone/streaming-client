import { createContext, FC } from 'react';

// hooks
import { useSocket } from 'hooks/useSocket';

interface Props {
  children?: JSX.Element;
}

interface SocketContext {
  socket: any;
  online: boolean;
}

const defaultState = { socket: null, online: false };
export const SocketContext = createContext<SocketContext>(defaultState);

export const SocketProvider: FC<Props> = ({ children }) => {
  const socket_url = import.meta.env.VITE_SOCKET_SERVER?.toString() || '';
  const { socket, online } = useSocket(socket_url);
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
