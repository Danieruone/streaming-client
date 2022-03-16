import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  background-color: #efeff1;
  height: 100vh;
  box-shadow: inset 0px 4px 2px 0px #cfcfcf;
`;

export const ExpandField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & span {
    width: 180px;
  }
`;
