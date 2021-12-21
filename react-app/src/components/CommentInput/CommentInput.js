import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentInput.css';

const CommentInput = (props) => {
  const [text, setText] = useState('');
  const disabled = text.trim().length === 0;

  const handleSendComment = () => {
    if (disabled) return;
    //  TODO: call API to send comment
  };

  return (
    <div className="comment_input_container">
      <div className="comment_input_wrapper">
        <input
          type="text"
          placeholder="Write comment here"
          className="comment_input_wrapper--input"
          onChange={(e) => setText(e.target.value)}
        />
        <div className={`comment_input_wrapper--post-button ${!disabled ? 'active' : ''}`} onClick={handleSendComment}>
          Post
        </div>
      </div>
    </div>
  );
};

CommentInput.propTypes = {};

export default CommentInput;
