import { useEffect, useRef, useState } from 'react';

// UI
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// components
import { MessageComponent } from 'components/MessageComponent';

// styles
import { Container, TopChat, ChatContainer, InputContainer } from './styles';

// state
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatRoomMessages } from 'state/atoms/Chat';
import { profileState } from 'state/atoms/Profile';

export const Chat = () => {
  const chatScrollbar: any = useRef(null);

  const profile = useRecoilValue(profileState);
  const [roomMessages, setRoomMessages] = useRecoilState(chatRoomMessages);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message !== '') {
      setRoomMessages([
        ...roomMessages,
        { name: profile.name, message, userColor: profile.chatStreamColor },
      ]);
      setMessage('');
    }
  };

  useEffect(() => {
    const offsetBottom =
      chatScrollbar.current.offsetTop + chatScrollbar.current.offsetHeight;
    chatScrollbar.current.scrollTo({ top: offsetBottom });
  }, [roomMessages]);

  return (
    <Container>
      <TopChat>
        <Typography style={{ fontSize: '.8rem' }} variant='h6'>
          CHAT DEL STREAM
        </Typography>
      </TopChat>
      <ChatContainer ref={chatScrollbar}>
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
