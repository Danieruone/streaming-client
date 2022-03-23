import { FC } from 'react';

// UI
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

// types
import { LeftAvatarProps } from 'interfaces/components/LeftAvatar';

// styles
import { Container } from './styles';

export const LeftAvatar: FC<LeftAvatarProps> = ({
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
