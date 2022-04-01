import { useContext, useEffect, useState } from 'react';

// components
import { Navbar } from 'components/Common/Navbar';
import { LeftBar } from 'components/Common/LeftBar';
import { StreamPreview } from 'components/Common/StreamPreview';
import { SkeletonStreamPreview } from 'components/Common/SkeletonStreamPreview';

// styles
import { Container, StreamsContainer } from './styles';

// context
import { SocketContext } from 'context/SocketProvider';

interface User {
  name: string;
  image: string;
}

export interface streamObject {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
  user: User;
}

export const OnlineStreams = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [streamsArray, setStreamsArray] = useState<streamObject[] | []>([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    setIsLoading(true);
    socket.on('streams', (streams: streamObject[]) => {
      console.log('array streams: ', streams);
      setStreamsArray(streams);
      setIsLoading(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('add-stream', (stream: streamObject) => {
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

  return (
    <div>
      <div style={{ height: '3rem', boxShadow: '#6c6666 -1px 1px 4px 1px' }}>
        <Navbar />
      </div>
      <Container>
        <div>
          <LeftBar />
        </div>
        <StreamsContainer>
          {isLoading ? (
            <>
              <SkeletonStreamPreview />
              <SkeletonStreamPreview />
              <SkeletonStreamPreview />
              <SkeletonStreamPreview />
              <SkeletonStreamPreview />
              <SkeletonStreamPreview />
              <SkeletonStreamPreview />
            </>
          ) : (
            <>
              {streamsArray.map((stream) => (
                <StreamPreview key={stream.id} {...stream} />
              ))}
            </>
          )}
        </StreamsContainer>
      </Container>
    </div>
  );
};
