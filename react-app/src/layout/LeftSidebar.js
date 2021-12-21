import React from 'react';
import Discover from '../components/Sidebar/Discorver';
import ForYou from '../components/Sidebar/ForYou';
import LoginSide from '../components/Sidebar/LoginSide';
import SuggestedAccounts from '../components/Sidebar/SuggestedAccounts';
import FollowingList from '../components/Sidebar/FollowingList';
import PopularTopics from '../components/Sidebar/PopularTopics';
import { useSelector } from 'react-redux';
import './MainLayoutTemplate.css';

const LeftSidebar = ({ children }) => {
  const user = useSelector((state) => state.session.user);
  return (
    <div className="main-layout-sidebar">
      <div className="sidebar-lock">
        <ForYou />
        {!user && <LoginSide />}
        <PopularTopics />
        <SuggestedAccounts />
        {!user && <FollowingList />}
        <Discover />
      </div>
    </div>
  );
};

export default LeftSidebar;
