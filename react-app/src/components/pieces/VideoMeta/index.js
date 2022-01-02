import React from 'react';
import PropTypes from 'prop-types';
import './VideoMeta.css';

const VideoMeta = (props) => {
  const { content, isHorizon, icon, onClick } = props;

  const handleClickIcon = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div className={`video_meta${isHorizon ? ' horizon' : ''}`}>
      <div className="video_meta--icon--wrap" onClick={handleClickIcon}>
        {/* <i class={icon}></i> */}
        {icon}
      </div>
      <b>{content}</b>
    </div>
  );
};

VideoMeta.propTypes = {
  content: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
  isHorizon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default VideoMeta;
