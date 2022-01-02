import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';
import ProfileHead from '../ProfileHead/ProfileHead';
import ProfileBody from '../ProfileBody/ProfileBody';
import { getUserProfile } from '../../store/user/actions';
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userStore.userProfile);

  useEffect(() => {
    dispatch(getUserProfile(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // TODO maybe add loading
  if (!userProfile) return null;

  return (
    <main className="main_profile-container">
      <ProfileHead userProfile={userProfile} />
      <ProfileBody userProfile={userProfile} />
    </main>
  );
}

export default Profile;
