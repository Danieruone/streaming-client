// components
import { LoginForm } from 'components/Common/LoginForm';
import { ModalComponent } from 'components/Shared/ModalComponent';

// state
import { useRecoilState } from 'recoil';
import { authModalState } from 'state/atoms/AuthFormModal';

export const AuthFormModal = () => {
  const [authModal, setAuthModalState] = useRecoilState(authModalState);

  return (
    <ModalComponent
      isOpen={authModal}
      setIsOpen={() => setAuthModalState(false)}
    >
      <LoginForm />
    </ModalComponent>
  );
};
