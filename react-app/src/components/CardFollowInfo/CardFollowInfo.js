import React from 'react';
import PropTypes from 'prop-types';
import Button from '../pieces/Button';
import './CardFollowInfo.css';

const CardFollowInfo = (props) => {
  const { userData } = props;
  return (
    <div className="follow_info">
      <span className="image_wrap">
        <img src={`${userData.photoURL}`} alt={userData.fullname} />
      </span>
      <h5 className="follow_info--title">{userData.fullname}</h5>
      <p className="follow_info--subtitle">
        {userData.username}
        <img src="../../../public/images/verified.svg" alt="verified" />
      </p>
      <div className="button_wrap">
        {/*  add class following */}
        <Button type="fill" className="button_wrap--follow">
          Follow
        </Button>
      </div>
    </div>
  );
};

CardFollowInfo.propTypes = {
  userData: PropTypes.object,
};

export default CardFollowInfo;
