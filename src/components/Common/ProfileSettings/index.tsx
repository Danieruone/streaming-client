import { useState } from 'react';

// components
import { DropZone } from 'components/Shared/DropZone';

// UI
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// state
import { useRecoilState } from 'recoil';
import { profileState } from 'state/atoms/Profile';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const EditIconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
  background-color: #c6c6c6;
  padding: 2px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileSettings = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container>
      {isEditing ? (
        <DropZone />
      ) : (
        <ImageContainer onClick={() => setIsEditing(true)}>
          <img
            src={profile.image}
            alt={profile.username}
            style={{
              width: 100,
              height: 100,
              marginBottom: 5,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <EditIconContainer>
            <EditIcon sx={{ color: 'white' }} />
          </EditIconContainer>
        </ImageContainer>
      )}

      <Typography variant='h6'>{profile.username}</Typography>

      <Typography variant='body2'>Jugando lolsito hoy</Typography>
    </Container>
  );
};
