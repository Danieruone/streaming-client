// UI
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// styles
import { Container, TopChat, ChatContainer, InputContainer } from './styles';

export const Chat = () => {
  return (
    <Container>
      <TopChat>
        <Typography style={{ fontSize: '.8rem' }} variant='h6'>
          CHAT DEL STREAM
        </Typography>
      </TopChat>
      <ChatContainer>Chat</ChatContainer>
      <InputContainer>
        <TextField
          id='standard-basic'
          label='Type your message'
          variant='standard'
          color='warning'
        />
        <Button variant='outlined' color='warning' endIcon={<SendIcon />}>
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};
