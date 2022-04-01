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

// state
import { useRecoilValue } from 'recoil';

export const ProfileDescription = () => {
  return (
    <Container>
      <TopDescription>
        <Profile>
          <AvatarCircle>
            <Avatar alt='Test' sx={{ width: 60, height: 60 }} />
          </AvatarCircle>

          <div>
            {/* <Typography variant='h6'>{name}</Typography>
            <Typography variant='body2'>{title}</Typography> */}

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
