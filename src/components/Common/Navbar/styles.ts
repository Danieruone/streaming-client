import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  right: 0;
  left: 0;
`;

export const NavOptions = styled.div`
  display: flex;
  * {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  width: 30px;
  margin-right: 1rem;
  & img {
    width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  cursor: pointer;
`;

export const PaperStyles = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 26,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};
