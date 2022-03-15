// styles
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 82vh;
  background-color: black;
  & video {
    width: 100%;
    height: 100%;
  }
`;

export const VideoStream = () => {
  return (
    <Container>
      <video
        autoPlay
        controls
        x-webkit-airplay='true'
        x5-video-player-fullscreen='true'
        preload='auto'
        webkit-playsinline
        x5-video-player-typ='h5'
      >
        <source
          src='http://167.99.227.213:3000/hls/test.m3u8'
          type='application/x-mpegURL'
        />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};
