import { Navbar } from 'components/Navbar';
import { LeftBar } from 'components/LeftBar';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
`;

export const OnlineStreams = () => {
  return (
    <div>
      <div style={{ height: '3rem' }}>
        <Navbar />
      </div>
      <Container>
        <div>
          <LeftBar />
        </div>
        <div></div>
      </Container>
    </div>
  );
};
