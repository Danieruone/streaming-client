import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 82vh;
  background-color: black;
  position: relative;
  & video {
    width: 100%;
    height: 100%;
  }
`;

export const OfflineBox = styled.div`
  width: 30rem;
  height: 85%;
  position: absolute;
  right: 0;
  background-color: rgba(189, 189, 189, 0.1);
  color: white;
  padding: 2rem;
  padding-top: 5rem;
  z-index: 2;
`;
