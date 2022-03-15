import Avatar from '@mui/material/Avatar';

// styles
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  padding-bottom: 5rem;
  align-items: center;
`;

export const AvatarCircle = styled.div`
  border: 3px solid #ff7400;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
`;

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
