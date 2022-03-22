import { FC } from 'react';

// UI
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

// router
import { Link } from 'react-router-dom';

// styles
import styled from '@emotion/styled';

interface ContainerProps {
  isExpanded: boolean;
}

export const Container = styled(Link)<ContainerProps>`
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: black;
  ${({ isExpanded }) =>
    isExpanded && 'display: flex; align-items: center; margin-left: 1rem;'}
`;

interface Props {
  name: string;
  broadcaster_id: number;
  streamTitle: string;
  profileURL: string;
  isExpanded: boolean;
}

export const LeftAvatar: FC<Props> = ({
  name,
  streamTitle,
  isExpanded,
  broadcaster_id,
}) => {
  return (
    <Container isExpanded={isExpanded} to={`/broadcaster/${broadcaster_id}`}>
      <Tooltip
        title={isExpanded ? '' : name}
        placement='right-start'
        style={{ marginRight: '1rem' }}
      >
        <Avatar alt={name} sx={{ width: 32, height: 32 }} />
      </Tooltip>
      <div>
        {isExpanded && (
          <Typography style={{ fontSize: '.9rem' }}>
            <strong>{name}</strong>
          </Typography>
        )}
        {isExpanded && (
          <Tooltip title={streamTitle} placement='right-start'>
            <Typography style={{ fontSize: '.8rem', width: 180 }} noWrap>
              {streamTitle}
            </Typography>
          </Tooltip>
        )}
      </div>
    </Container>
  );
};
