import React from 'react';
import UserHeader from '../../UserHeader/UserHeader';
import './FollowingList.css';
import { useSelector } from 'react-redux';

const FollowingList = () => {
  const allUsers = useSelector((state) => state.userStore.allUsers);

  return (
    <div className="wrapper_with_divider following_list">
      <h4 className="title">Following accounts</h4>
      {!!allUsers && allUsers.map((user) => <UserHeader key={user.id} userData={user} />)}
    </div>
  );
};

export default FollowingList;
