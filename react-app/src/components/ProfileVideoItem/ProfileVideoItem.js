import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProfileVideoItem.css';

function ProfileVideoItem() {
  const history = useHistory();

  const handleClickVideo = (e) => {
    e.stopPropagation(); // dont propagate the event on the <video>, which trigger play mode
    //TODO: go to postDetail
    history.push(`/posts/${1}`);
  };

  return (
    <div className="profile_video_item_container">
      <div className="profile_video_item">
        <span onClick={handleClickVideo}>
          <video className="profile_video_item--video_player" src="/videos/loginVideo1.mp4" muted autoPlay loop></video>
        </span>
      </div>
    </div>
  );
}

export default ProfileVideoItem;
