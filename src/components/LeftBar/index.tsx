import { useState } from 'react';
import { motion } from 'framer-motion';

// components
import { LeftAvatar } from '../LeftAvatar';

// UI
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// styles
import { Container, ExpandField } from './styles';

const content = [
  {
    name: 'Daniel',
    streamTitle: 'Jugando aqui relax',
    profileURL: 'https://picsum.photos/200',
  },
  {
    name: 'WestCol',
    streamTitle: 'Jugando aqui relax',
    profileURL: 'https://picsum.photos/200',
  },
  {
    name: 'Cristian',
    streamTitle: 'Jugando aqui relax',
    profileURL: 'https://picsum.photos/200',
  },
  {
    name: 'Rubius',
    streamTitle: 'Jugando aqui relax',
    profileURL: 'https://picsum.photos/200',
  },
  {
    name: 'Xokas',
    streamTitle: 'Jugando aqui relax',
    profileURL: 'https://picsum.photos/200',
  },
];

export const LeftBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const variants = {
    open: { width: 250 },
    closed: { width: 50 },
  };

  return (
    <motion.div animate={isExpanded ? 'open' : 'closed'} variants={variants}>
      <Container>
        <ExpandField>
          {isExpanded && <span>Canales que sigues</span>}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer' }}
          >
            {isExpanded ? <ArrowBackIcon /> : <ArrowForwardIcon />}
          </div>
        </ExpandField>
        {!isExpanded && (
          <div style={{ margin: '1rem 0 1rem 0' }}>
            <FavoriteBorderIcon />
          </div>
        )}
        {content.map((user, idx) => (
          <LeftAvatar {...user} isExpanded={isExpanded} key={idx} />
        ))}
      </Container>
    </motion.div>
  );
};
