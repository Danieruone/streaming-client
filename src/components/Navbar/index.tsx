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
        <Typography
          variant='h6'
          style={{ margin: '0px 30px 0px 20px', fontSize: '1rem' }}
        >
          Explorar
        </Typography>
        <Typography variant='h6' style={{ fontSize: '1rem' }}>
          Instrucciones
        </Typography>
      </NavOptions>
    </Container>
  );
};
