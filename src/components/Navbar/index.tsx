import icon from '../../assets/icons/orange-icon.png';

// styles
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Container = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 30px;
  margin-right: 1rem;
  & img {
    width: 100%;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <Icon>
        <img src={icon} />
      </Icon>

      <Typography variant='body1'>Twitch Naranja</Typography>
    </Container>
  );
};
