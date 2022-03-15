// styles
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

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
      <ReactPlayer
        controls
        width='100%'
        height='100%'
        url='http://167.99.227.213:3000/hls/test2.m3u8'
      />
    </Container>
  );
};
