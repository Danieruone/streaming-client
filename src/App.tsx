// recoil
import { RecoilRoot } from 'recoil';

// router
import { Routes, Route } from 'react-router-dom';

// components
import { StreamingPage } from 'pages/StreamingPage';
import { OnlineStreams } from 'pages/OnlineStreams';
import { SocketProvider } from 'context/SocketProvider';

function App() {
  return (
    <RecoilRoot>
      <SocketProvider>
        <Routes>
          <Route path='/' element={<OnlineStreams />} />
          <Route path='/broadcaster/:userId' element={<StreamingPage />} />
        </Routes>
      </SocketProvider>
    </RecoilRoot>
  );
}

export default App;
