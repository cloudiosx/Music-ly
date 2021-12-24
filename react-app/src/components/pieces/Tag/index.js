import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

const Tag = (props) => {
  const { content } = props;
  return (
    <span className="tag_item">
      <div className="tag_item_content">
        <img src="../../../../public/images/hashtag.svg" alt="hashtag icon" className="tag_item_content--icon" />
        <span className="tag_item_content--name ">{content}</span>
      </div>
    </span>
  );
};

Tag.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tag;
