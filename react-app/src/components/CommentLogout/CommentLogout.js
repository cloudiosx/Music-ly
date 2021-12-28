import React from 'react';
import { useLoginContext } from '../../Context/LoginProvider';
import Button from '../pieces/Button';

function CommentLogout() {
  const { openLoginModal } = useLoginContext();
  return (
    <div className="logout_container">
      <h3 className="logout_container--title">Login to see comments</h3>
      <p className="logout_container--subtitle">Login to see comments and like the video</p>
      <Button onClick={openLoginModal} type="fill" size="medium" className="login_button">
        Log in
      </Button>
      <p className="question">
        Don't have an accounts?
        <span className="question--signup">Sign up</span>
      </p>
    </div>
  );
}

export default CommentLogout;
