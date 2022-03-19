// media
import twitchLogo from 'assets/icons/twitch.png';

// UI
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

// styles
import { Container, LogoContainer } from './styles';

export const LoginForm = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={twitchLogo} />
      </LogoContainer>

      <Typography variant='h6'>Log in to your account</Typography>
      <TextField
        label='Email'
        variant='outlined'
        color='warning'
        autoComplete='off'
        style={{ marginTop: '1rem' }}
        // onChange={(e) => setMessage(e.target.value)}
      />
      <TextField
        label='Password'
        variant='outlined'
        color='warning'
        type='password'
        autoComplete='off'
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
        // onChange={(e) => setMessage(e.target.value)}
      />

      <Button variant='contained' color='warning'>
        Send
      </Button>
    </Container>
  );
};
