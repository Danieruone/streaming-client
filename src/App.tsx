// recoil
import { RecoilRoot } from 'recoil';

// router
import { Routes, Route } from 'react-router-dom';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { StreamingPage } from 'pages/StreamingPage';
import { OnlineStreams } from 'pages/OnlineStreams';
import { NoMatchPage } from 'pages/NoMatchPage';
import { SocketProvider } from 'context/SocketProvider';
import { AuthFormModal } from 'components/Shared/AuthFormModal';
import { StreamsHandler } from 'components/Common/StreamsHandler';

function App() {
  return (
    <RecoilRoot>
      <SocketProvider>
        <StreamsHandler>
          <>
            <Routes>
              <Route path='/' element={<OnlineStreams />} />
              <Route path='/:username' element={<StreamingPage />} />
              <Route path='*' element={<NoMatchPage />} />
            </Routes>
            <ToastContainer position='bottom-right' />
            <AuthFormModal />
          </>
        </StreamsHandler>
      </SocketProvider>
    </RecoilRoot>
  );
}

export default App;
