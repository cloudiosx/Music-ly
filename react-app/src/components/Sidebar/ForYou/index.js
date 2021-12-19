import React from 'react';
import { NavLink } from 'react-router-dom';
import './ForYou.css';

const ForYou = (props) => {
  return (
    <div className="for_you">
      <NavLink to="/" className="for_you_link" activeClassName="active_link">
        <i class="fas fa-home"></i>
        <h2 className="for_you_link-name">For You</h2>
      </NavLink>
      {/* TODO */}
      <NavLink to="/following" className="for_you_link" activeClassName="active_link">
        <i class="far fa-user"></i>
        <span className="for_you_link-name">Following</span>
      </NavLink>
    </div>
  );
};

ForYou.propTypes = {};

export default ForYou;
