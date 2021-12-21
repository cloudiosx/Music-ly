import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOnePost } from '../../store/post/actions';
import CommentInput from '../CommentInput/CommentInput';
import CommentLogout from '../CommentLogout/CommentLogout';
import Comments from '../Comments/Comments';
import Button from '../pieces/Button';
import VideoMeta from '../pieces/VideoMeta';
import './PostDetail.css';

function PostDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { postId } = useParams();

  const post = useSelector((state) => state.postStore.postDetail);
  const user = useSelector((state) => state.session.user);

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

  return (
    <main className="post_detail">
      <div className="post_left">
        <video className="post_left_video" src={post?.videoURL} controls muted autoPlay={true}></video>
        {/* <ReactPlayer controls url={post?.videoURL} width="100%" height="100%" /> */}
        <img src="/images/closeIcon.svg" alt="go back" className="closeIcon" onClick={goBack} />
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
            <Button type="text" className="followButton">
              Follow
            </Button>
          </div>
        </div>
        <div className="post_right_info">
          <h1 className="caption">
            <b className="caption">
              {post?.caption} <strong>#{post?.topic}</strong>
            </b>
          </h1>
          <h2 className="music">{post?.music}</h2>
          <div className="actions">
            <VideoMeta content="399.7K" icon="far fa-heart" isHorizon />
            <VideoMeta content="399.7K" icon="far fa-comment-dots" isHorizon />
            <VideoMeta content="399.7K" icon="fas fa-share" isHorizon />
          </div>
          <div className="copy_link">
            <div className="copy_link--link">{window.location.href}</div>
            <div className="copy_link--copy">
              <p>Copy Link</p>
            </div>
          </div>
        </div>
        <div className="post_right_comment">{!user ? <CommentLogout /> : <Comments comments={post.comments} />}</div>
        {user && <CommentInput />}
      </div>
    </main>
  );
}

export default PostDetail;
