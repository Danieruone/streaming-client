import { FC, useState } from 'react';

// UI
import { Typography } from '@mui/material';

// npm
import ReactPlayer from 'react-player';

// styles
import { Container, OfflineBox } from './styles';

interface Props {
  url: string;
}

export const VideoStream: FC<Props> = ({ url }) => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <Container>
      {!isOnline && (
        <OfflineBox>
          <div>
            <Typography variant='h2'>Offline</Typography>
            <Typography variant='body2'>
              El streamer ahora mismo no está transmitiendo, vuelve más tarde
            </Typography>
          </div>
        </OfflineBox>
      )}
      <ReactPlayer controls width='100%' height='100%' url={url} />
    </Container>
  );
};
