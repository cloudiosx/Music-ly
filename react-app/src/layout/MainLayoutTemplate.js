import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import './MainLayoutTemplate.css';
import LeftSidebar from './LeftSidebar';
import ContentWrapper from './ContentWrapper';
import LoginProvider from '../Context/LoginProvider';

function MainLayout(props) {
  return (
    <LoginProvider>
      <div className="page_main-layout">
        <NavBar />
        <div className="main-layout-wrapper">
          <LeftSidebar />
          <ContentWrapper>{props.children}</ContentWrapper>
        </div>
      </div>
    </LoginProvider>
  );
}

function MainLayoutTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsOfComponent) => (
        <MainLayout>
          <Component {...propsOfComponent} />
        </MainLayout>
      )}
    />
  );
}

export default MainLayoutTemplate;
