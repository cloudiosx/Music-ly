import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { useLoginContext } from '../../Context/LoginProvider';
import { updateFollow, updateLike } from '../../store/interactions/actions';
import { deletePost } from '../../store/post/actions';
import Button from '../pieces/Button';
import VideoMeta from '../pieces/VideoMeta';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './Post.css';

const Post = (props) => {
  const { post } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const { openLoginModal } = useLoginContext();

  const user = useSelector((state) => state.session.user);

  const handleClickVideo = (e) => {
    e.stopPropagation();
    history.push(`/posts/${post.id}`);
  };

  const handleClickLike = () => {
    if (!user) {
      openLoginModal(); // user not logged in
      return;
    }
    const dataLike = {
      postId: post.id,
    };
    dispatch(updateLike(dataLike));
  };

  const toggleFollow = () => {
    if (!user) {
      openLoginModal(); // user not logged in
      return;
    }
    dispatch(updateFollow({ userId: post.userId }));
  };

  const handleClickComment = () => {
    if (!user) {
      openLoginModal(); // user not logged in
      return;
    }
    history.push(`/posts/${post.id}`);
  };

  const deleteMyPost = () => {
    if (!user) return; // user not logged in
    dispatch(deletePost(post.id));
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
              <span>{post.User.fullname}</span>
            </NavLink>
          </div>

          <div className="post_content_caption">
            <span>{post.caption}</span>
            <span className="post_content_caption--topic">#{post.topic}</span>
          </div>

          <div className="post_content_follow">
            {user && user?.id === post.userId ? (
              <Button onClick={deleteMyPost} type="text" className={`post_content_follow--following`}>
                Delete
              </Button>
            ) : (
              <Button
                onClick={toggleFollow}
                size="small"
                type="text"
                className={`${post.isFollowed ? 'post_content_follow--following' : ''}`}
              >
                {post.isFollowed ? 'Following' : 'Follow'}
              </Button>
            )}
          </div>

          <div className="post_content_music">
            <h4 style={{ fontWeight: 600, fontSize: 15 }}>
              <MusicNoteIcon fontSize="small" />
              {post.music}
            </h4>
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
                icon={post.isLiked ? <FavoriteIcon color="error" fontSize="medium" /> : <FavoriteBorderIcon fontSize="medium" />}
              />
              <VideoMeta content={post.totalComments} onClick={handleClickComment} icon={<SmsOutlinedIcon fontSize="medium" />} />
              <VideoMeta content={post.totalComments} icon={<ReplyIcon style={{ transform: 'scaleX(-1)' }} fontSize="medium" />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
