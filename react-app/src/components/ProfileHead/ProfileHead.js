import React from 'react';
import PropTypes from 'prop-types';
import Button from '../pieces/Button';
import './ProfileHead.css';
import { updateFollow } from '../../store/interactions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginContext } from '../../Context/LoginProvider';
import { useParams } from 'react-router-dom';

const ProfileHead = ({ userProfile }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const { openLoginModal } = useLoginContext();

  console.log("user ======>", user)

  const isMe = userId === user?.id?.toString();

  const toggleFollow = () => {
    if (!user) {
      openLoginModal();
      return;
    }
    dispatch(updateFollow({ userId: userId }));
  };

  return (
    <header>
      <div className="profile_userinfo">
        <div className="profile_userinfo_avatar">
          <img src={userProfile.photoURL} alt="user 1" />
        </div>
        <div className="profile_userinfo_right">
          <h1 className="profile_userinfo_right--title">{userProfile.username}</h1>
          <h2 className="profile_userinfo_right--subtitle">{userProfile.fullname}</h2>
          {/* TODO: handel follow */}
          {!isMe && (
            <Button
              onClick={toggleFollow}
              type={`${userProfile.isFollowed ? 'text' : 'fill'}`}
              className={`profile_userinfo_right--button ${userProfile.isFollowed ? 'following' : ''}`}
            >
              {userProfile.isFollowed ? 'Following' : 'Follow'}
            </Button>
          )}
        </div>
      </div>

      <div className="profile_stats">
        <div className="stats_item">
          <strong>{userProfile.totalFollowings}</strong>
          <span className="stats_item--label">Following</span>
        </div>
        <div className="stats_item">
          <strong>{userProfile.totalFollowers}</strong>
          <span className="stats_item--label">Followers</span>
        </div>
        <div className="stats_item">
          <strong>{userProfile.totalLikes}</strong>
          <span className="stats_item--label">Likes</span>
        </div>
      </div>

      {/* <div className="profile_bio">My bio description</div>
      <div className="profile_links">
        <a href="https://google.com">
          <i class="fas fa-link fa-sm"></i>
          google.com
        </a>
      </div> */}
    </header>
  );
};

ProfileHead.propTypes = {
  userProfile: PropTypes.object,
};
export default ProfileHead;
