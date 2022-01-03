import React, { useMemo, useState } from 'react';
import UserHeader from '../../UserHeader/UserHeader';
import './FollowingList.css';
import { useSelector } from 'react-redux';

const FollowingList = ({ user }) => {
  const allUsers = useSelector((state) => state.userStore.allUsers);
  const [seeMore, setSeeMore] = useState(false);

  const followingUsers = useMemo(() => {
    return allUsers.filter((item) => item.isFollowed);
  }, [allUsers]);

  const [firstList, secondList] = useMemo(() => {
    if (followingUsers.length > 5) {
      return [followingUsers.slice(0, 5), followingUsers.slice(5)];
    }
    return [followingUsers, []];
  }, [followingUsers]);

  return (
    <div className="wrapper_with_divider following_list">
      <h4 className="title">Following accounts</h4>
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

export default FollowingList;
