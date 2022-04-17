import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
`;

export const StreamingContainer = styled.div`
  display: grid;
  width: 100%;
  height: 90vh;
  grid-template-columns: 80% 20%;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  & div {
    width: 200px;
  }
  & img {
    width: 100%;
  }
  & h1 {
    font-weight: 300;
  }
`;
