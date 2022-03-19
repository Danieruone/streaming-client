import { useEffect, useRef, useState } from 'react';

// UI
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// components
import { MessageComponent } from 'components/MessageComponent';
import { LoginForm } from 'components/LoginForm';
import { ModalComponent } from 'components/ModalComponent';

// styles
import { Container, TopChat, ChatContainer, InputContainer } from './styles';

// state
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatRoomMessages } from 'state/atoms/Chat';
import { profileState } from 'state/atoms/Profile';
import { isLoggedIn } from 'state/atoms/Auth';

export const Chat = () => {
  const chatScrollbar: any = useRef(null);

  // state
  const profile = useRecoilValue(profileState);
  const isLoggedState = useRecoilValue(isLoggedIn);
  const [roomMessages, setRoomMessages] = useRecoilState(chatRoomMessages);
  const [message, setMessage] = useState('');

  // modal
  const [loginModalState, setLoginModalState] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isLoggedState) {
      if (message !== '') {
        setRoomMessages([
          ...roomMessages,
          { name: profile.name, message, userColor: profile.chatStreamColor },
        ]);
        setMessage('');
      }
    } else {
      setLoginModalState(true);
    }
  };

  useEffect(() => {
    const offsetBottom =
      chatScrollbar.current.offsetTop + chatScrollbar.current.offsetHeight;
    chatScrollbar.current.scrollTo({ top: offsetBottom });
  }, [roomMessages]);

  return (
    <>
      <Container>
        <TopChat>
          <Typography style={{ fontSize: '.8rem' }} variant='h6'>
            CHAT DEL STREAM
          </Typography>
        </TopChat>
        <ChatContainer ref={chatScrollbar}>
          {roomMessages?.length === 0 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3rem',
              }}
            >
              <span>Sé el primero en enviar un mensaje</span>
            </div>
          )}

          {roomMessages.map((msg, idx) => (
            <MessageComponent {...msg} key={idx} />
          ))}
        </ChatContainer>
        <InputContainer onSubmit={(e) => handleSubmit(e)}>
          <TextField
            value={message}
            label='Type your message'
            variant='standard'
            color='warning'
            autoComplete='off'
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant='outlined'
            color='warning'
            endIcon={<SendIcon />}
            type='submit'
          >
            Send
          </Button>
        </InputContainer>
      </Container>

      <ModalComponent
        isOpen={loginModalState}
        setIsOpen={() => setLoginModalState(false)}
      >
        <LoginForm />
      </ModalComponent>
    </>
  );
};
