// icons
import icon from 'assets/icons/orange-icon.png';

// UI
import { Typography } from '@mui/material';

// styles
import { Container, Icon, NavOptions } from './styles';

export const Navbar = () => {
  return (
    <Container>
      <Icon>
        <img src={icon} />
      </Icon>

      <NavOptions>
        <Typography variant='h6'>Explorar</Typography>
        <Typography variant='h6'>Instrucciones</Typography>
      </NavOptions>
    </Container>
  );
};
