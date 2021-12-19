import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import Button from '../pieces/Button';
import './Post.css';

const Post = (props) => {
  const { post } = props;
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
            <Button size="small" type="text">
              Follow
            </Button>
          </div>

          <div className="post_content_music">
            <h4>The music goes here</h4>
          </div>

          <div className="post_content_video">
            <ReactPlayer width="336px" height="600px" controls url={post.videoURL} />
            <div className="post_content_video--actions">
              <div className="post_content_video--actions--item">
                <div className="post__video--icon--wrap">
                  <i class="far fa-heart"></i>
                </div>
                <b>399.7K</b>
              </div>
              <div className="post_content_video--actions--item">
                <div className="post__video--icon--wrap">
                  <i class="far fa-comment-dots"></i>
                </div>
                <b>399.7K</b>
              </div>
              <div className="post_content_video--actions--item">
                <div className="post__video--icon--wrap">
                  <i class="fas fa-share"></i>
                </div>
                <b>399.7K</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
