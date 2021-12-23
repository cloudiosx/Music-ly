import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './CommentInput.css';
import { saveComment } from '../../store/interactions/actions';

const CommentInput = (props) => {
  const { user, postId } = props;
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const disabled = text.trim().length === 0;

  const handleSendComment = () => {
    if (disabled) return;
    const commentData = {
      userId: user.id,
      postId: parseInt(postId),
      content: text,
      created_at: new Date(),
    };
    dispatch(saveComment(commentData));
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

CommentInput.propTypes = {
  postId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default CommentInput;
