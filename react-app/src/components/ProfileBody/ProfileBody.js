import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileVideoItem from '../ProfileVideoItem/ProfileVideoItem';
import './ProfileBody.css';

function ProfileBody({ userProfile }) {
  const [currentHoverTab, setCurrentHoverTab] = useState('videos'); // videos , liked

  const transformStyle = useMemo(() => {
    if (currentHoverTab === 'videos') {
      return { transform: 'translate(0)' };
    }
    if (currentHoverTab === 'liked') {
      return { transform: 'translate(297px)' };
    }
  }, [currentHoverTab]);

  const handleMouseOver = (tabName) => (e) => {
    setCurrentHoverTab(tabName);
  };

  return (
    <div className="profile_body">
      <div className="tab_bar">
        <div
          className="tab_bar--videos"
          onMouseLeave={handleMouseOver('videos')}
          onMouseOver={handleMouseOver('videos')}
        >
          Videos
        </div>
        <div className="tab_bar--liked" onMouseLeave={handleMouseOver('videos')} onMouseOver={handleMouseOver('liked')}>
          Liked
        </div>
        <div className="tab_underline" style={{ ...transformStyle }}></div>
      </div>
      <div className="tab_body">
        {userProfile?.userPosts.map((item, idx) => {
          return <ProfileVideoItem key={idx} video={item} />;
        })}
      </div>
    </div>
  );
}
ProfileBody.propTypes = {
  userProfile: PropTypes.object,
};
export default ProfileBody;
