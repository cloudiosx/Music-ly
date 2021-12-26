import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';
import ProfileHead from '../ProfileHead/ProfileHead';
import ProfileBody from '../ProfileBody/ProfileBody';

function Profile() {
  // const dispatch = useDispatch();

  // const allPosts = useSelector((state) => state.postStore.allPosts);
  // console.log('allPosts ===> ', allPosts);

  // useEffect(() => {
  //   dispatch(getAllPosts());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <main className="main_profile-container">
      <ProfileHead />
      <ProfileBody />
    </main>
  );
}

export default Profile;
