import { useState } from 'react';

// components
import { DropZone } from 'components/Shared/DropZone';

// UI
import { Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';

// state
import { useRecoilState } from 'recoil';
import { profileState } from 'state/atoms/Profile';

// services
import { updateProfileInfo } from 'services/Stream';

// styles
import { Container, ImageContainer, EditIconContainer } from './styles';

export const ProfileSettings = () => {
  const [profile, setProfile] = useRecoilState(profileState);

  const [currentImage, setCurrentImage] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = () => {
    setIsLoading(true);
    updateProfileInfo({ image: currentImage.base64 })
      .then(({ data }) => {
        const profileData = { ...profile, image: data.image };
        setProfile(profileData);
      })
      .finally(() => setIsLoading(false));
  };

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

      {currentImage && (
        <div style={{ marginTop: 30 }}>
          {isLoading ? (
            <CircularProgress color='warning' />
          ) : (
            <Button
              variant='outlined'
              color='warning'
              onClick={() => updateProfile()}
            >
              Update Profile
            </Button>
          )}
        </div>
      )}
    </Container>
  );
};
