import React from 'react';
import PropTypes from 'prop-types';
import './UserHeader.css';
import { useHistory } from 'react-router-dom';

const UserHeader = (props) => {
  const { userData } = props;
  const history = useHistory();

  const handleClickUser = () => {
    history.push(`/users/${userData.id}`);
  };

  return (
    <div className="user_header" onClick={handleClickUser}>
      <div className="user_header_avatar">
        <img src={userData.photoURL} alt={userData.fullname} className="user_header_avatar--img" />
      </div>
      <div className="user_header_content">
        <div className="user_header_content--title">
          <h4 className="user_header_content--title-name">{userData.username}</h4>
          {userData.verified && (
            <img
              src="https://tiktok-react-cloudiosx.s3.us-east-2.amazonaws.com/SvgImages/verified.svg"
              alt="verified check mark"
            />
          )}
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
