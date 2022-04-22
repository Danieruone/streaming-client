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

export const StreamPreview: FC<StreamObject> = ({
  thumbnail,
  title,
  username,
  userpicture,
}) => {
  return (
    <Container to={`/${username}`}>
      <ImageContainer>
        <DirectBadge>EN DIRECTO</DirectBadge>
        <img
          src={
            thumbnail
              ? thumbnail
              : 'https://vod-secure.twitch.tv/_404/404_processing_320x180.png'
          }
        />
      </ImageContainer>
      <InfoContainer>
        <Avatar src={userpicture} />
        <div style={{ marginLeft: '1rem' }}>
          <Typography variant='body2'>
            <strong>{title}</strong>
          </Typography>
          <Typography variant='body2'>{username}</Typography>
        </div>
      </InfoContainer>
    </Container>
  );
};
