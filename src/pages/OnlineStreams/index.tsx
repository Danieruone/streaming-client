import { useState } from 'react';

// components
import { Navbar } from 'components/Common/Navbar';
import { LeftBar } from 'components/Common/LeftBar';
import { StreamPreview } from 'components/Common/StreamPreview';
import { SkeletonStreamPreview } from 'components/Common/SkeletonStreamPreview';

// styles
import { Container, StreamsContainer } from './styles';

export const OnlineStreams = () => {
  const [isLoading, setIsLoading] = useState(false);

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
              <StreamPreview />
              <StreamPreview />
              <StreamPreview />
              <StreamPreview />
              <StreamPreview />
              <StreamPreview />
              <StreamPreview />
            </>
          )}
        </StreamsContainer>
      </Container>
    </div>
  );
};
