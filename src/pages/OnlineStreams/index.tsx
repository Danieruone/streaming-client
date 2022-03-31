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

export const OnlineStreams = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [streamsArray, setStreamsArray] = useState([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    setIsLoading(true);
    socket.on('streams', (streams: any) => {
      console.log('array streams: ', streams);
      setStreamsArray(streams);
      setIsLoading(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('add-stream', (stream: never) => {
      console.log('new stream: ', stream);
      setStreamsArray((prev) => [...prev, stream]);
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
              {streamsArray.map((stream, key) => (
                <StreamPreview key={key} />
              ))}
            </>
          )}
        </StreamsContainer>
      </Container>
    </div>
  );
};
