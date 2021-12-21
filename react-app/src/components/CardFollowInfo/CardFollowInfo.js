import React from 'react';
import PropTypes from 'prop-types';
import Button from '../pieces/Button';
import './CardFollowInfo.css';

const CardFollowInfo = (props) => {
  return (
    <div className="follow_info">
      <span className="image_wrap">
        <img src="/images/user1.jpg" alt="user 1" />
      </span>
      <h5 className="follow_info--title">This user's fullname</h5>
      <p className="follow_info--subtitle">
        This user's username
        <img src="/images/verified.svg" alt="verified" />
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

CardFollowInfo.propTypes = {};

export default CardFollowInfo;
