import { useState } from 'react';
import { toast } from 'react-toastify';

// UI
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Tooltip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CachedIcon from '@mui/icons-material/Cached';

// services
import { getStreamingKey, refreshStreamingKey } from 'services/Stream';

// styles
import { Container, KeyBox } from './styles';

// img
import StreamSettings from 'assets/content/stream_settings.png';

export const StreamingKeyConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [streamingKey, setStreamingKey] = useState(null);

  const notify = (e: any) => toast.error(e);

  const getStreamingKeyMethod = () => {
    setIsLoading(true);
    getStreamingKey()
      .then((data) => {
        setStreamingKey(data.data);
      })
      .catch((err) => notify(err.message))
      .finally(() => setIsLoading(false));
  };

  const refreshStreamingKeyMethod = () => {
    setIsLoading(true);
    refreshStreamingKey()
      .then((data) => {
        setStreamingKey(data.data);
      })
      .catch((err) => notify(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container>
      <Typography variant='h6'>Your streaming key</Typography>
      <ul>
        <li>Open your streaming tool (Like OBS for example)</li>
        <li>Paste your streaming key</li>
        <li>Start streaming!</li>
      </ul>

      <div style={{ marginBottom: '1rem' }}>
        <img src={StreamSettings} />
      </div>

      <Button
        variant='outlined'
        color='warning'
        size='small'
        onClick={() => getStreamingKeyMethod()}
      >
        {isLoading ? (
          <CircularProgress color='warning' size={30} />
        ) : (
          <>Get streaming key</>
        )}
      </Button>

      <KeyBox>
        <strong>{streamingKey ? streamingKey : '******************'}</strong>
        {streamingKey && (
          <Tooltip
            title={'Refresh streaming key'}
            placement='bottom'
            style={{ marginRight: '1rem' }}
          >
            <CachedIcon
              onClick={() => refreshStreamingKeyMethod()}
              sx={{ color: 'gray', marginLeft: '1rem', cursor: 'pointer' }}
            />
          </Tooltip>
        )}
      </KeyBox>
    </Container>
  );
};
