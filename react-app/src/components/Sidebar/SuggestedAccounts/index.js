import React from 'react';
import { useSelector } from 'react-redux';
import UserHeader from '../../UserHeader/UserHeader';

import './SuggestedAccounts.css';

const SuggestedAccounts = () => {
  const allUsers = useSelector((state) => state.userStore.allUsers);

  return (
    <div className="wrapper_with_divider suggested_accounts">
      <h4 className="title">Suggested accounts</h4>
      {!!allUsers.length && allUsers.map((user) => <UserHeader key={user.id} userData={user} />)}
    </div>
  );
};

export default SuggestedAccounts;
