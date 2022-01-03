import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post/actions';
import { getAllUsersThatIDontFollow } from '../../store/user/actions';
import CardFollow from '../CardFollow/CardFollow';
import Post from '../Post/Post';
import './Following.css';

function Following() {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.userStore.allUsersThatIAmNotFollowing);
  const allPosts = useSelector((state) => state.postStore.allPosts);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (user) {
      if (user.totalFollowings) {
        dispatch(getAllPosts({ following: true }));
      } else {
        dispatch(getAllUsersThatIDontFollow());
      }
    } else {
      dispatch(getAllUsersThatIDontFollow());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (user && !!user.totalFollowings && !!allPosts.length) {
    return (
      <main className="main_feed-container">
        {allPosts && allPosts.map((post) => <Post post={post} key={post.id} />)}
      </main>
    );
  }

  return (
    <main className="card_follow_wrap">
      {allUsers && allUsers.map((item) => <CardFollow key={item.id} userData={item} />)}
    </main>
  );
}

export default Following;
