import ReactPlayer from 'react-player';

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
      <ReactPlayer
        controls
        width='100%'
        height='100%'
        // url='https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8'
      />
    </Container>
  );
};
