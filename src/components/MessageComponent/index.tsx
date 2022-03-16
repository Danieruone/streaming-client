import { FC } from 'react';

// UI
import { Typography } from '@mui/material';

// types
import { Message } from 'interfaces/Message';

export const MessageComponent: FC<Message> = ({ name, message, userColor }) => {
  return (
    <div style={{ display: 'flex', marginBottom: 10 }}>
      <Typography style={{ fontSize: '.9rem', marginRight: 5 }}>
        <strong style={{ color: userColor }}>{name}: </strong>
        {message}
      </Typography>
    </div>
  );
};
