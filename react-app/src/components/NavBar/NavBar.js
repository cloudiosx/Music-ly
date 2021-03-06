import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLoginContext } from '../../Context/LoginProvider';
import { logout } from '../../store/session/actions';
import Button from '../pieces/Button';
import Modal from '../pieces/Modal';
import SearchBar from '../SearchBar/SearchBar';
import UploadPost from '../UploadPost/UploadPost';
import LogoutIcon from '@mui/icons-material/Logout';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { openLoginModal } = useLoginContext();

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
              <img
                src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/logo.svg"
                alt="music.ly logo"
              />
            </div>
          </NavLink>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <ul className="right-nav-container">
            {user && (
              <li>
                <div className="button-upload--nologin" onClick={handleLogout}>
                  <LogoutIcon /> Logout
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
                  <CloudUploadOutlinedIcon fontSize="large" />
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
                <NavLink to={`/users/${user.id}`} className="nav_user_image">
                  <img src={user.photoURL} alt={user.username} />
                </NavLink>
              )}
            </li>
          </ul>
        </li>
      </ul>
      <Modal isOpen={isOpen} onClose={toggleModalUpload}>
        <UploadPost toggleModalUpload={toggleModalUpload} />
      </Modal>
    </nav>
  );
};

export default NavBar;
