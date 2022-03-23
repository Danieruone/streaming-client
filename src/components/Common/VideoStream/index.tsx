import { FC, useEffect, useRef, useState } from 'react';

// UI
import { Typography } from '@mui/material';

// npm
import Hls from 'hls.js';

// styles
import { Container, OfflineBox } from './styles';

interface Props {
  url: string;
}

export const VideoStream: FC<Props> = ({ url }) => {
  const videoRef: any = useRef(null);
  const hls = new Hls({
    liveSyncDurationCount: 3,
    startPosition: -1,
    liveDurationInfinity: true,
  });

  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      hls.attachMedia(videoRef.current);
    }

    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource(url);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.on(Hls.Events.BUFFER_APPENDED, () => {
          setIsOnline(true);
        });
      });
    });

    hls.on(Hls.Events.ERROR, (event, data) => {
      console.log(data);
      if (
        data.details === 'bufferStalledError' ||
        data.type === 'networkError'
      ) {
        setIsOnline(false);
        hls.destroy();
      }
    });
  }, []);

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
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        width='100%'
        height='100%'
      ></video>
    </Container>
  );
};
