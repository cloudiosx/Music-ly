import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import * as postStore from '../../store/post';
import "./Feed.css";

function Feed() {
  const history = useHistory();
  const dispatch = useDispatch();

  // useSelectors

  const allPosts = useSelector((state) => state.postStore.allPosts);
  console.log('allPosts ===> ', allPosts)

  useEffect(() => {
    dispatch(postStore.getAllPosts());
  }, [dispatch])

  return (
    <>
      <div>
        <NavBar />
        <div className="main-post-container">
          <div className='test-data'>
            <h1>Here are the random posts</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
