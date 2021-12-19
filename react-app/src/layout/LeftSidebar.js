import React from 'react';
import Discover from '../components/Sidebar/Discover';
import ForYou from '../components/Sidebar/ForYou';
import LoginSide from '../components/Sidebar/LoginSide';
import SuggestedAccounts from '../components/Sidebar/SuggestedAccounts';
import './MainLayoutTemplate.css';

const LeftSidebar = ({ children }) => {
  return (
    <div className="main-layout-sidebar">
      <div className="sidebar-lock">
        <ForYou />
        <LoginSide />
        <SuggestedAccounts />
        <Discover />
      </div>
    </div>
  );
};

export default LeftSidebar;
