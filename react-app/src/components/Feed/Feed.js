import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post/actions';
import Post from '../Post/Post';
import './Feed.css';

function Feed() {
  const dispatch = useDispatch();

  const allPosts = useSelector((state) => state.postStore.allPosts);
  console.log('allPosts ===> ', allPosts);

  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main_feed-container">
      {allPosts && allPosts.map((post) => <Post post={post} key={post.id} />)}
    </main>
  );
}

export default Feed;
