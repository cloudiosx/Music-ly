import React, { createContext, useCallback, useContext, useState } from 'react';
import LoginModal from '../components/auth/AuthForm/LoginModal';
import SignUpModal from '../components/auth/AuthForm/SignUpModal';

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

const ModalView = {
  login: 'login',
  signup: 'signup',
};

const LoginProvider = ({ children }) => {
  const [modalView, setModalView] = useState('');

  const closeModal = useCallback(() => setModalView(''), []);
  const openLoginModal = useCallback(() => setModalView(ModalView.login), []);
  const openSignUpModal = useCallback(() => setModalView(ModalView.signup), []);

  return (
    <>
      <LoginContext.Provider value={{ openLoginModal, openSignUpModal }}>{children}</LoginContext.Provider>

      <LoginModal isOpen={modalView === ModalView.login} onClose={closeModal} onClickFooterAction={openSignUpModal} />
      <SignUpModal isOpen={modalView === ModalView.signup} onClose={closeModal} onClickFooterAction={openLoginModal} />
    </>
  );
};

export default LoginProvider;
