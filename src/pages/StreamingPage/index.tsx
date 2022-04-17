import { useEffect, useState } from 'react';

// components
import { LeftBar } from 'components/Common/LeftBar';
import { Navbar } from 'components/Common/Navbar';
import { VideoStream } from 'components/Common/VideoStream';
import { Chat } from 'components/Common/Chat';
import { ProfileDescription } from 'components/Common/ProfileDescription';

// UI
import { CircularProgress } from '@mui/material';

// styles
import { Container, StreamingContainer, NotFoundContainer } from './styles';
import NotFoundIcon from 'assets/icons/404-error.png';

// router
import { useParams } from 'react-router-dom';

// services
import { getStreamByUsername } from 'services/Stream';

// types
import { StreamObject } from 'interfaces/StreeamObject';

export const StreamingPage = () => {
  const [userData, setUserData] = useState<StreamObject>();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    getStreamByUsername(username || '')
      .then(({ data }) => setUserData(data))
      .finally(() => setIsLoading(false));
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
        {isLoading ? (
          <div style={{ position: 'absolute', left: '50%', top: '35%' }}>
            <CircularProgress color='warning' />
          </div>
        ) : userData ? (
          <StreamingContainer>
            <div style={{ overflowY: 'scroll', height: '100vh' }}>
              <>
                <VideoStream url={userData?.url} />
                <ProfileDescription
                  username={userData?.username}
                  title={userData?.title}
                  userpicture={userData?.userpicture}
                />
              </>
            </div>
            <div>
              <Chat />
            </div>
          </StreamingContainer>
        ) : (
          <NotFoundContainer>
            <div>
              <img src={NotFoundIcon} />
            </div>
            <h1>Stream not found</h1>
          </NotFoundContainer>
        )}
      </Container>
    </div>
  );
};
