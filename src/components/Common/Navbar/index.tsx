import { useState } from 'react';

// icons
import icon from 'assets/icons/orange-icon.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// UI
import { Avatar, Button, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// router
import { Link } from 'react-router-dom';

// styles
import {
  Container,
  Icon,
  NavOptions,
  ProfileContainer,
  PaperStyles,
} from './styles';

// state
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoggedIn } from 'state/atoms/Auth';
import { authModalState } from 'state/atoms/AuthFormModal';

export const Navbar = () => {
  const [isLoggedInState, setIsLoggedInState] = useRecoilState(isLoggedIn);
  const setAuthModalState = useSetRecoilState(authModalState);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const Logout = () => {
    localStorage.clear();
    setIsLoggedInState(false);
    setAnchorEl(null);
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>

      {isLoggedInState ? (
        <>
          <ProfileContainer onClick={handleClick}>
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            <Avatar sx={{ width: 32, height: 32 }} />
          </ProfileContainer>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={PaperStyles}
          >
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          variant='outlined'
          color='warning'
          size='small'
          onClick={() => setAuthModalState(true)}
        >
          Login / SignUp
        </Button>
      )}
    </Container>
  );
};
