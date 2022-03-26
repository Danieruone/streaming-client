// router
import { useParams } from 'react-router-dom';

// components
import { LeftBar } from 'components/Common/LeftBar';
import { Navbar } from 'components/Common/Navbar';
import { VideoStream } from 'components/Common/VideoStream';
import { Chat } from 'components/Common/Chat';
import { ProfileDescription } from 'components/Common/ProfileDescription';

// styles
import { Container, StreamingContainer } from './styles';

export const StreamingPage = () => {
  const { userId } = useParams();

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
            <VideoStream
              url={
                'http://159.203.189.250/live/daru/index.m3u8'
                // 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8'
              }
            />
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
