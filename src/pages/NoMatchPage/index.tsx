import NotFound from 'assets/icons/404.png';

import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  & div {
    width: 500px;
  }
  & img {
    width: 100%;
  }
  & h1 {
    font-weight: 300;
  }
`;

export const NoMatchPage = () => {
  return (
    <Container>
      <div>
        <img src={NotFound} />
      </div>
      <h1>Page not found ¿Are you lost?</h1>
    </Container>
  );
};
