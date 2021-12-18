import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session/actions';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [verified, setVerified] = useState(false);
  const [preview, setPreview] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const formData = new FormData();
      formData.append("fullname", fullname)
      formData.append("username", username)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("photoURL", photoURL)
      formData.append("verified", verified)
      // console.log("FORM DATA IS HERE =========> ", formData.get("photoURL"))
      console.log("FORM DATA IS HERE =========> ", formData.get("verified"))
      const data = await dispatch(signUp(formData));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
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

  const showPreview = (e) => {
    let file = e.target.file[0]
    file = URL.createObjectURL(file);
    setPreview(file)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='splitScreen-signUpForm'>
        <div className='splitScreen-signUpForm-leftPane'>
          <div className='leftPane-signUpForm'>
            <div className='leftPane-signUpForm-header'>
                <p>Million of videos within your fingertips</p>
                <p>Log in to continue.</p>
            </div>
            <div className='leftPane-signUpForm-body'>
              <form onSubmit={onSignUp}>
                <div>
                  {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                  ))}
                </div>
                <div className='leftPane-signUpForm-fullnameContainer'>
                  <label>Fullname</label>
                  <input
                    type='text'
                    name='fullname'
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                  ></input>
                </div>
                <div className='leftPane-signUpForm-usernameContainer'>
                  <label>User Name</label>
                  <input
                    type='text'
                    name='username'
                    onChange={updateUsername}
                    value={username}
                  ></input>
                </div>
                <div className='leftPane-signUpForm-emailContainer'>
                  <label>Email</label>
                  <input
                    type='text'
                    name='email'
                    onChange={updateEmail}
                    value={email}
                  ></input>
                </div>
                <div className='leftPane-signUpForm-passwordContainer'>
                  <label>Password</label>
                  <input
                    type='password'
                    name='password'
                    onChange={updatePassword}
                    value={password}
                  ></input>
                </div>
                <div className='leftPane-signUpForm-repeatPasswordContainer'>
                  <label>Repeat Password</label>
                  <input
                    type='password'
                    name='repeat_password'
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                  ></input>
                </div>
                <div className='leftPane-signUpForm-fileUploadContainer'>
                  <label ></label>
                  <input
                    type='file'
                    name='profile'
                    onChange={(e) => setPhotoURL(e.target.files[0])}
                    accepts=".png, .jpeg, .jpg, .gif"
                    required={true}
                  ></input>
                </div>
                <button type='submit'>Sign Up</button>
              </form>
            </div>
            <div className='leftPane-signUpForm-footer'>
              <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
          </div>
        </div>
        <div className='splitScreen-signUpForm-rightPane'>
          <video src='/videos/loginVideo1.mp4' loop autoPlay/>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
