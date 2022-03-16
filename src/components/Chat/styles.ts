import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 94.5vh;
`;

export const TopChat = styled.div`
  padding: 1.5rem;
  box-shadow: inset 0px 4px 2px 0px #cfcfcf;
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  justify-content: center;
`;

export const ChatContainer = styled.div`
  height: 100%;
  padding: 1rem;
  overflow: scroll;
`;

export const InputContainer = styled.form`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;
