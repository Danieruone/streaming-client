// UI
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

// styles
import { Container, AvatarCircle } from './styles';

export const ProfileDescription = () => {
  return (
    <Container>
      <AvatarCircle>
        <Avatar alt='Test' sx={{ width: 50, height: 50 }} />
      </AvatarCircle>

      <div>
        <Typography variant='h6'>Nombre del streamer</Typography>
        <Typography variant='body2'>
          Jugando aquí relax Legue of legends
        </Typography>
      </div>
    </Container>
  );
};
