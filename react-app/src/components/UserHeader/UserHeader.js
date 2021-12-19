import React from 'react';
import './UserHeader.css';

const UserHeader = (props) => {
  return (
    <div className="user_header">
      <div className="user_header_avatar">
        <img src="/images/user1.jpg" alt="user 1" className="user_header_avatar--img" />
      </div>
      <div className="user_header_content">
        <div className="user_header_content--title">
          <h4 className="user_header_content--title-name">Test user Name</h4>
          <img src="/images/verified.svg" alt="verified check mark" />
        </div>
        <p className="user_header_content--subname">Real Name of user</p>
      </div>
    </div>
  );
};

export default UserHeader;
