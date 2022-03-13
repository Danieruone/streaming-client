import { FC } from 'react';

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  name: string;
  streamTitle: string;
  profileURL: string;
  isExpanded: boolean;
}

export const LeftAvatar: FC<Props> = ({ name }) => {
  return (
    <div style={{ marginBottom: '.5rem', cursor: 'pointer' }}>
      <Tooltip title={name} placement='right-start'>
        <Avatar alt={name} sx={{ width: 32, height: 32 }} />
      </Tooltip>
    </div>
  );
};
