import { useState } from 'react';

// animation
import { motion } from 'framer-motion';

// components
import { LeftAvatar } from '../LeftAvatar';

// UI
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// styles
import { Container, ExpandField } from './styles';

// state
import { useRecoilValue } from 'recoil';
import { streamsState } from 'state/atoms/Streams';

export const LeftBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const streamersArray = useRecoilValue(streamsState);

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
        {streamersArray.map((user, idx) => (
          <LeftAvatar {...user} isExpanded={isExpanded} key={idx} />
        ))}
      </Container>
    </motion.div>
  );
};
