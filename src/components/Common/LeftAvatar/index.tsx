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
  user,
  title,
  isExpanded,
}) => {
  return (
    <Container isExpanded={isExpanded} to={`/broadcaster/${user.username}`}>
      <Tooltip
        title={isExpanded ? '' : user.username}
        placement='right-start'
        style={{ marginRight: '1rem' }}
      >
        <Avatar alt={user.username} sx={{ width: 32, height: 32 }} />
      </Tooltip>
      <div>
        {isExpanded && (
          <>
            <Typography style={{ fontSize: '.9rem' }}>
              <strong>{user.name}</strong>
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
