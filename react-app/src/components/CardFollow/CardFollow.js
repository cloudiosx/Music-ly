import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CardFollowInfo from '../CardFollowInfo/CardFollowInfo';
import './CardFollow.css';

const CardFollow = (props) => {
  return (
    <div className="card_follow" style={{ backgroundImage: 'url("/videos/loginVideo1.mp4")' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        {/* TODO: */}
        <NavLink to={`/users/1`}>
          <div className="card_follow_video">
            <div className="card_follow_video--fade">
              <CardFollowInfo />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

CardFollow.propTypes = {};

export default CardFollow;
