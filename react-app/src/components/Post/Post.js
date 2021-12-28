import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { updateFollow, updateLike } from '../../store/interactions/actions';
import Button from '../pieces/Button';
import VideoMeta from '../pieces/VideoMeta';
import './Post.css';

const Post = (props) => {
  const { post } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const handleClickVideo = (e) => {
    e.stopPropagation();
    history.push(`/posts/${post.id}`);
  };

  const handleClickLike = () => {
    if (!user) return; // user not logged in
    const dataLike = {
      postId: post.id,
    };
    dispatch(updateLike(dataLike));
  };

  const toggleFollow = () => {
    if (!user) return; // user not logged in
    dispatch(updateFollow({ postId: post.id }));
  };

  if (!post) return null;
  return (
    <>
      <div className="post">
        <NavLink to={`/users/${post.userId}`} className="post_user_image">
          <img src={post.User.photoURL} alt={post.User.fullname} />
        </NavLink>
        <div className="post_content">
          <div className="post_content_user">
            <NavLink to={`/users/${post.userId}`} className="post_content_user--name">
              <h3>{post.User.username}</h3>
            </NavLink>
            <NavLink to={`/users/${post.userId}`} className="post_content_user--subname">
              <h3>{post.User.fullname}</h3>
            </NavLink>
          </div>

          <div className="post_content_caption">
            <b>{post.caption}</b>
            <span className="post_content_caption--topic">#{post.topic}</span>
          </div>

          <div className="post_content_follow">
            <Button
              onClick={toggleFollow}
              size="small"
              type="text"
              className={`${post.isFollowed ? 'post_content_follow--following' : ''}`}
            >
              {post.isFollowed ? 'Following' : 'Follow'}
            </Button>
          </div>

          <div className="post_content_music">
            <h4>{post.music}</h4>
          </div>

          <div className="post_content_video">
            <div onClick={handleClickVideo}>
              {/* <ReactPlayer width="336px" height="600px" controls url={post.videoURL} /> */}
              <video
                onClick={(e) => e.preventDefault()}
                className="post_content_video_player"
                src={post.videoURL}
                controls
              ></video>
            </div>
            <div className="post_content_video--actions">
              <VideoMeta
                content={post.totalLikes}
                onClick={handleClickLike}
                icon={`far fa-heart fa-3x ${post.isLiked ? 'active_link' : ''}`}
              />
              <VideoMeta content={post.totalComments} icon="far fa-comment-dots fa-3x" />
              <VideoMeta content={post.totalComments} icon="fas fa-share fa-3x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
