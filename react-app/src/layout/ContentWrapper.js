import React from 'react';
import './MainLayoutTemplate.css';

const ContentWrapper = ({ children }) => {
  return <div className="main-layout-content">{children}</div>;
};

export default ContentWrapper;
