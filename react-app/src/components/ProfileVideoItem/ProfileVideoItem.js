import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './ProfileVideoItem.css';

function ProfileVideoItem({ video }) {
  const history = useHistory();

  const handleClickVideo = (e) => {
    e.stopPropagation(); // dont propagate the event on the <video>, which trigger play mode
    history.push(`/posts/${video.id}`);
  };

  return (
    <div className="profile_video_item_container">
      <div className="profile_video_item">
        <span onClick={handleClickVideo}>
          <video className="profile_video_item--video_player" src={video.videoURL} muted autoPlay loop></video>
        </span>
      </div>
    </div>
  );
}

ProfileVideoItem.propTypes = {
  video: PropTypes.object,
};
export default ProfileVideoItem;
