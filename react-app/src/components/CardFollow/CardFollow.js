import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CardFollowInfo from '../CardFollowInfo/CardFollowInfo';
import './CardFollow.css';

const CardFollow = (props) => {
  const { userData } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/users/${userData.id}`);
  };

  return (
    <div className="card_follow">
      <div style={{ position: 'absolute', inset: 0 }}>
        <div className="card_follow_video" onClick={handleClick}>
          <video
            className="card_bg_video"
            src={userData?.followingPost?.videoURL}
            muted
            autoPlay
            loop
            controls={false}
          />

          <div className="card_follow_video--fade">
            <CardFollowInfo userData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

CardFollow.propTypes = {
  userData: PropTypes.object,
};

export default CardFollow;
