import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../store/session/actions';
import Button from '../../pieces/Button';
import ModalAuth from '../ModalAuth/ModalAuth';
import './AuthForm.css';
import { renderErrorMessage } from '../../../util/validation';

const VALID_FILE_EXT = ['pdf', 'png', 'jpg', 'jpeg', 'gif', 'mp4', 'x-m4v', 'mov'];

const SignUpModal = (props) => {
  const { isOpen, onClose, onClickFooterAction } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onRegister = async (e) => {
    e.preventDefault();
    if (disabled) {
      setIsSubmitted(true);
      return;
    }
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photoURL', photoURL);
    formData.append('verified', false);
    dispatch(signUp(formData));
  };

  const handleChangeFile = (e) => {
    if (!e.target?.files?.[0]) return;
    const _file = e.target.files[0];
    const ext = _file?.name?.split('.')?.pop();
    if (!VALID_FILE_EXT.includes(ext)) {
      setError('Invalid file type');
      return;
    }
    setError('');
    setPhotoURL(e.target.files[0]);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFullName = (e) => {
    setFullname(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const emailError = useMemo(() => renderErrorMessage(email, { email: true, empty: true, min: 5, max: 20 }), [email]);
  const passwordError = useMemo(() => renderErrorMessage(password, { empty: true, min: 8, max: 25 }), [password]);
  const repeatPassError = useMemo(
    () => renderErrorMessage(repeatPassword, { empty: true, compareWith: password, min: 8, max: 25 }),
    [repeatPassword, password]
  );

  const usernameError = useMemo(() => renderErrorMessage(username, { empty: true }), [username]);
  const fullnameError = useMemo(() => renderErrorMessage(fullname, { empty: true }), [fullname]);

  const fileError = useMemo(() => renderErrorMessage(photoURL, { existed: true }), [photoURL]);

  const disabled =
    emailError ||
    passwordError ||
    repeatPassError ||
    usernameError ||
    fullnameError ||
    fileError ||
    !email ||
    !password;

  return (
    <ModalAuth
      isOpen={isOpen}
      onClose={onClose}
      footerQuestion="Already have an account?"
      footerAction="Log in"
      onFooterAction={onClickFooterAction}
      title="Create an account"
    >
      <div className="auth_modal_body">
        <div className="form_field">
          <div className="label">Email</div>
          <div className="inputDiv">
            <i class="input_icon--start far fa-envelope fa-lg"></i>
            <input type="email" placeholder="Enter your email" value={email} onChange={updateEmail} />
          </div>
          {(!!email || isSubmitted) && !!emailError && <p className="error_message">{emailError}</p>}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="form_field">
            <div className="label">Username</div>
            <div className="inputDiv">
              <i class="input_icon--start far fa-user fa-lg"></i>
              <input type="text" placeholder="Enter your username" value={username} onChange={updateUsername} />
            </div>
            {(!!username || isSubmitted) && !!usernameError && <p className="error_message">{usernameError}</p>}
          </div>
          <div className="form_field">
            <div className="label">Full Name</div>
            <div className="inputDiv">
              <i class="input_icon--start far fa-address-card fa-lg"></i>
              <input type="text" placeholder="Enter your full name" value={fullname} onChange={updateFullName} />
            </div>
            {(!!fullname || isSubmitted) && !!fullnameError && <p className="error_message">{fullnameError}</p>}
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
          {(!!password || isSubmitted) && !!passwordError && <p className="error_message">{passwordError}</p>}
        </div>
        <div className="form_field">
          <div className="label">Repeat Password</div>
          <div className="inputDiv">
            <i class="input_icon--start fas fa-key fa-lg"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={repeatPassword}
              onChange={updateRepeatPassword}
            />
            <i onClick={toggleShowPassword} class={`input_icon--end fas fa-eye${!showPassword ? '-slash' : ''}`}></i>
          </div>
          {(!!repeatPassword || isSubmitted) && !!repeatPassError && <p className="error_message">{repeatPassError}</p>}
        </div>
        <div className="form_field">
          <div className="label">Upload your avatar</div>
          <input type="file" accepts=".png, .jpeg, .jpg, .gif" required onChange={handleChangeFile} />
        </div>
        {error && <p className="error_message">{error}</p>}
        {(!!photoURL || isSubmitted) && !!fileError && <p className="error_message">{fileError}</p>}
      </div>
      <div className="action_group">
        <Button onClick={onClose} size="medium" className="action_group--button cancel">
          Cancel
        </Button>
        <Button onClick={onRegister} type="fill" size="medium" className="action_group--button ok" disabled={disabled}>
          Register
        </Button>
      </div>
    </ModalAuth>
  );
};

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickFooterAction: PropTypes.func.isRequired,
};
export default SignUpModal;
