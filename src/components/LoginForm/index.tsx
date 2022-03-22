import { useState } from 'react';

// media
import twitchLogo from 'assets/icons/twitch.png';

// form
import { useForm } from 'react-hook-form';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);
    if (data) {
      logIn(data)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
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
        {...register('email', { required: true })}
        error={errors.email ? true : false}
      />
      <TextField
        label='Password'
        variant='outlined'
        color='warning'
        type='password'
        autoComplete='off'
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
        {...register('password', { required: true })}
        error={errors.password ? true : false}
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
