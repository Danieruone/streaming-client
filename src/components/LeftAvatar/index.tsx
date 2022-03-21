import { FC } from 'react';

// UI
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

// styles
import styled from '@emotion/styled';

interface ContainerProps {
  isExpanded: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;
  ${({ isExpanded }) =>
    isExpanded && 'display: flex; align-items: center; margin-left: 1rem;'}
`;

interface Props {
  name: string;
  streamTitle: string;
  profileURL: string;
  isExpanded: boolean;
}

export const LeftAvatar: FC<Props> = ({ name, streamTitle, isExpanded }) => {
  return (
    <Container isExpanded={isExpanded}>
      <Tooltip
        title={name}
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
