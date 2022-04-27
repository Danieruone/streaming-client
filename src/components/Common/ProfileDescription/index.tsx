import { FC, useEffect, useState, useContext } from 'react';

// UI
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// context
import { SocketContext } from 'context/SocketProvider';

// types
import { StreamObject } from 'interfaces/StreeamObject';

// styles
import {
  Container,
  AvatarCircle,
  Profile,
  TopDescription,
  Viwers,
} from './styles';

interface Props {
  username: string;
  title: string;
  userpicture: string;
}

export const ProfileDescription: FC<Props> = ({
  username,
  title,
  userpicture,
}) => {
  const { socket } = useContext(SocketContext);

  const [viwersCount, setViwersCount] = useState(0);
  const [streamTitle, setStreamTitle] = useState(title);
  const [streamImage, setstreamImage] = useState(userpicture);

  useEffect(() => {
    socket.emit('roomUsers', username);
    const intervalId = setInterval(() => {
      socket.emit('roomUsers', username);
    }, 10000);
    socket.on('roomUsers', (data: any) => {
      setViwersCount(data);
    });
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    socket.on('updateProfile', (updatedStream: StreamObject) => {
      setStreamTitle(updatedStream.title);
      setstreamImage(updatedStream.userpicture);
    });
  }, [socket]);

  return (
    <Container>
      <TopDescription>
        <Profile>
          <AvatarCircle>
            <Avatar
              alt={username}
              src={streamImage || ''}
              sx={{ width: 60, height: 60 }}
            />
          </AvatarCircle>

          <div>
            <Typography variant='h6'>{username || ''}</Typography>
            <Typography variant='body2'>{streamTitle || ''}</Typography>

            <Stack direction='row' spacing={1} style={{ marginTop: 5 }}>
              <Chip label='Games' />
              <Chip label='Just chatting' />
            </Stack>
          </div>
        </Profile>

        <Viwers>
          <PersonIcon style={{ marginRight: 5 }} />
          <Typography variant='body1'>{viwersCount}</Typography>
        </Viwers>
      </TopDescription>
    </Container>
  );
};
