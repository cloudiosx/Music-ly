import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getAllUsersThatIDontFollow } from '../../store/user/actions';
import CardFollow from '../CardFollow/CardFollow';
import Post from '../Post/Post';
import './Following.css';

function Following() {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.userStore.allUsers);

  useEffect(() => {
    dispatch(getAllUsersThatIDontFollow());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="card_follow_wrap">
      {allUsers && allUsers.map((item) => <CardFollow key={item.id} userData={item} />)}
    </main>
  );
}

export default Following;
