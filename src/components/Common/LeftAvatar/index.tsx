import { FC } from 'react';

// UI
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

// types
import { StreamObject } from 'interfaces/StreeamObject';

// styles
import { Container } from './styles';

export const LeftAvatar: FC<StreamObject & { isExpanded: boolean }> = ({
  username,
  title,
  isExpanded,
}) => {
  return (
    <Container isExpanded={isExpanded} to={`/broadcaster/${username}`}>
      <Tooltip
        title={isExpanded ? '' : username}
        placement='right-start'
        style={{ marginRight: '1rem' }}
      >
        <Avatar alt={username} sx={{ width: 32, height: 32 }} />
      </Tooltip>
      <div>
        {isExpanded && (
          <>
            <Typography style={{ fontSize: '.9rem' }}>
              <strong>{username}</strong>
            </Typography>

            <Tooltip title={title} placement='right-start'>
              <Typography style={{ fontSize: '.8rem', width: 180 }} noWrap>
                {title}
              </Typography>
            </Tooltip>
          </>
        )}
      </div>
    </Container>
  );
};
