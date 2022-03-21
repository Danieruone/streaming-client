// recoil
import { RecoilRoot } from 'recoil';

// components
import { StreamingPage } from 'pages/StreamingPage';
import { SocketProvider } from 'context/SocketProvider';

function App() {
  return (
    <RecoilRoot>
      <SocketProvider>
        <StreamingPage />
      </SocketProvider>
    </RecoilRoot>
  );
}

export default App;
