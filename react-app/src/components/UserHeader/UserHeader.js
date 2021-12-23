import React from 'react';
import PropTypes from 'prop-types';
import './UserHeader.css';

const UserHeader = (props) => {
  const { userData } = props;
  return (
    <div className="user_header">
      <div className="user_header_avatar">
        <img src={userData.photoURL} alt={userData.fullname} className="user_header_avatar--img" />
      </div>
      <div className="user_header_content">
        <div className="user_header_content--title">
          <h4 className="user_header_content--title-name">{userData.username}</h4>
          <img src="/images/verified.svg" alt="verified check mark" />
        </div>
        <p className="user_header_content--subname">{userData.fullname}</p>
      </div>
    </div>
  );
};

UserHeader.propTypes = {
  userData: PropTypes.object,
};

export default UserHeader;
