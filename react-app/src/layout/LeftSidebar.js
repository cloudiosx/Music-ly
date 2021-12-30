import React from 'react';
import Discover from '../components/Sidebar/Discover';
import ForYou from '../components/Sidebar/ForYou';
import LoginSide from '../components/Sidebar/LoginSide';
import SuggestedAccounts from '../components/Sidebar/SuggestedAccounts';
import FollowingList from '../components/Sidebar/FollowingList';
import PopularTopics from '../components/Sidebar/PopularTopics';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './MainLayoutTemplate.css';
import About from '../components/Sidebar/About';

const LeftSidebar = ({ children }) => {
  const user = useSelector((state) => state.session.user);

  const location = useLocation();
  return (
    <div className="main-layout-sidebar">
      <div className="sidebar-lock">
        <ForYou />
        {!user && <LoginSide />}
        <PopularTopics />
        {location.pathname !== '/following' && <SuggestedAccounts />}
        {user && <FollowingList />}
        <Discover />
        <About />
      </div>
    </div>
  );
};

export default LeftSidebar;
