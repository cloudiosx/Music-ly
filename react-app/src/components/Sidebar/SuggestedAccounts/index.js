import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import UserHeader from '../../UserHeader/UserHeader';

import './SuggestedAccounts.css';

const SuggestedAccounts = () => {
  const allUsers = useSelector((state) => state.userStore.allUsers);
  const [seeMore, setSeeMore] = useState(false);

  const [firstList, secondList] = useMemo(() => {
    if (allUsers.length > 5) {
      return [allUsers.slice(0, 5), allUsers.slice(5)];
    }
    return [allUsers, []];
  }, [allUsers]);

  return (
    <div className="wrapper_with_divider suggested_accounts">
      <h4 className="title">Suggested accounts</h4>
      {!!firstList.length && firstList.map((user) => <UserHeader key={user.id} userData={user} />)}
      {!!secondList.length && (
        <>
          {seeMore && secondList.map((user) => <UserHeader key={user.id} userData={user} />)}
          <div className="see_more" onClick={() => setSeeMore(!seeMore)}>
            <p className="see_more--text">{seeMore ? 'See less' : 'See more'}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SuggestedAccounts;
