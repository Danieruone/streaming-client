// icons
import icon from 'assets/icons/orange-icon.png';

// UI
import { Typography } from '@mui/material';

// router
import { Link } from 'react-router-dom';

// styles
import { Container, Icon, NavOptions } from './styles';

export const Navbar = () => {
  return (
    <Container>
      <Icon>
        <img src={icon} />
      </Icon>

      <NavOptions>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography
            variant='h6'
            style={{
              margin: '0px 30px 0px 20px',
              fontSize: '1rem',
              color: 'black',
            }}
          >
            Explorar
          </Typography>
        </Link>
        <Typography variant='h6' style={{ fontSize: '1rem' }}>
          Instrucciones
        </Typography>
      </NavOptions>
    </Container>
  );
};
