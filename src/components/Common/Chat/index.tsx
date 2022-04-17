import { useEffect, useRef, useState, useContext } from 'react';

// UI
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// components
import { MessageComponent } from 'components/Common/MessageComponent';

// router
import { useParams } from 'react-router-dom';

// styles
import { Container, TopChat, ChatContainer, InputContainer } from './styles';

// context
import { SocketContext } from 'context/SocketProvider';

// state
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { chatRoomMessages } from 'state/atoms/Chat';
import { profileState } from 'state/atoms/Profile';
import { isLoggedIn } from 'state/atoms/Auth';
import { authModalState } from 'state/atoms/AuthFormModal';

export const Chat = () => {
  const { socket } = useContext(SocketContext);
  const { username } = useParams();

  const chatScrollbar: any = useRef(null);

  // state
  const profile = useRecoilValue(profileState);
  const isLoggedState = useRecoilValue(isLoggedIn);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [roomMessages, setRoomMessages] = useRecoilState(chatRoomMessages);

  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isLoggedState) {
      if (message !== '') {
        const messageToSend = {
          username: profile.username,
          message,
          userColor: profile.chatStreamColor,
          room: username || '',
        };
        socket.emit('roomMessage', messageToSend);
        setMessage('');
      }
    } else {
      setAuthModalState(true);
    }
  };

  useEffect(() => {
    const offsetBottom =
      chatScrollbar.current.offsetTop + chatScrollbar.current.offsetHeight;
    chatScrollbar.current.scrollTo({ top: offsetBottom });
  }, [roomMessages]);

  // join to room
  useEffect(() => {
    socket.emit('joinRoom', username);
    return () => {
      setRoomMessages([]);
      socket.emit('leaveRoom', username);
    };
  }, []);

  return (
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
  );
};
