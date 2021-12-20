import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../pieces/Button';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <NavLink className="nav-bar-logo-link" to="/" exact={true} activeClassName="active">
            <div className="nav-bar-logo"><img src="/images/logo.svg" alt="music.ly logo" /></div>
          </NavLink>
        </li>
        <li>
          <div>
            <SearchBar />
          </div>
        </li>
        <li>
          <ul className="right-nav-container">
            <li>
              <div className="button-upload">Upload</div>
            </li>
            <li>
              <NavLink to="/login" exact={true} className="nav-link">
                <Button className="button-login" type="fill">
                  Login
                </Button>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to='/user1'
                exact={true}
                activeClassName="active"
              >
              <img
                  className="nav-bar-image"
                  src='https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/19f406936fed4c92a0789d9cab8a871c.png'
                  alt=""
              />
              </NavLink>
            </li> */}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
