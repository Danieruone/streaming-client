import { FC } from 'react';

// UI
import { Avatar, Typography } from '@mui/material';

// styles
import {
  Container,
  ImageContainer,
  DirectBadge,
  InfoContainer,
} from './styles';

// types
import { StreamObject } from 'interfaces/StreeamObject';

export const StreamPreview: FC<StreamObject> = ({ thumbnail, title, user }) => {
  return (
    <Container to={`/broadcaster/${user.username}`}>
      <ImageContainer>
        <DirectBadge>EN DIRECTO</DirectBadge>
        <img src={thumbnail} />
      </ImageContainer>
      <InfoContainer>
        <Avatar src={user.image} />
        <div style={{ marginLeft: '1rem' }}>
          <Typography variant='body2'>
            <strong>{title}</strong>
          </Typography>
          <Typography variant='body2'>{user.name}</Typography>
        </div>
      </InfoContainer>
    </Container>
  );
};
