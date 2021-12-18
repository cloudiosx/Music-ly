import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session/actions';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <div className='splitScreen-loginForm'>
      <div className="splitScreen-loginForm-leftPane">
        <div className='leftPane-loginForm'>
          <div className='leftPane-loginForm-header'>
              <p>Million of videos within your fingertips</p>
              <p>Log in to continue.</p>
          </div>
          <div className='leftPane-loginForm-body'>
            <form onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div className='leftPane-loginForm-emailContainer'>
                <label htmlFor='email'>Email</label>
                <input
                  name='email'
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div className='leftPane-loginForm-passwordContainer'>
                <label htmlFor='password'>Password</label>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={updatePassword}
                />
                <button type='submit'>Login</button>
              </div>
            </form>
          </div>
          <div className='leftPane-loginForm-footer'>
            <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
          </div>
        </div>
      </div>
      <div className="splitScreen-loginForm-rightPane">
        <video src='/videos/loginVideo1.mp4' loop autoPlay/>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
