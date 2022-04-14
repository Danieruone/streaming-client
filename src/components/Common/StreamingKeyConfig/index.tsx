import { useState } from 'react';

// UI
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

// styles
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KeyBox = styled.div`
  border: 1px solid gray;
  text-align: center;
  margin-top: 1rem;
  padding: 10px;
`;

export const StreamingKeyConfig = () => {
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
        // onClick={() => setAuthModalState(true)}
      >
        Get streaming key
      </Button>

      <KeyBox>
        <strong>****************</strong>
      </KeyBox>
    </Container>
  );
};
