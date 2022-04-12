import { useEffect, useState } from 'react';

// components
import { LeftBar } from 'components/Common/LeftBar';
import { Navbar } from 'components/Common/Navbar';
import { VideoStream } from 'components/Common/VideoStream';
import { Chat } from 'components/Common/Chat';
import { ProfileDescription } from 'components/Common/ProfileDescription';

// styles
import { Container, StreamingContainer } from './styles';

// router
import { useParams } from 'react-router-dom';

// services
import { getStreamByUsername } from 'services/Stream';

// types
import { StreamObject } from 'interfaces/StreeamObject';

export const StreamingPage = () => {
  const [userData, setUserData] = useState<StreamObject>();
  const { username } = useParams();

  useEffect(() => {
    getStreamByUsername(username || '').then(({ data }) => setUserData(data));
  }, []);

  return (
    <div>
      <div style={{ height: '3rem' }}>
        <Navbar />
      </div>
      <Container>
        <div>
          <LeftBar />
        </div>
        <StreamingContainer>
          <div style={{ overflowY: 'scroll', height: '100vh' }}>
            {userData && (
              <>
                <VideoStream url={userData?.url} />
                <ProfileDescription
                  username={userData?.username}
                  title={userData?.title}
                  userpicture={userData?.userpicture}
                />
              </>
            )}
          </div>
          <div>
            <Chat />
          </div>
        </StreamingContainer>
      </Container>
    </div>
  );
};
