import { useEffect, useState, useContext, FC } from 'react';

// context
import { SocketContext } from 'context/SocketProvider';

// types
import { StreamObject } from 'interfaces/StreeamObject';

// state
import { useSetRecoilState } from 'recoil';
import { streamsState } from 'state/atoms/Streams';

interface Props {
  children: any;
}

export const StreamsHandler: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const setStreamsArray = useSetRecoilState(streamsState);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    setIsLoading(true);
    socket.on('streams', (streams: StreamObject[]) => {
      console.log('array streams: ', streams);
      setStreamsArray(streams);
      setIsLoading(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('add-stream', (stream: StreamObject) => {
      console.log('new stream: ', stream);
      setStreamsArray((prev) => [...prev, stream]);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('remove-stream', (stream_id: string) => {
      console.log('deleted stream: ', stream_id);
      setStreamsArray((prev) =>
        prev.filter((oldStream) => stream_id !== oldStream.id)
      );
    });
  }, [socket]);

  return <div>{children}</div>;
};
