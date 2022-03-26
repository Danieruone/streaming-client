// components
import { Navbar } from 'components/Common/Navbar';
import { LeftBar } from 'components/Common/LeftBar';
import { StreamPreview } from 'components/Common/StreamPreview';

// styles
import { Container, StreamsContainer } from './styles';

export const OnlineStreams = () => {
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
          <StreamPreview />
          <StreamPreview />
          <StreamPreview />
          <StreamPreview />
          <StreamPreview />
          <StreamPreview />
          <StreamPreview />
        </StreamsContainer>
      </Container>
    </div>
  );
};
