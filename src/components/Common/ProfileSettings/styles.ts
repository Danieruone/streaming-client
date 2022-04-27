import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const EditIconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
  background-color: #c6c6c6;
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
