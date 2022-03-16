// UI
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

// styles
import {
  Container,
  AvatarCircle,
  Profile,
  TopDescription,
  Viwers,
} from './styles';

// state
import { useRecoilValue } from 'recoil';
import { profileState } from 'state/atoms/Profile';

export const ProfileDescription = () => {
  const profile = useRecoilValue(profileState);

  return (
    <Container>
      <TopDescription>
        <Profile>
          <AvatarCircle>
            <Avatar alt='Test' sx={{ width: 50, height: 50 }} />
          </AvatarCircle>

          <div>
            <Typography variant='h6'>{profile.name}</Typography>
            <Typography variant='body2'>{profile.streamDescription}</Typography>
          </div>
        </Profile>

        <Viwers>
          <PersonIcon />
          <Typography variant='body1'>3.500</Typography>
        </Viwers>
      </TopDescription>
    </Container>
  );
};
