import React from 'react';
import PropTypes from 'prop-types';
import Button from '../pieces/Button';
import './CardFollowInfo.css';
import { useLoginContext } from '../../Context/LoginProvider';
import { useDispatch, useSelector } from 'react-redux';
import { updateFollow } from '../../store/interactions/actions';

const CardFollowInfo = (props) => {
  const { userData } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const { openLoginModal } = useLoginContext();

  const toggleFollow = (e) => {
    e.stopPropagation();
    if (!user) {
      openLoginModal(); // user not logged in
      return;
    }
    dispatch(updateFollow({ userId: userData.id, previousStatus: userData.isFollowed }));
  };
  return (
    <div className="follow_info">
      <span className="image_wrap">
        <img src={`${userData.photoURL}`} alt={userData.fullname} />
      </span>
      <h5 className="follow_info--title">{userData.fullname}</h5>
      <p className="follow_info--subtitle">
        {userData.username}
        {userData.verified && (
          <img src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/verified.svg" alt="verified" />
        )}
      </p>
      <div className="button_wrap">
        <Button
          type={`${!!userData.isFollowed ? 'text' : 'fill'}`}
          className={`button_wrap--follow ${!!userData.isFollowed ? 'following' : ''}`}
          onClick={toggleFollow}
        >
          {!!userData.isFollowed ? 'Following' : 'Follow'}
        </Button>
      </div>
    </div>
  );
};

CardFollowInfo.propTypes = {
  userData: PropTypes.object,
};

export default CardFollowInfo;
