import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import "./Feed.css";

function Feed() {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // useEffect(() => {
  // }, [])

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
