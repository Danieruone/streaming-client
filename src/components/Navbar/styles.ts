import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NavOptions = styled.div`
  display: flex;
  * {
    margin: 0px 20px 0px 20px;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  width: 30px;
  margin-right: 1rem;
  & img {
    width: 100%;
  }
`;
