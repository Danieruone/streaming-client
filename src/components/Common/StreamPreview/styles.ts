import styled from '@emotion/styled';

export const Container = styled.div`
  height: 10rem;
  width: 20rem;
  margin: 1rem;
  margin-bottom: 5rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  & img {
    width: 100%;
  }
`;

export const DirectBadge = styled.span`
  position: absolute;
  background-color: #ef5b00;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 3px;
  border-radius: 5px;
  top: 5px;
  left: 5px;
`;

export const InfoContainer = styled.div`
  padding-top: 0.2rem;
  display: flex;
  align-items: center;
`;
