import { FC } from 'react';
import { motion } from 'framer-motion';

// UI
import { Typography } from '@mui/material';

// types
import { Message } from 'interfaces/Message';

export const MessageComponent: FC<Message> = ({
  username,
  message,
  userColor,
}) => {
  return (
    <motion.div
      animate={{ scale: 1, x: [50, 0] }}
      transition={{ duration: 0.1 }}
      style={{ display: 'flex', marginBottom: 10 }}
    >
      <Typography style={{ fontSize: '.9rem' }}>
        <strong style={{ color: userColor }}>{username}: </strong>
        {message}
      </Typography>
    </motion.div>
  );
};
