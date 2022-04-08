// recoil
import { RecoilRoot } from 'recoil';

// router
import { Routes, Route } from 'react-router-dom';

// components
import { StreamingPage } from 'pages/StreamingPage';
import { OnlineStreams } from 'pages/OnlineStreams';
import { SocketProvider } from 'context/SocketProvider';
import { AuthFormModal } from 'components/Shared/AuthFormModal';
import { StreamsHandler } from 'components/Common/StreamsHandler';

function App() {
  return (
    <RecoilRoot>
      <SocketProvider>
        <StreamsHandler>
          <Routes>
            <Route path='/' element={<OnlineStreams />} />
            <Route path='/broadcaster/:username' element={<StreamingPage />} />
          </Routes>
          <AuthFormModal />
        </StreamsHandler>
      </SocketProvider>
    </RecoilRoot>
  );
}

export default App;
