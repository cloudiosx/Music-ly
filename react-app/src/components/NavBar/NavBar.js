import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session/actions';
import LoginModal from '../auth/AuthForm/LoginModal';
import SignUpModal from '../auth/AuthForm/SignUpModal';
import Button from '../pieces/Button';
import Modal from '../pieces/Modal';
import SearchBar from '../SearchBar/SearchBar';
import UploadPost from '../UploadPost/UploadPost';
import './NavBar.css';

const ModalView = {
  login: 'login',
  signup: 'signup',
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalView, setModalView] = useState('');

  const closeModal = () => setModalView('');
  const openLoginModal = () => setModalView(ModalView.login);
  const openSignUpModal = () => setModalView(ModalView.signup);

  const { user } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleModalUpload = () => {
    setIsOpen((v) => !v);
  };

  return (
    <nav className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <NavLink className="nav-bar-logo-link" to="/" exact={true} activeClassName="active">
            <div className="nav-bar-logo">
              <img src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/logo.svg" alt="music.ly logo"/>
            </div>
          </NavLink>
        </li>
        <li>
          <div>
            <SearchBar />
          </div>
        </li>
        <li>
          <ul className="right-nav-container">
            {user && (
              <li>
                <div className="button-upload--nologin" onClick={handleLogout}>
                  <i class="fas fa-sign-out-alt"></i> Logout
                </div>
              </li>
            )}
            <li>
              {!user ? (
                <div className="button-upload--nologin" onClick={openLoginModal}>
                  Upload
                </div>
              ) : (
                <div className="button-upload" onClick={toggleModalUpload}>
                  <img src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/uploadCloud.svg" alt="upload video" />
                </div>
              )}
            </li>
            <li>
              {!user ? (
                <span onClick={openLoginModal} className="nav-link">
                  <Button className="button-login" type="fill">
                    Login
                  </Button>
                </span>
              ) : (
                <span className="nav_user_image">
                  <img src={user.photoURL} alt={user.username} />
                </span>
              )}
            </li>
          </ul>
        </li>
      </ul>
      <Modal isOpen={isOpen} onClose={toggleModalUpload}>
        <UploadPost />
      </Modal>
      <LoginModal isOpen={modalView === ModalView.login} onClose={closeModal} onClickFooterAction={openSignUpModal} />
      <SignUpModal isOpen={modalView === ModalView.signup} onClose={closeModal} onClickFooterAction={openLoginModal} />
    </nav>
  );
};

export default NavBar;
