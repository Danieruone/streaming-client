import { FC } from 'react';

// UI
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// styles
import {
  Container,
  AvatarCircle,
  Profile,
  TopDescription,
  Viwers,
} from './styles';

interface Props {
  username: string;
  title: string;
  userpicture: string;
}

export const ProfileDescription: FC<Props> = ({
  username,
  title,
  userpicture,
}) => {
  return (
    <Container>
      <TopDescription>
        <Profile>
          <AvatarCircle>
            <Avatar
              alt='Test'
              src={userpicture || ''}
              sx={{ width: 60, height: 60 }}
            />
          </AvatarCircle>

          <div>
            <Typography variant='h6'>{username || ''}</Typography>
            <Typography variant='body2'>{title || ''}</Typography>

            <Stack direction='row' spacing={1} style={{ marginTop: 5 }}>
              <Chip label='Games' />
              <Chip label='Just chatting' />
            </Stack>
          </div>
        </Profile>

        <Viwers>
          <PersonIcon style={{ marginRight: 5 }} />
          <Typography variant='body1'>3.500</Typography>
        </Viwers>
      </TopDescription>
    </Container>
  );
};
