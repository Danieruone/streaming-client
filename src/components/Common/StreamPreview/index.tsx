// UI
import { Avatar, Typography } from '@mui/material';

// styles
import {
  Container,
  ImageContainer,
  DirectBadge,
  InfoContainer,
} from './styles';

export const StreamPreview = () => {
  return (
    <Container>
      <ImageContainer>
        <DirectBadge>EN DIRECTO</DirectBadge>
        <img src='https://marketing4ecommerce.net/wp-content/uploads/2020/08/como-emitir-en-directo-en-Twitch-1280x720.jpg' />
      </ImageContainer>
      <InfoContainer>
        <Avatar />
        <div style={{ marginLeft: '1rem' }}>
          <Typography variant='body2'>
            <strong>Aquí jugando en stream, pasen!!</strong>
          </Typography>
          <Typography variant='body2'>Darulive</Typography>
        </div>
      </InfoContainer>
    </Container>
  );
};
