// components
import { LeftBar } from 'components/LeftBar';
import { Navbar } from 'components/Navbar';
import { VideoStream } from 'components/VideoStream';
import { Chat } from 'components/Chat';
import { ProfileDescription } from 'components/ProfileDescription';

// styles
import { Container, StreamingContainer } from './styles';

export const StreamingPage = () => {
  return (
    <div>
      <div style={{ height: '3rem' }}>
        <Navbar />
      </div>
      <Container>
        <div>
          <LeftBar />
        </div>
        <StreamingContainer>
          <div style={{ overflowY: 'scroll', height: '100vh' }}>
            <VideoStream />
            <ProfileDescription />
          </div>
          <div>
            <Chat />
          </div>
        </StreamingContainer>
      </Container>
    </div>
  );
};
