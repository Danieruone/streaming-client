import { useState } from 'react';

// components
import { DropZone } from 'components/Shared/DropZone';

// UI
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// state
import { useRecoilState } from 'recoil';
import { profileState } from 'state/atoms/Profile';

// styles
import { Container, ImageContainer, EditIconContainer } from './styles';

export const ProfileSettings = () => {
  const [profile, setProfile] = useRecoilState(profileState);

  const [currentImage, setCurrentImage] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container>
      {isEditing ? (
        <DropZone
          setCurrentImage={setCurrentImage}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ImageContainer onClick={() => setIsEditing(true)}>
          <img
            src={currentImage ? currentImage.preview : profile.image}
            alt={profile.username}
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <EditIconContainer>
            <EditIcon sx={{ color: 'white' }} />
          </EditIconContainer>
        </ImageContainer>
      )}

      <Typography sx={{ marginTop: 2 }} variant='h6'>
        {profile.username}
      </Typography>

      <Typography variant='body2'>Jugando lolsito hoy</Typography>
    </Container>
  );
};
