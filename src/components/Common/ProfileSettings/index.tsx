import { useState, useContext, FC } from 'react';

// components
import { DropZone } from 'components/Shared/DropZone';

// UI
import { Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';
import { TextField } from '@mui/material';

// state
import { useRecoilState } from 'recoil';
import { profileState } from 'state/atoms/Profile';

// services
import { updateProfileInfo } from 'services/Stream';

// context
import { SocketContext } from 'context/SocketProvider';

// styles
import { Container, ImageContainer, EditIconContainer } from './styles';

interface Props {
  setProfileSettingsModal: any;
}

export const ProfileSettings: FC<Props> = ({ setProfileSettingsModal }) => {
  const { socket } = useContext(SocketContext);
  const [profile, setProfile] = useRecoilState(profileState);

  const [currentImage, setCurrentImage] = useState<any>(null);
  const [streamTitle, setStreamTitle] = useState<any>();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = () => {
    setIsLoading(true);
    if (currentImage) {
      updateProfileInfo({ image: currentImage.base64 }).then(({ data }) => {
        const profileData = { ...profile, image: data.image };
        setProfile(profileData);
      });
    }

    if (streamTitle) {
      socket.emit('updateProfile', {
        username: profile.username,
        title: streamTitle,
      });
    }
    setProfileSettingsModal(false);
  };

  const showButton = currentImage || streamTitle;

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

      <TextField
        id='standard-basic'
        label='Stream title'
        variant='standard'
        color='warning'
        onChange={(e) => setStreamTitle(e.target.value)}
      />

      {showButton && (
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
