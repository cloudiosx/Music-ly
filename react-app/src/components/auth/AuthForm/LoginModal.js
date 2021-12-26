import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/session/actions';
import Button from '../../pieces/Button';
import ModalAuth from '../ModalAuth/ModalAuth';
import './AuthForm.css';

const LoginModal = (props) => {
  const { isOpen, onClose, onClickFooterAction } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onLogin = async () => {
    if (!email | !password) return;
    dispatch(login(email, password));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ModalAuth
      isOpen={isOpen}
      onClose={onClose}
      footerQuestion="Don't have an account?"
      footerAction="Sign up"
      onFooterAction={onClickFooterAction}
      title="Login to continue"
    >
      <div className="auth_modal_body">
        <div className="form_field">
          <div className="label">Email</div>
          <div className="inputDiv">
            <i class="input_icon--start far fa-envelope fa-lg"></i>
            <input type="email" placeholder="Enter your email" value={email} onChange={updateEmail} />
          </div>
        </div>
        <div className="form_field">
          <div className="label">Password</div>
          <div className="inputDiv">
            <i class="input_icon--start fas fa-key fa-lg"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={updatePassword}
            />
            <i onClick={toggleShowPassword} class={`input_icon--end fas fa-eye${!showPassword ? '-slash' : ''}`}></i>
          </div>
        </div>
      </div>
      <div className="action_group">
        <Button onClick={onClose} size="medium" className="action_group--button cancel">
          Cancel
        </Button>
        <Button onClick={onLogin} type="fill" size="medium" className="action_group--button ok">
          Login
        </Button>
      </div>
    </ModalAuth>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickFooterAction: PropTypes.func.isRequired,
};
export default LoginModal;
