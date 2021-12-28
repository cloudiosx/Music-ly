import React from 'react';
import { useLoginContext } from '../../../Context/LoginProvider';
import Button from '../../pieces/Button';
import './LoginSide.css';

const LoginSide = (props) => {
  const { openLoginModal } = useLoginContext();

  return (
    <div className="wrapper_with_divider login_side">
      <span className="login_side-info">Login to follow creators, like videos, and view comments</span>

      <Button onClick={openLoginModal} size="medium" className="login_side--button">
        Login
      </Button>
    </div>
  );
};

LoginSide.propTypes = {};

export default LoginSide;
