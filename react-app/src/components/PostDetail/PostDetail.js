import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useLoginContext } from '../../Context/LoginProvider';
import { updateFollow, updateLike } from '../../store/interactions/actions';
import { deletePost, getOnePost } from '../../store/post/actions';
import CommentInput from '../CommentInput/CommentInput';
import CommentLogout from '../CommentLogout/CommentLogout';
import Comments from '../Comments/Comments';
import Button from '../pieces/Button';
import VideoMeta from '../pieces/VideoMeta';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import ReplyIcon from '@mui/icons-material/Reply';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './PostDetail.css';

function PostDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { openLoginModal } = useLoginContext();

  const { postId } = useParams();

  const post = useSelector((state) => state.postStore.postDetail);
  const user = useSelector((state) => state.session.user);

  const [isCopied, setIsCopied] = useState(false);

  console.log('post', post);
  console.log(postId);

  useEffect(() => {
    if (!postId) return;
    dispatch(getOnePost(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const goBack = () => {
    history.goBack();
  };

  const goToHome = () => {
    history.replace('/');
  };

  const handleClickLike = () => {
    if (!user) {
      openLoginModal();
      return;
    }
    dispatch(updateLike({ postId }));
  };

  const toggleFollow = () => {
    if (!user) {
      openLoginModal();
      return;
    }
    dispatch(updateFollow({ userId: post.userId }));
  };

  const deleteMyPost = () => {
    if (!user) return; // user not logged in
    dispatch(deletePost(postId));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  if (!post) {
    return (
      <div className="post_detail">
        <div className="post_left">
          <div className="post_left_video"></div>
          {/* <ReactPlayer controls url={post?.videoURL} width="100%" height="100%" /> */}
          <img
            src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/closeIcon.svg"
            alt="go back"
            className="closeIcon"
            onClick={goBack}
          />
        </div>
        <div className="post_right delete--content">
          <div>Can't find the post, It may have been deleted</div>
          <Button onClick={goToHome} size="medium" type="text">
            Back to feed
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="post_detail">
      <div className="post_left">
        <video
          className="post_left_video"
          src={post?.videoURL}
          controls
          muted
          autoPlay={true}
        ></video>
        {/* <ReactPlayer controls url={post?.videoURL} width="100%" height="100%" /> */}
        <img
          src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/closeIcon.svg"
          alt="go back"
          className="closeIcon"
          onClick={goBack}
        />
      </div>
      <div className="post_right">
        <div className="post_right_head">
          <div className="post_right_head-1">
            <div style={{ flex: '0 0 auto', marginRight: '12px' }}>
              <span className="img_wrap">
                <img src={post?.User?.photoURL} alt="user" />
              </span>
            </div>
            <div className="middle">
              <h2>{post?.User?.username}</h2>
              <p>{post?.User?.fullname}</p>
            </div>
            {user && user?.id === post.userId ? (
              <Button
                onClick={deleteMyPost}
                type="text"
                className={`followButton following`}
              >
                Delete
              </Button>
            ) : (
              <Button
                onClick={toggleFollow}
                type="text"
                className={`followButton ${post.isFollowed ? 'following' : ''}`}
              >
                {post.isFollowed ? 'Following' : 'Follow'}
              </Button>
            )}
          </div>
        </div>
        <div className="post_right_info">
          <h1 className="caption">
            <b className="caption">
              {post?.caption} <strong>#{post?.topic}</strong>
            </b>
          </h1>
          <h2 className="music">
            <MusicNoteIcon />
            {post?.music}
          </h2>
          <div className="actions">
            <VideoMeta
              content={post.totalLikes}
              onClick={handleClickLike}
              icon={post.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              isHorizon
            />
            <VideoMeta
              content={post.totalComments}
              icon={<SmsIcon />}
              isHorizon
            />
            <VideoMeta
              content={post.totalComments}
              icon={<ReplyIcon style={{ transform: 'scaleX(-1)' }} />}
              isHorizon
            />
          </div>
          <div className="copy_link">
            <div className="copy_link--link">{window.location.href}</div>
            <div className="copy_link--copy" onClick={handleCopy}>
              <p className="copy_text">
                {isCopied && <DoneAllIcon color="success" />}
                <span className={isCopied ? 'copied' : ''}>
                  {isCopied ? 'Copied' : 'Copy Link'}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="post_right_comment">
          {!user ? (
            <CommentLogout />
          ) : (
            <Comments comments={post.comments} user={user} postId={postId} />
          )}
        </div>
        {user && <CommentInput postId={postId} user={user} />}
      </div>
    </main>
  );
}

export default PostDetail;
