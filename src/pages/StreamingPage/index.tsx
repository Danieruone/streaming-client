import { Container, StreamingContainer } from './styles';

export const StreamingPage = () => {
  return (
    <div>
      <div>navbar</div>
      <Container>
        <div>left bar</div>
        <StreamingContainer>
          <div>video stream</div>
          <div>chat</div>
        </StreamingContainer>
      </Container>
    </div>
  );
};
