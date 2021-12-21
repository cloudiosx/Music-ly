import React from 'react';
import UserHeader from '../../UserHeader/UserHeader';
import './FollowingList.css';

const FollowingList = (props) => {
  return (
    <div className="wrapper_with_divider following_list">
      <h4 className="title">Following accounts</h4>
      {[1, 2, 3, 4].map((user) => (
        <UserHeader key={user} />
      ))}
    </div>
  );
};

FollowingList.propTypes = {};

export default FollowingList;
