// components
import { Navbar } from 'components/Common/Navbar';
import { LeftBar } from 'components/Common/LeftBar';
import { StreamPreview } from 'components/Common/StreamPreview';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
`;

export const StreamsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  align-content: start;
  width: 100%;
`;

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
