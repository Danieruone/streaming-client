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

import { useNavigate } from 'react-router-dom';

import { streamObject } from 'pages/OnlineStreams';

export const StreamPreview: FC<streamObject> = ({
  thumbnail,
  title,
  user,
  url,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/broadcaster', {
      state: {
        url,
        title,
        user,
      },
    });
  };

  return (
    <Container onClick={() => handleClick()}>
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
