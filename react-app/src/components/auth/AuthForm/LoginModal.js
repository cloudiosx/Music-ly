import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/session/actions';
import Button from '../../pieces/Button';
import ModalAuth from '../ModalAuth/ModalAuth';
import './AuthForm.css';
import { renderErrorMessage } from '../../../util/validation';

const LoginModal = (props) => {
  const { isOpen, onClose, onClickFooterAction } = props;
  const dispatch = useDispatch();
  const { user, errorUser } = useSelector((state) => state.session);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (user) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onLogin = async () => {
    if (emailError || passwordError) {
      setIsSubmitted(true);
      return;
    }
    dispatch(login(email, password));
  };

  const demoLogin = () => {
    const fakeEmail = 'zach@zach.com';
    const fakePassword = 'passwordpassword';
    dispatch(login(fakeEmail, fakePassword));
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

  const emailError = useMemo(() => renderErrorMessage(email, { email: true, empty: true, min: 5, max: 20 }), [email]);
  const passwordError = useMemo(() => renderErrorMessage(password, { empty: true, min: 8, max: 25 }), [password]);

  const disabled = emailError || passwordError || !email || !password;

  return (
    <ModalAuth
      isOpen={isOpen}
      onClose={onClose}
      footerQuestion="Don't have an account?"
      footerAction="Sign up"
      onFooterAction={onClickFooterAction}
      title="Login to continue"
      demoLogin={demoLogin}
    >
      {!!errorUser && <p className="error_message">{errorUser.message}</p>}

      <div className="auth_modal_body">
        <div className="form_field">
          <div className="label">Email</div>
          <div className="inputDiv">
            <i class="input_icon--start far fa-envelope fa-lg"></i>
            <input type="email" placeholder="Enter your email" value={email} onChange={updateEmail} />
          </div>
          {(!!email || isSubmitted) && !!emailError && <p className="error_message">{emailError}</p>}
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
          {(!!password || isSubmitted) && !!passwordError && <p className="error_message">{passwordError}</p>}
        </div>
      </div>

      <div className="action_group">
        <Button onClick={onClose} size="medium" className="action_group--button cancel">
          Cancel
        </Button>
        <Button onClick={onLogin} type="fill" size="medium" className="action_group--button ok" disabled={disabled}>
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
