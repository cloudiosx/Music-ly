import React from 'react';
import UserHeader from '../../UserHeader/UserHeader';
import './SuggestedAccounts.css';

const SuggestedAccounts = (props) => {
  return (
    <div className="wrapper_with_divider suggested_accounts">
      <h4 className="title">Suggested accounts</h4>
      {[1, 2, 3, 4].map((user) => (
        <UserHeader key={user} />
      ))}
    </div>
  );
};

SuggestedAccounts.propTypes = {};

export default SuggestedAccounts;
