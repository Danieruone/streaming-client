import { Container, StreamingContainer } from './styles';

// components
import { LeftBar } from '../../components/LeftBar';
import { Navbar } from '../../components/Navbar';
import { VideoStream } from '../../components/VideoStream';
import { Chat } from '../../components/Chat';

export const StreamingPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Container>
        <div>
          <LeftBar />
        </div>
        <StreamingContainer>
          <div>
            <VideoStream />
          </div>
          <div>
            <Chat />
          </div>
        </StreamingContainer>
      </Container>
    </div>
  );
};
