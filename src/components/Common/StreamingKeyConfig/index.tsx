import { useState } from 'react';
import { toast } from 'react-toastify';

// UI
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

// services
import { getStreamingKey } from 'services/Stream';

// styles
import { Container, KeyBox } from './styles';

export const StreamingKeyConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [streamingKey, setStreamingKey] = useState('***************');

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

  return (
    <Container>
      <Typography variant='h6'>Your streaming key</Typography>
      <ul>
        <li>Open your streaming tool (Like OBS for example)</li>
        <li>Paste your streaming key</li>
        <li>Start streaming!</li>
      </ul>

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
        <strong>{streamingKey}</strong>
      </KeyBox>
    </Container>
  );
};
