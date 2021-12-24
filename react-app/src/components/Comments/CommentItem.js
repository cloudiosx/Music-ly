import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { timeAgo } from '../../util/time';
import { useDispatch } from 'react-redux';
import { deleteComment, saveComment } from '../../store/interactions/actions';
import './Comments.css';
import CommentInput from '../CommentInput/CommentInput';

const CommentItem = (props) => {
  const { comment, user, postId } = props;
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const isMyComment = user.id === comment.userId;

  const toggleEditMode = () => setEditMode((prev) => !prev);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleDelete = () => {
    if (!isMyComment) return; // make sure unauthorized user delete other comments
    dispatch(deleteComment(comment.id));
  };

  const handleSendEditComment = () => {
    const commentData = {
      userId: user.id,
      postId: parseInt(postId),
      content: text,
      created_at: new Date(),
      id: comment.id,
    };
    // only update comment if it's different with previous content
    if (comment.content !== text) {
      dispatch(saveComment(commentData));
    }
    // close edit mode
    toggleEditMode();
  };

  const displayLikeContainerContent = () => {
    if (editMode) {
      return (
        <>
          <span className="active_link" onClick={handleSendEditComment}>
            Edit
          </span>
          <span className="" onClick={toggleEditMode}>
            Cancel
          </span>
        </>
      );
    }
    // only display actions for my comment on hover
    if (isHover && isMyComment) {
      return (
        <>
          <span className="far fa-edit" onClick={toggleEditMode}></span>
          <span className="far fa-trash-alt active_link" onClick={handleDelete}></span>
        </>
      );
    }
    return <span className="far fa-heart"></span>;
  };

  return (
    <div className="comments_item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="comments_item_content">
        <span className="avatar_comment">
          <img src={comment.photoURL} alt={comment.fullname} />
        </span>
        <div className="content_container">
          <NavLink to={`/users/${comment.userId}`} className="user_link">
            {comment.username}
          </NavLink>
          <p className="comment_text">
            {editMode ? (
              <input type="text" placeholder="Write your edit comment here" onChange={(e) => setText(e.target.value)} />
            ) : (
              <span>{comment.content}</span>
            )}
            <p className="comment_text_time">
              <span>{timeAgo(comment.created_at)}</span>
            </p>
          </p>
          {/* <CommentInput postId={postId} user={user} /> */}
        </div>
        <div className="like_container">{displayLikeContainerContent()}</div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentItem;
