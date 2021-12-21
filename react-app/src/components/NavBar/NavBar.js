import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session/actions';
import Button from '../pieces/Button';
import Modal from '../pieces/Modal';
import SearchBar from '../SearchBar/SearchBar';
import UploadPost from '../UploadPost/UploadPost';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <img src="/images/logo.svg" alt="music.ly logo" />
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
                // TODO: ths should open login modal
                <div className="button-upload--nologin" onClick={toggleModalUpload}>
                  Upload
                </div>
              ) : (
                <div className="button-upload" onClick={toggleModalUpload}>
                  <img src="/images/uploadCloud.svg" alt="upload video" />
                </div>
              )}
            </li>
            <li>
              {!user ? (
                <NavLink to="/login" exact={true} className="nav-link">
                  <Button className="button-login" type="fill">
                    Login
                  </Button>
                </NavLink>
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
    </nav>
  );
};

export default NavBar;
