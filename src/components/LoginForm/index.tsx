import { useState } from 'react';

// media
import twitchLogo from 'assets/icons/twitch.png';

// UI
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// styles
import { Container, LogoContainer } from './styles';

// services
import { logIn } from 'services/Auth';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = { email: 'test@test.com', password: 'hola' };
    logIn(payload)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
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

      {isLoading ? (
        <CircularProgress color='warning' />
      ) : (
        <Button variant='contained' color='warning' type='submit'>
          Send
        </Button>
      )}
    </Container>
  );
};
