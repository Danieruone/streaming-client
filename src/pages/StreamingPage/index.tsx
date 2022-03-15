import { Container, StreamingContainer } from './styles';

// components
import { LeftBar } from '../../components/LeftBar';
import { Navbar } from '../../components/Navbar';
import { VideoStream } from '../../components/VideoStream';
import { Chat } from '../../components/Chat';
import { ProfileDescription } from '../../components/ProfileDescription';

export const StreamingPage = () => {
  return (
    <div>
      <div style={{ height: '3.5rem' }}>
        <Navbar />
      </div>
      <Container>
        <div>
          <LeftBar />
        </div>
        <StreamingContainer>
          <div style={{ overflowX: 'auto', height: '100vh' }}>
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
