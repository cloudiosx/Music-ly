import React from 'react';
import { NavLink } from 'react-router-dom';

const PopularTopics = (props) => {
  return (
    <div className="for_you wrapper_with_divider">
      <div className="title">Popular topics</div>
      {/* TODO */}
      <NavLink to="/paint" className="for_you_link" activeClassName="active_link">
        <i class="fas fa-palette"></i>
        <h2 className="for_you_link-name">Painting</h2>
      </NavLink>
      {/* TODO */}
      <NavLink to="/music" className="for_you_link" activeClassName="active_link">
        <i class="fas fa-headphones-alt"></i>
        <span className="for_you_link-name">Music</span>
      </NavLink>
      {/* TODO */}
      <NavLink to="/music" className="for_you_link" activeClassName="active_link">
        <i class="fas fa-suitcase-rolling"></i>
        <span className="for_you_link-name">Travel</span>
      </NavLink>
    </div>
  );
};

PopularTopics.propTypes = {};

export default PopularTopics;
