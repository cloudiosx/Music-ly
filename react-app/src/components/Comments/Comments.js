import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import './Comments.css';

const Comments = (props) => {
  const { comments, user, postId } = props;
  return (
    <div className="comments">
      {!!comments.length &&
        comments.map((comment) => {
          return <CommentItem comment={comment} postId={postId} key={comment.id} user={user} />;
        })}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  user: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

Comments.defaultProps = {
  comments: [],
};

export default Comments;
