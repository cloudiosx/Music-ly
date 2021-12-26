import React from 'react';
import Button from '../pieces/Button';
import './ProfileHead.css';

const ProfileHead = () => {
  return (
    <header>
      <div className="profile_userinfo">
        <div className="profile_userinfo_avatar">
          <img src="/images/user1.jpg" alt="user 1" />
        </div>
        <div className="profile_userinfo_right">
          <h1 className="profile_userinfo_right--title">Username</h1>
          <h2 className="profile_userinfo_right--subtitle">Channel name</h2>
          <Button type="fill" className="profile_userinfo_right--button">
            Follow
          </Button>
        </div>
      </div>

      <div className="profile_stats">
        <div className="stats_item">
          <strong>999</strong>
          <span className="stats_item--label">Following</span>
        </div>
        <div className="stats_item">
          <strong>999</strong>
          <span className="stats_item--label">Followers</span>
        </div>
        <div className="stats_item">
          <strong>999</strong>
          <span className="stats_item--label">Likes</span>
        </div>
      </div>

      <div className="profile_bio">My bio description</div>
      <div className="profile_links">
        <a href="https://google.com">
          <i class="fas fa-link fa-sm"></i>
          google.com
        </a>
      </div>
    </header>
  );
};

export default ProfileHead;
