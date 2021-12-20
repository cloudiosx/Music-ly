import React from 'react';
import PropTypes from 'prop-types';
import './VideoMeta.css';

const VideoMeta = (props) => {
  const { content, isHorizon, icon } = props;
  return (
    <div className={`video_meta${isHorizon ? ' horizon' : ''}`}>
      <div className="video_meta--icon--wrap">
        <i class={icon}></i>
      </div>
      <b>{content}</b>
    </div>
  );
};

VideoMeta.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isHorizon: PropTypes.bool,
};

export default VideoMeta;
