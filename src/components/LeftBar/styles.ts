// styles
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: #efeff1;
  height: 100vh;
`;

export const ExpandField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & span {
    width: 180px;
  }
`;
