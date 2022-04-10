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
  padding: 2rem;
  align-content: start;
  width: 100%;
`;

export const NoStreamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;P
  justify-content: center;
  width: 100%;
  margin-top: 15rem;
  & h1 {
    font-size: 2rem;
    font-weight: 300;
    color: gray;
  }
`;
