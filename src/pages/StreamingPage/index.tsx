// components
import { LeftBar } from 'components/Common/LeftBar';
import { Navbar } from 'components/Common/Navbar';
import { VideoStream } from 'components/Common/VideoStream';
import { Chat } from 'components/Common/Chat';
import { ProfileDescription } from 'components/Common/ProfileDescription';

// styles
import { Container, StreamingContainer } from './styles';

import { useParams } from 'react-router-dom';

export const StreamingPage = () => {
  // todo: get streaming info from username
  const { username } = useParams();

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
            <VideoStream url={''} />
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
