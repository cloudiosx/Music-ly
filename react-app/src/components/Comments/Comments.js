import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { timeAgo } from '../../util/time';
import './Comments.css';

const Comments = (props) => {
  const { comments } = props;
  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <div className="comments_item">
            <div className="comments_item_content">
              <span className="avatar_comment">
                <img src="/images/user1.jpg" alt="user 1" />
              </span>
              <div className="content_container">
                <NavLink to={`/users/${comment.userId}`} className="user_link">
                  This username's comment
                </NavLink>
                <p className="comment_text">
                  <span>{comment.content}</span>
                  <div className="comment_text_time">
                    <span>{timeAgo(comment.created_at)}</span>
                  </div>
                </p>
              </div>
              <div className="like_container">
                <i className="far fa-heart"></i>
                <span>600K</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

Comments.defaultProps = {
  comments: [],
};

export default Comments;
