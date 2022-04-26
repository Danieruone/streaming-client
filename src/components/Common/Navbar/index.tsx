import { useState } from 'react';

// icons
import icon from 'assets/icons/orange-icon.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// UI
import { Avatar, Button, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';

// router
import { Link } from 'react-router-dom';

// components
import { ModalComponent } from 'components/Shared/ModalComponent';
import { StreamingKeyConfig } from '../StreamingKeyConfig';
import { ProfileSettings } from '../ProfileSettings';

// styles
import {
  Container,
  Icon,
  NavOptions,
  ProfileContainer,
  PaperStyles,
} from './styles';

// state
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn } from 'state/atoms/Auth';
import { authModalState } from 'state/atoms/AuthFormModal';
import { profileState } from 'state/atoms/Profile';

export const Navbar = () => {
  const [isLoggedInState, setIsLoggedInState] = useRecoilState(isLoggedIn);
  const setAuthModalState = useSetRecoilState(authModalState);
  const profileValue = useRecoilValue(profileState);

  // modal
  const [streamingKeyModal, setStreamingKeyModal] = useState(false);
  const [profileSettingsModal, setProfileSettingsModal] = useState(false);

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
    <>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Icon>
              <img src={icon} />
            </Icon>
          </Link>

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
                Explore
              </Typography>
            </Link>
          </NavOptions>
        </div>

        {isLoggedInState ? (
          <>
            <ProfileContainer onClick={handleClick}>
              {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <Avatar
                src={profileValue.image}
                alt={profileValue.username}
                sx={{ width: 32, height: 32 }}
              />
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
              <MenuItem onClick={() => setProfileSettingsModal(true)}>
                <SettingsIcon sx={{ marginRight: 1 }} /> Profile Settings
              </MenuItem>
              <MenuItem onClick={() => setStreamingKeyModal(true)}>
                <KeyIcon sx={{ marginRight: 1 }} /> Streaming key
              </MenuItem>
              <MenuItem onClick={Logout}>
                <LogoutIcon sx={{ marginRight: 1 }} />
                Logout
              </MenuItem>
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

      <ModalComponent
        isOpen={streamingKeyModal}
        setIsOpen={() => setStreamingKeyModal(false)}
      >
        <StreamingKeyConfig />
      </ModalComponent>

      <ModalComponent
        isOpen={profileSettingsModal}
        setIsOpen={() => setProfileSettingsModal(false)}
      >
        <ProfileSettings />
      </ModalComponent>
    </>
  );
};
