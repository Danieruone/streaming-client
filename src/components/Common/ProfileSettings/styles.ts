import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const EditIconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
  background-color: rgba(1, 1, 1, 0.5);
  padding: 2px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
`;
