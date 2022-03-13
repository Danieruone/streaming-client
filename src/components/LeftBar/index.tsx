import { useState } from 'react';

// components
import { LeftAvatar } from '../LeftAvatar';

// ui
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// styles
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: #efeff1;
  height: 100vh;
`;

export const ExpandField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & span {
    width: 180px;
  }
`;

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

  return (
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
  );
};
