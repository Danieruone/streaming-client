import { FC, Dispatch, SetStateAction } from 'react';

// modal
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '10px',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
}

export const ModalComponent: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
