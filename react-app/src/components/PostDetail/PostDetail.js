import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOnePost } from '../../store/post/actions';
import Button from '../pieces/Button';
import VideoMeta from '../pieces/VideoMeta';
import './PostDetail.css';

function PostDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { postId } = useParams();

  const post = useSelector((state) => state.postStore.postDetail);

  console.log("post", post);
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
        <video className='post_left_video' src={post.videoURL} controls></video>
        {/* <ReactPlayer controls url={post?.videoURL} width="100%" height="100%" /> */}
        <img src="/images/closeIcon.svg" alt="go back" className="closeIcon" onClick={goBack} />
      </div>
      <div className="post_right">
        <div className="post_right_head">
          <div className="post_right_head-1">
            <div style={{ flex: '0 0 auto', marginRight: '12px' }}>
              <span className="img_wrap">
                <img src={post?.User?.photoUrl} alt="user" />
              </span>
            </div>
            <div className="middle">
              <h2>{post?.userName}</h2>
              <p>{post?.fullname}</p>
            </div>
            <Button type="text" className="followButton">
              Follow
            </Button>
          </div>
        </div>
        <div className="post_right_info">
          <h1 className="caption">
            <b className="caption">{post?.caption}</b>
          </h1>
          <h2 className="music">{post?.caption}</h2>
          <div className="actions">
            <VideoMeta content="399.7K" icon="far fa-heart" isHorizon />
            <VideoMeta content="399.7K" icon="far fa-comment-dots" isHorizon />
            <VideoMeta content="399.7K" icon="fas fa-share" isHorizon />
          </div>
          <div className="copy_link">
            <div className="copy_link--link">
              https://google.com/1545653145645621454564564635465456344654658456343564564356465843564369549364356
            </div>
            <div className="copy_link--copy">
              <p>Copy Link</p>
            </div>
          </div>
        </div>
        <div className="post_right_comment">
          <div className="logout_container">
            <h3 className="logout_container--title">Login to see comments</h3>
            <p className="logout_container--subtitle">Login to see comments and like the video</p>
            <Button type="fill" size="medium" className="login_button">
              Log in
            </Button>
            <p className="question">
              Don't have an accounts?
              <span className="question--signup">Sign up</span>
            </p>
          </div>
        </div>
      </div>
      {/* {allPosts && allPosts.map((post) => <Post post={post} key={post.id} />)} */}
    </main>
  );
}

export default PostDetail;
