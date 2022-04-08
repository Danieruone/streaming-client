import { useState } from 'react';

// components
import { Navbar } from 'components/Common/Navbar';
import { LeftBar } from 'components/Common/LeftBar';
import { StreamPreview } from 'components/Common/StreamPreview';
import { SkeletonStreamPreview } from 'components/Common/SkeletonStreamPreview';

// styles
import { Container, StreamsContainer } from './styles';

// state
import { useRecoilValue } from 'recoil';
import { streamsState, isFetchingStreams } from 'state/atoms/Streams';

export const OnlineStreams = () => {
  const streamsArray = useRecoilValue(streamsState);
  const isLoading = useRecoilValue(isFetchingStreams);

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
