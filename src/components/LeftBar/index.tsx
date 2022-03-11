// components
import { LeftAvatar } from '../LeftAvatar';

// ui
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
  return (
    <Container>
      <div style={{ margin: '1rem 0 1rem 0' }}>
        <FavoriteBorderIcon />
      </div>
      {content.map((user) => (
        <LeftAvatar {...user} />
      ))}
    </Container>
  );
};
